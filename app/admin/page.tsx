"use client";
import { useState, useEffect } from "react";
import { db } from "../../lib/firebase";
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

export default function AdminPage() {
  const [news, setNews] = useState<any[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    title: "", category: "", image: "", description: "", content: "",
    author: "", featured: false, trending: false, breaking: false
  });

  const fetchNews = async () => {
    const snap = await getDocs(collection(db, "news"));
    setNews(snap.docs.map(d => ({ id: d.id, ...d.data() })));
  };

  useEffect(() => { fetchNews(); }, []);

  const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;
    setUploading(true);
    const file = e.target.files[0];
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "bharat-bulletin");
    try {
      const res = await fetch("https://api.cloudinary.com/v1_1/qccuqntk/image/upload", { method: "POST", body: data });
      const resData = await res.json();
      setFormData(prev => ({ ...prev, image: resData.secure_url }));
      alert("✅ Image Uploaded");
    } catch { alert("❌ Upload Failed"); }
    setUploading(false);
  };

  const publishNews = async () => {
    if (!formData.title || !formData.category || !formData.image || !formData.content) {
      alert("Please fill all fields."); return;
    }
    const newsData = {
      ...formData,
      slug: formData.title.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-"),
      date: new Date().toLocaleDateString("en-IN"),
      updatedAt: new Date(),
      createdAt: editingId ? undefined : new Date()
    };
    try {
      if (editingId) {
        await updateDoc(doc(db, "news", editingId), newsData);
        alert("✅ News Updated!");
      } else {
        await addDoc(collection(db, "news"), newsData);
        alert("✅ News Published!");
      }
      setEditingId(null);
      setFormData({ title: "", category: "", image: "", description: "", content: "", author: "", featured: false, trending: false, breaking: false });
      fetchNews();
    } catch (e) { alert("❌ Error"); }
  };

  const deleteNews = async (id: string) => {
    if (confirm("Delete this?")) { await deleteDoc(doc(db, "news", id)); fetchNews(); }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-red-100 via-white to-red-50 py-10 px-4">
      {/* Dashboard Stats */}
      <div className="max-w-3xl mx-auto grid grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow text-center"><h3>Total</h3><p className="text-xl font-bold">{news.length}</p></div>
        <div className="bg-white p-4 rounded-lg shadow text-center"><h3>Featured</h3><p className="text-xl font-bold">{news.filter(n => n.featured).length}</p></div>
        <div className="bg-white p-4 rounded-lg shadow text-center"><h3>Trending</h3><p className="text-xl font-bold">{news.filter(n => n.trending).length}</p></div>
      </div>

      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-2xl space-y-5">
        <h1 className="text-3xl font-bold text-red-600 text-center">{editingId ? "Edit News" : "📰 Bharat Bulletin Admin"}</h1>
        <input className="w-full border p-3 rounded-lg" placeholder="News Title" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} />
        <input type="file" onChange={uploadImage} className="w-full border p-3 rounded-lg" />
        {uploading && <p>Uploading...</p>}
        {formData.image && <img src={formData.image} className="h-40 w-full object-cover rounded" />}
        <input className="w-full border p-3 rounded-lg" placeholder="Category" value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} />
        <textarea className="w-full border p-3 rounded-lg" rows={3} placeholder="Short Description" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} />
        <ReactQuill theme="snow" value={formData.content} onChange={v => setFormData({...formData, content: v})} className="h-60 mb-12" />
        <input className="w-full border p-3 rounded-lg" placeholder="Author Name" value={formData.author} onChange={e => setFormData({...formData, author: e.target.value})} />
        
        <div className="flex gap-4 border p-4 rounded-lg">
          <label><input type="checkbox" checked={formData.featured} onChange={e => setFormData({...formData, featured: e.target.checked})} /> Featured</label>
          <label><input type="checkbox" checked={formData.trending} onChange={e => setFormData({...formData, trending: e.target.checked})} /> Trending</label>
          <label><input type="checkbox" checked={formData.breaking} onChange={e => setFormData({...formData, breaking: e.target.checked})} /> Breaking</label>
        </div>
        
        <button onClick={publishNews} className="w-full bg-red-600 text-white py-4 rounded-lg font-bold">
          {editingId ? "🚀 Update News" : "🚀 Publish News"}
        </button>
      </div>

      <div className="max-w-3xl mx-auto mt-10 bg-white p-6 rounded-2xl shadow">
        {news.map(item => (
          <div key={item.id} className="flex justify-between border-b p-4 items-center">
            <span>{item.title}</span>
            <div className="flex gap-2">
              <button onClick={() => { setEditingId(item.id); setFormData(item); window.scrollTo(0, 0); }} className="text-blue-600">Edit</button>
              <button onClick={() => deleteNews(item.id)} className="text-red-600">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
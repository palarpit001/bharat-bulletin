"use client";
import { useState } from "react";
import { db } from "../../lib/firebase";
import { collection, addDoc } from "firebase/firestore";
export default function AdminPage() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const [uploading, setUploading] = useState(false);
  const [featured, setFeatured] = useState(false);
const [trending, setTrending] = useState(false);
const [breaking, setBreaking] = useState(false);

  const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
  if (!e.target.files?.length) return;

  const file = e.target.files[0];

  setUploading(true);

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "bharat-bulletin");

  try {
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/qccuqntk/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();

    setImage(data.secure_url);

    alert("✅ Image Uploaded Successfully");
  } catch (err) {
    console.error(err);
    alert("❌ Image Upload Failed");
  }

  setUploading(false);
};

  const publishNews = async () => {
    if (
      !title ||
      !category ||
      !image ||
      !description ||
      !content ||
      !author
    ) {
      alert("Please fill all fields.");
      return;
    }

    try {
      await addDoc(collection(db, "news"), {
        title,

        slug: title
          .toLowerCase()
          .trim()
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-"),

        category,
        image,
        description,
        content,
        author,

        date: new Date().toLocaleDateString("en-IN"),

        createdAt: new Date(),
        updatedAt: new Date(),

featured,
trending,
breaking,
      });

      alert("✅ News Published Successfully!");

      setTitle("");
      setCategory("");
      setImage("");
      setDescription("");
      setContent("");
      setAuthor("");
      setFeatured(false);
setTrending(false);
setBreaking(false);
    } catch (error) {
      console.error(error);
      alert("❌ Error Publishing News");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-red-100 via-white to-red-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-2xl">

        <h1 className="text-4xl font-bold text-center text-red-600 mb-2">
          📰 Bharat Bulletin Admin
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Publish news directly to Firebase
        </p>

        <div className="space-y-5">
          <input
  className="w-full border border-gray-300 p-3 rounded-lg"
  placeholder="News Title"
  value={title}
  onChange={(e) => setTitle(e.target.value)}
/>

          <div>
  <input
    type="file"
    accept="image/*"
    onChange={uploadImage}
    className="w-full border border-gray-300 p-3 rounded-lg"
  />

  {uploading && (
    <p className="text-blue-600 mt-2">Uploading Image...</p>
  )}

  {image && (
    <img
      src={image}
      alt="Preview"
      className="mt-4 w-full h-60 object-cover rounded-lg"
    />
  )}
</div>

          <input
            className="w-full border border-gray-300 p-3 rounded-lg"
            placeholder="Category (india, politics, sports...)"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />


          <textarea
            className="w-full border border-gray-300 p-3 rounded-lg"
            rows={3}
            placeholder="Short Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <textarea
            className="w-full border border-gray-300 p-3 rounded-lg"
            rows={8}
            placeholder="Complete News Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <input
            className="w-full border border-gray-300 p-3 rounded-lg"
            placeholder="Author Name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            
          />
<div className="space-y-3 border rounded-lg p-4">

  <label className="flex items-center gap-3">
    <input
      type="checkbox"
      checked={featured}
      onChange={(e) => setFeatured(e.target.checked)}
    />
    ⭐ Featured News
  </label>

  <label className="flex items-center gap-3">
    <input
      type="checkbox"
      checked={trending}
      onChange={(e) => setTrending(e.target.checked)}
    />
    🔥 Trending News
  </label>

  <label className="flex items-center gap-3">
    <input
      type="checkbox"
      checked={breaking}
      onChange={(e) => setBreaking(e.target.checked)}
    />
    🔴 Breaking News
  </label>

</div>
          <button
            onClick={publishNews}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg text-xl font-bold"
          >
            🚀 Publish News
          </button>

        </div>

      </div>
    </main>
  );
}
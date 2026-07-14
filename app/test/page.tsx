import { db } from "../../lib/firebase";

export default function TestPage() {
  console.log(db);

  return (
    <div className="flex items-center justify-center h-screen text-4xl font-bold">
      ✅ Firebase Connected Successfully
    </div>
  );
}
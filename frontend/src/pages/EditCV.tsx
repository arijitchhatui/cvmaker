import { useState } from "react";
import { useParams } from "react-router";

import { useCVsStore } from "../stores/cVsStore";

export default function EditCVPage() {
  const { id } = useParams<{ id: string }>();
  const { cvs, updateCV } = useCVsStore();

  const cv = cvs.find((cv) => cv.id === id);

  const [cvName, setCvName] = useState(cv?.cvName);
  const [firstName, setFirstName] = useState(cv?.firstName);
  const [lastName, setLastName] = useState(cv?.lastName);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    updateCV(cv?.id ?? "", {
      cvName,
      firstName,
      lastName,
    });
  }

  if (!cv) {
    return (
      <main className="min-h-screen bg-zinc-950 text-zinc-100 p-10">
        CV not found
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 px-6 py-10">
      <div className="mx-auto max-w-2xl space-y-8">
        {/* Mode indicator */}
        <div className="rounded-lg border border-yellow-500/40 bg-yellow-500/10 px-4 py-3 text-sm font-medium text-yellow-300">
          ✏️ You are <strong>editing</strong> the CV:
          <span className="ml-1 underline">{cv.cvName}</span>
        </div>

        {/* Card */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 shadow">
          <h1 className="mb-6 text-2xl font-semibold">Edit CV</h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* SAME FORM */}
            {/* CV name */}
            <div>
              <label className="mb-1 block text-sm text-zinc-400">
                CV name
              </label>
              <input
                value={cvName}
                onChange={(e) => setCvName(e.target.value)}
                className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2"
              />
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-yellow-500 px-4 py-2 font-medium text-black hover:bg-yellow-400"
            >
              Save changes
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

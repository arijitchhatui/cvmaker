import { useEffect, useState } from "react";

import { useCVsStore } from "../stores/cVsStore";
import { generateTimeBasedId } from "../utils";

export default function CreateCvPage() {
  const { cvs, activeCvId, createCV, updateCV } = useCVsStore();

  const isEditing = Boolean(activeCvId);
  const activeCV = cvs.find((cv) => cv.id === activeCvId);

  const [cvName, setCvName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    if (isEditing && activeCV) {
      setCvName(activeCV.cvName);
      setFirstName(activeCV.firstName);
      setLastName(activeCV.lastName);
    }
  }, [activeCV, isEditing]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (isEditing && activeCvId) {
      updateCV(activeCvId, {
        cvName,
        firstName,
        lastName,
      });
      return;
    }

    createCV({
      id: generateTimeBasedId(),
      cvName,
      firstName,
      lastName,
      middleName: null,
      nickname: null,
      avatar: null,
      contacts: {
        email: "",
        phone: "",
      },
      address: "",
      summary: "",
      objectives: null,
      education: [],
      experience: [],
      skills: [],
      projects: [],
      certifications: [],
      languages: [],
      hobbies: [],
      additionalInfo: null,
      otherExperiences: [],
      references: [],
      links: [],
    });
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 px-6 py-10">
      <div className="mx-auto max-w-2xl space-y-8">
        {/* 🔔 Mode indicator */}
        <div
          className={`rounded-lg border px-4 py-3 text-sm font-medium
          ${
            isEditing
              ? "border-yellow-500/40 bg-yellow-500/10 text-yellow-300"
              : "border-emerald-500/40 bg-emerald-500/10 text-emerald-300"
          }`}
        >
          {isEditing ? (
            <>
              ✏️ You are <strong>editing</strong> the CV:
              <span className="ml-1 underline">{activeCV?.cvName}</span>
            </>
          ) : (
            <>
              🆕 You are <strong>creating a new CV</strong>
            </>
          )}
        </div>

        {/* 📄 Card */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 shadow">
          <h1 className="mb-6 text-2xl font-semibold">
            {isEditing ? "Edit CV" : "Create CV"}
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* CV name */}
            <div>
              <label className="mb-1 block text-sm text-zinc-400">
                CV name
              </label>
              <input
                value={cvName}
                onChange={(e) => setCvName(e.target.value)}
                required
                placeholder="e.g. Frontend Developer – EN"
                className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 outline-none focus:border-indigo-500"
              />
            </div>

            {/* Person name */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm text-zinc-400">
                  First name
                </label>
                <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm text-zinc-400">
                  Last name
                </label>
                <input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className={`w-full rounded-md px-4 py-2 font-medium transition
              ${
                isEditing
                  ? "bg-yellow-500 text-black hover:bg-yellow-400"
                  : "bg-indigo-600 hover:bg-indigo-500"
              }`}
            >
              {isEditing ? "Save changes" : "Create CV"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

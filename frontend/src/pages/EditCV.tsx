import { useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";

import { useCVsStore } from "../stores/cVsStore";
import type { CV } from "../types";

export default function EditCVPage() {
  const { id } = useParams<{ id: string }>();
  const { cvs, updateCV, deleteCV } = useCVsStore();

  const cvFinded = cvs.find((cv) => cv.id === id);

  const [cv, setCV] = useState<CV>({
    id: cvFinded?.id || "",
    cvName: cvFinded?.cvName || "",
    firstName: cvFinded?.firstName || "",
    lastName: cvFinded?.lastName || "",
    middleName: cvFinded?.middleName || null,
    nickname: cvFinded?.nickname || null,
    avatar: cvFinded?.avatar || null,
    contacts: cvFinded?.contacts || { email: "", phone: "" },
    address: cvFinded?.address || "",
    summary: cvFinded?.summary || "",
    objectives: cvFinded?.objectives || null,
    education: cvFinded?.education || [],
    experience: cvFinded?.experience || [],
    skills: cvFinded?.skills || [],
    projects: cvFinded?.projects || [],
    certifications: cvFinded?.certifications || [],
    languages: cvFinded?.languages || [],
    hobbies: cvFinded?.hobbies || [],
    additionalInfo: cvFinded?.additionalInfo || null,
    otherExperiences: cvFinded?.otherExperiences || [],
    references: cvFinded?.references || [],
    links: cvFinded?.links || [],
  });

  function handleSubmit(e: React.FormEvent, cvFindedId: CV["id"]) {
    e.preventDefault();

    updateCV(cvFindedId, {
      cvName: cv.cvName,
      firstName: cv.firstName,
      lastName: cv.lastName,
      middleName: cv.middleName,
      nickname: cv.nickname,
      avatar: cv.avatar,
      contacts: cv.contacts,
      address: cv.address,
      summary: cv.summary,
      objectives: cv.objectives,
      education: cv.education,
      experience: cv.experience,
      skills: cv.skills,
      projects: cv.projects,
      certifications: cv.certifications,
      languages: cv.languages,
      hobbies: cv.hobbies,
      additionalInfo: cv.additionalInfo,
      otherExperiences: cv.otherExperiences,
      references: cv.references,
      links: cv.links,
    });

    toast.success("CV updated successfully.");
  }

  function handleDelete(cvFindedId: CV["id"]) {
    if (confirm("Are you sure you want to delete this CV?")) {
      deleteCV(cvFindedId);

      toast.success("CV deleted successfully.");
    } else {
      toast.info("CV deletion cancelled.", { autoClose: 1000 });
    }
  }

  if (!cvFinded) {
    return (
      <main className="min-h-screen bg-zinc-950 text-zinc-100 p-10">
        CV not found
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 px-6 py-10">
      <div className="mx-auto sm:max-w-5xl max-w-2xl space-y-8">
        <div className="rounded-lg border border-yellow-500/40 bg-yellow-500/10 px-4 py-3 text-sm font-medium text-yellow-300">
          ✏️ You are <strong>editing</strong> the CV:
          <span className="ml-1 underline">{cv.cvName}</span>
        </div>

        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 shadow">
          <div>
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-semibold">Edit CV</h1>
              <button
                onClick={() => handleDelete(cvFinded.id)}
                className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-500 transition"
              >
                Delete CV
              </button>
            </div>
          </div>

          <form
            onSubmit={(e) => handleSubmit(e, cvFinded.id)}
            className="space-y-5"
          >
            <div>
              <label className="mb-1 block text-sm text-zinc-400">
                CV name
              </label>
              <input
                value={cv.cvName}
                onChange={(e) => setCV({ ...cv, cvName: e.target.value })}
                placeholder="e.g. My Awesome CV"
                className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                value={cv.firstName}
                onChange={(e) => setCV({ ...cv, firstName: e.target.value })}
                placeholder="e.g. John"
                className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2"
              />
              <input
                value={cv.lastName}
                onChange={(e) => setCV({ ...cv, lastName: e.target.value })}
                placeholder="e.g. Doe"
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

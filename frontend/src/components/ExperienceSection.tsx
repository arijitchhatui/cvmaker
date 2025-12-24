import type { CV } from "../types";

type Experience = CV["experience"][number];

interface ExperienceSectionProps {
  experience: Experience[];
  onChange: (experience: Experience[]) => void;
}

export default function ExperienceSection({
  experience,
  onChange,
}: ExperienceSectionProps) {
  function addExperience() {
    onChange([
      ...experience,
      {
        company: "",
        position: "",
        startDate: "",
        endDate: null,
        responsibilities: null,
        location: null,
      },
    ]);
  }

  function updateExperience(
    index: number,
    field: keyof Experience,
    value: string | null,
  ) {
    const updated = [...experience];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  }

  function removeExperience(index: number) {
    onChange(experience.filter((_, i) => i !== index));
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Experience</h2>

        <button
          type="button"
          onClick={addExperience}
          className="rounded-md border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-300 hover:bg-emerald-500/20 transition"
        >
          + Add experience
        </button>
      </div>

      {experience.length === 0 && (
        <p className="text-sm text-zinc-500">No experience added yet.</p>
      )}

      {experience.map((exp, index) => (
        <div
          key={index}
          className="rounded-lg border border-zinc-800 bg-zinc-950 p-4 space-y-4"
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-zinc-300">
              Experience #{index + 1}
            </span>

            <button
              type="button"
              onClick={() => removeExperience(index)}
              className="text-sm text-red-400 hover:text-red-300 transition"
            >
              − Remove
            </button>
          </div>

          <div>
            <label className="mb-1 block text-sm text-zinc-400">
              Company <span className="text-red-500">*</span>
            </label>
            <input
              value={exp.company}
              onChange={(e) =>
                updateExperience(index, "company", e.target.value)
              }
              placeholder="e.g. Example Corp"
              required
              className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm text-zinc-400">
              Position <span className="text-red-500">*</span>
            </label>
            <input
              value={exp.position}
              onChange={(e) =>
                updateExperience(index, "position", e.target.value)
              }
              placeholder="e.g. Software Engineer"
              required
              className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm text-zinc-400">
                Start date <span className="text-red-500">*</span>
              </label>
              <input
                type="month"
                value={exp.startDate}
                onChange={(e) =>
                  updateExperience(index, "startDate", e.target.value)
                }
                placeholder="e.g. 2020-09"
                required
                className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm text-zinc-400">
                End date
              </label>
              <input
                type="month"
                value={exp.endDate || ""}
                onChange={(e) =>
                  updateExperience(index, "endDate", e.target.value || null)
                }
                placeholder="e.g. 2024-06"
                className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2"
              />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm text-zinc-400">Location</label>
            <input
              value={exp.location || ""}
              onChange={(e) =>
                updateExperience(index, "location", e.target.value || null)
              }
              placeholder="e.g. City, Country"
              className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-zinc-400">
              Responsibilities
            </label>
            <textarea
              value={exp.responsibilities || ""}
              onChange={(e) =>
                updateExperience(
                  index,
                  "responsibilities",
                  e.target.value || null,
                )
              }
              placeholder="e.g. - Developed features X, Y, Z..."
              className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2"
              rows={4}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

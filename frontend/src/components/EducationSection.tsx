import type { CV } from "../types";

type Education = CV["education"][number];

interface EducationSectionProps {
  education: Education[];
  onChange: (education: Education[]) => void;
}

export default function EducationSection({
  education,
  onChange,
}: EducationSectionProps) {
  function addEducation() {
    onChange([
      ...education,
      {
        institution: "",
        degree: "",
        fieldOfStudy: "",
        startDate: "",
        endDate: null,
        grade: null,
        description: null,
        location: null,
      },
    ]);
  }

  function updateEducation(
    index: number,
    field: keyof Education,
    value: string | null,
  ) {
    const updated = [...education];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  }

  function removeEducation(index: number) {
    onChange(education.filter((_, i) => i !== index));
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Education</h2>

        <button
          type="button"
          onClick={addEducation}
          className="rounded-md border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-300 hover:bg-emerald-500/20 transition"
        >
          + Add education
        </button>
      </div>

      {education.length === 0 && (
        <p className="text-sm text-zinc-500">No education added yet.</p>
      )}

      {education.map((edu, index) => (
        <div
          key={index}
          className="rounded-lg border border-zinc-800 bg-zinc-950 p-4 space-y-4"
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-zinc-300">
              Education #{index + 1}
            </span>

            <button
              type="button"
              onClick={() => removeEducation(index)}
              className="text-sm text-red-400 hover:text-red-300 transition"
            >
              − Remove
            </button>
          </div>

          <div>
            <label className="mb-1 block text-sm text-zinc-400">
              Institution <span className="text-red-500">*</span>
            </label>
            <input
              value={edu.institution}
              onChange={(e) =>
                updateEducation(index, "institution", e.target.value)
              }
              placeholder="e.g. University of Example"
              className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm text-zinc-400">
              Degree <span className="text-red-500">*</span>
            </label>
            <input
              value={edu.degree}
              onChange={(e) => updateEducation(index, "degree", e.target.value)}
              placeholder="e.g. Bachelor of Science"
              className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm text-zinc-400">
              Field of study <span className="text-red-500">*</span>
            </label>
            <input
              value={edu.fieldOfStudy}
              onChange={(e) =>
                updateEducation(index, "fieldOfStudy", e.target.value)
              }
              placeholder="e.g. Computer Science"
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
                value={edu.startDate}
                onChange={(e) =>
                  updateEducation(index, "startDate", e.target.value)
                }
                placeholder="e.g. 2020-09"
                className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm text-zinc-400">
                End date
              </label>
              <input
                type="month"
                value={edu.endDate || ""}
                onChange={(e) =>
                  updateEducation(index, "endDate", e.target.value || null)
                }
                placeholder="e.g. 2024-06"
                className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm text-zinc-400">Grade</label>
              <input
                value={edu.grade || ""}
                onChange={(e) =>
                  updateEducation(index, "grade", e.target.value || null)
                }
                placeholder="e.g. 3.8 GPA"
                className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm text-zinc-400">
                Location
              </label>
              <input
                value={edu.location || ""}
                onChange={(e) =>
                  updateEducation(index, "location", e.target.value || null)
                }
                placeholder="e.g. City, Country"
                className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

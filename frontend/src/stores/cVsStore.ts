import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { CV } from "../types";

interface CVsStore {
  cvs: CV[];
  activeCvId: string | null;

  createCV: (cv: CV) => void;
  updateCV: (id: string, data: Partial<CV>) => void;
  deleteCV: (id: string) => void;
  setActiveCV: (id: string) => void;
}

export const useCVsStore = create<CVsStore>()(
  persist(
    (set) => ({
      cvs: [],
      activeCvId: null,

      createCV: (cv) =>
        set((state) => ({
          cvs: [...state.cvs, cv],
          activeCvId: cv.id,
        })),

      updateCV: (id, data) =>
        set((state) => ({
          cvs: state.cvs.map((cv) => (cv.id === id ? { ...cv, ...data } : cv)),
        })),

      deleteCV: (id) =>
        set((state) => ({
          cvs: state.cvs.filter((cv) => cv.id !== id),
          activeCvId: state.activeCvId === id ? null : state.activeCvId,
        })),

      setActiveCV: (id) =>
        set(() => ({
          activeCvId: id,
        })),
    }),
    {
      name: "cv-storage",
    },
  ),
);

import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CVStore {
  firstName: string;
  middleName: string | null;
  lastName: string;
  nickname: string | null;
  avatar: string | null;
  contacts: {
    email: string;
    phone: string;
  };
  address: string;
  summary: string;
  objectives: string | null;
  education: Array<{
    institution: string;
    degree: string;
    fieldOfStudy: string;
    startDate: string;
    endDate: string | null;
    grade: string | null;
    description: string | null;
    location: string | null;
  }>;
  experience: Array<{
    company: string;
    position: string;
    startDate: string;
    endDate: string | null;
    responsibilities: string | null;
    location: string | null;
  }>;
  skills: string[];
  projects: Array<{
    name: string;
    description: string;
    startDate: string;
    endDate: string | null;
    link: string | null;
    location: string | null;
  }>;
  certifications: Array<{
    name: string;
    issuingOrganization: string;
    issueDate: string;
    expirationDate: string | null;
    credentialID: string | null;
    credentialURL: string | null;
  }>;
  languages: Array<{
    name: string;
    proficiency: string;
  }>;
  hobbies: string[];
  additionalInfo: string | null;
  otherExperiences: Array<{
    title: string;
    description: string;
    startDate: string | null;
    endDate: string | null;
    location: string | null;
  }>;
  references: Array<{
    name: string;
    relationship: string;
    contactInfo: string;
  }>;
  links: Array<{
    label: string;
    url: string;
  }>;

  setCVData: (data: Partial<CVStore>) => void;
}

export const useCVStore = create<CVStore>()(
  persist(
    (set) => ({
      firstName: "",
      middleName: null,
      lastName: "",
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

      setCVData: (data: Partial<CVStore>) =>
        set((state) => ({
          ...state,
          ...data,
        })),
    }),
    {
      name: "cv-storage",
    },
  ),
);

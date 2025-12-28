import { useTranslation } from "react-i18next";

import { useUserStore } from "../stores/userStore";
import type { locale } from "../types";

export default function SettingsPage() {
  const { setLocale } = useUserStore();
  const { t, i18n } = useTranslation();

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-10 text-zinc-100">
      <title>Settings - CV Maker</title>

      <div className="mx-auto max-w-2xl space-y-8">
        <h1 className="text-2xl font-semibold">{t("Settings")}</h1>

        <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-6 shadow">
          <h2 className="mb-4 text-lg font-medium">User Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="mb-1 block font-medium" htmlFor="language">
                Language
              </label>
              <select
                id="language"
                className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 text-zinc-100"
                value={i18n.language}
                onChange={(e) => {
                  i18n.changeLanguage(e.target.value);
                  setLocale(e.target.value as locale);
                }}
              >
                <option value="en">English</option>
                <option value="pt">Português</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

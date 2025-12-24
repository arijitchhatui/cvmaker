import { Link } from "react-router";

export function Header() {
  return (
    <header className="border-b border-zinc-800 bg-zinc-950">
      <div className="mx-auto max-w-4xl px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-lg font-semibold text-zinc-100 hover:text-indigo-400 transition"
        >
          CV Maker
        </Link>

        <Link
          to="/create"
          className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500 transition"
        >
          Create CV
        </Link>
      </div>
    </header>
  );
}

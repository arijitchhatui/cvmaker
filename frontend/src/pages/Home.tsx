import { Link } from "react-router";

import { useCVsStore } from "../stores/cVsStore";

export default function HomePage() {
  const { cvs } = useCVsStore();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">
        Welcome to the Home Page
      </h1>

      <p className="mt-4 text-gray-600">
        You have {cvs.length} CV{cvs.length !== 1 ? "s" : ""} saved.
      </p>

      {/* Link to create a new CV */}
      <Link
        to="/create"
        className="mt-6 inline-block rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        Create New CV
      </Link>

      {/* List of existing CVs */}
      {cvs.length > 0 && (
        <div className="mt-8 w-full max-w-2xl">
          <h2 className="text-2xl font-semibold text-gray-800">Your CVs</h2>
          <ul className="mt-4 space-y-4">
            {cvs.map((cv) => (
              <li
                key={cv.id}
                className="rounded border border-gray-300 bg-white p-4 shadow"
              >
                <h3 className="text-xl font-bold text-gray-900">{cv.cvName}</h3>
                <p className="text-gray-700">
                  {cv.firstName} {cv.lastName}
                </p>
                <Link
                  to={`/cv/${cv.id}`}
                  className="mt-2 inline-block text-blue-500 hover:underline"
                >
                  View CV Details
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}

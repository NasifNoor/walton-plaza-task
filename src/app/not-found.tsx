import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <h1 className="mb-4 text-6xl font-bold">404</h1>

      <h2 className="mb-2 text-2xl font-semibold">Page Not Found</h2>

      <p className="mb-6 text-gray-500">
        The page you're looking for doesn't exist.
      </p>

      <Link
        href="/"
        className="rounded-lg bg-black px-6 py-3 text-white transition hover:bg-gray-800"
      >
        Back to Home
      </Link>
    </div>
  );
}

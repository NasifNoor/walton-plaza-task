"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="py-20 text-center">
      <h1 className="text-3xl font-bold text-red-500">Something went wrong</h1>

      <p className="mt-2 text-gray-500">Failed to load product.</p>

      <button
        onClick={() => reset()}
        className="mt-6 rounded bg-black px-5 py-3 text-white"
      >
        Try Again
      </button>
    </div>
  );
}

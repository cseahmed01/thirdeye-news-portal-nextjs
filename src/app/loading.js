// app/loading.tsx

export default function Loading() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      {/* Spinner */}
      <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>

      {/* Text */}
      <p className="mt-4 text-lg font-semibold text-gray-700">
        Loading...
      </p>
    </div>
  );
}

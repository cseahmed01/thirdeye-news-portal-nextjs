export default async function page({ params }) {
  const { id } = await params;
  console.log("🚀 ~ page ~ id:", id);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Category Page</h1>
      <p className="text-gray-600">This is the category {id} page.</p>
    </div>
  );
}

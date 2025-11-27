import CategoryFilter from "../components/CategoryFilter";

export default function ModelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative flex flex-col min-h-screen md:flex-row">
      <div className="sticky top-0 z-10 w-full bg-white border-b border-gray-200 md:fixed md:w-64 md:top-1/2 md:-translate-y-1/2 md:border-none">
        <CategoryFilter />
      </div>
      <div className="flex-1 p-4 md:ml-64">{children}</div>
    </section>
  );
}

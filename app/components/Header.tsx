export default function Header({ title }: { title: string }) {
  return (
    <header className="mb-6">
      <h1 className="text-3xl font-bold">{title}</h1>
    </header>
  );
}

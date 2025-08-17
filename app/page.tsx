 export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-4">Content Insight</h1>
      <nav className="mb-8 space-x-4">
        <a href="/dashboard" className="text-blue-600 underline">Dashboard</a>
        <a href="/topicos" className="text-blue-600 underline">Tópicos</a>
        <a href="/contenidos" className="text-blue-600 underline">Contenidos</a>
        <a href="/insights" className="text-blue-600 underline">Insights</a>
        <a href="/creadoras" className="text-blue-600 underline">Creadoras</a>
      </nav>
      {/* Aquí va tu contenido visual, mapas, etc. */}
    </main>
  );
}
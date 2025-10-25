function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen text-gray-400">
      <div className="container">{children}</div>
    </main>
  );
}

export default layout;

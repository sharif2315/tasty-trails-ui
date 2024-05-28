export default function Home() {
  return (
    <main className="grid place-items-center h-screen">

      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-4xl">Tasty Trails UI</h1>
        {/* <br /> */}
        <a href="/dashboard">
          <button className="p-2 bg-blue-500 text-white rounded-lg">Go to Dashboard</button>
        </a>
      </div>

    </main>
  );
}

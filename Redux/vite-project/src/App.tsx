function App() {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex">
        <button className="px-3 py-3 rounded-md bg-green-500 text-xl font-semibold text-white">
          Increment
        </button>
        <h1 className="text-3xl">0</h1>

        <button className="px-3 py-3 rounded-md bg-red-500 text-xl font-semibold text-white">
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;

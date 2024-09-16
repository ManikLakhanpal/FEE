export default function Home() {
  const boardSize = 8;

  console.log(`It is ${Array.from({ length: boardSize })}`);

  // Array.from({ length : 8 }) will create 8 empty index in array
  // .map(val, index) -> 1st param is value present in the array, index is the index of element.
  
  return (
    <section className="h-screen">
      <h1 className="text-center text-4xl font-semibold">Chess Board</h1>
      <div className="w-full h-full border-2 flex justify-center items-center">
        <div className="border-2 border-red-500 p-10">
          {Array.from({ length: boardSize }).map((_, row) => (
            <div key={row} className="flex border-2 border-black">
              {Array.from({ length: boardSize }).map((_, col) => (
                <div
                  key={col}
                  className={`w-20 h-20 hover:scale-95 ${
                    (row + col) % 2 === 0 ? "bg-white hover:bg-gray-400" : "bg-black"
                  }`}
                ></div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

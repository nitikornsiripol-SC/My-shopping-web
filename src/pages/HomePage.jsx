function HomePage() {
    return (
    <>
        <div className="flex justify-between">
            <h1 className="text-red-400 text-4xl md:text-6xl font-bold border-b-4 border-red-600 pb-3">
            Shopping to you
            </h1>

            <button className="text-4xl md:text-6xl">
                🛒
            </button>
        </div>
            
        <p className="text-black-400">
            All you need are here.
        </p>

        <h1 className="text-black-400 text-3xl md:text-5xl font-bold border-4 border-red-600 pb-2 pt-1 py-50 bg-red-400 mt-15 my-1">
            Categories
        </h1>
        

      <div className="flex flex-row">
        <button
          type="submit"
          className="bg-red-600 hover:bg-[#ccc] text-black font-medium py-1 shadow-sm transition p-16 flex-1 border-black-400"
        >
          Home
        </button>

        <button
          type="submit"
          className="bg-red-600 hover:bg-[#ccc] text-black font-medium py-1 shadow-sm transition p-16 flex-1 border-black-400"
        >
          Food
        </button>

        <button
          type="submit"
          className="bg-red-600 hover:bg-[#ccc] text-black font-medium py-1 shadow-sm transition p-16 flex-1 border-black-400"
        >
          House
        </button>

        <button
          type="submit"
          className="bg-red-600 hover:bg-[#ccc] text-black font-medium py-1 shadow-sm transition p-16 flex-1 border-black-400"
        >
          Medicine
        </button>

        <button
          type="submit"
          className="bg-red-600 hover:bg-[#ccc] text-black font-medium py-1 shadow-sm transition p-16 flex-1 border-black-400"
        >
          Cloth
        </button>


      </div>

      <p className="text-black-400 mt-10">
        About us: This is demo WEB for code learning.
      </p>

    </>
  );
}

export default HomePage;
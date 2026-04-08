import hero from './assets/hero.png';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <div className="flex justify-between items-center px-10 py-5">
        <h1 className="text-2xl font-bold text-green-500">CivicSeed</h1>
        <p className="text-gray-500 font-medium">SITE LANGUAGE: ENGLISH ⌄</p>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-center h-[80vh]">
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={hero}
            alt="character"
            className="w-72 md:w-96 animate-bounce"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 text-center px-5">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-700 leading-snug">
            Learn life skills <br /> the fun way!
          </h1>

          {/* Buttons */}
          <div className="mt-6 flex flex-col items-center gap-3">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-10 rounded-xl shadow-md transition duration-300">
              GET STARTED
            </button>

            <button className="bg-white border-2 border-gray-300 text-gray-600 font-semibold py-3 px-8 rounded-xl hover:bg-gray-100 transition">
              I ALREADY HAVE AN ACCOUNT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

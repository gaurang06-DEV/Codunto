import { useNavigate } from "react-router";

function Main() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-lg text-center border border-gray-200">
        <div>
          <h1 className="text-4xl font-bold text-blue-700 mb-4">
            Bill-Splitter
          </h1>
        </div>

        <div>
          <p className="text-gray-600 mb-10 text-lg">
            Split your bills easily and quickly!
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <button
              onClick={() => navigate("/manually")}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6 rounded-xl shadow-lg text-xl transition-transform transform hover:scale-105"
            >
              Add Manually
            </button>
          </div>

          <div>
            <button
              onClick={() => navigate("/upload")}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6 rounded-xl shadow-lg text-xl transition-transform transform hover:scale-105"
            >
              Upload the Bill
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

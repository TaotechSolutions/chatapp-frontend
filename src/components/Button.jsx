export default function Button({ children }) {
  return (
    <button
      //   disabled={!isFormValid()} ${isFormValid() ? "bg-green-600 hover:bg-green-700": "bg-gray-400 cursor-not-allowed"}
      className={`text-white rounded px-4 py-2 mt-2 transition cursor-pointer `}>
      {children}
    </button>
  );
}

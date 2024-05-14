import Lists from "./Lists";
function Todo() {
  return (
    <div className="bg-slate-300 w-screen h-screen flex justify-center items-center">
      <div className="bg-white border w-2/3 max-h-[66.66%] rounded-xl shadow-md shadow-stone-600 flex flex-col gap-3 p-2 overflow-auto">
        <Lists></Lists>
      </div>
    </div>
  );
}

export default Todo;

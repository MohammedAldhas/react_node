import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function CreateTask() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    info: "",
    importance: false,
  });

  const sendToDB = (e) => {
    e.preventDefault();
    axios
      .post("/lists/create", {
        title: inputs.name,
        info: inputs.info,
        importance: inputs.importance,
      })
      .then(navigate("/"));
  };
  return (
    <>
      <div className=" w-screen h-screen flex justify-center items-center">
        <form className=" border w-2/4 h-fit rounded-xl shadow-md flex flex-col gap-1 p-1 ">
          <div className=" p-2 flex flex-col items-br gap-1 items-center">
            <br />
            <label className="font-bold text-xl">Task Name:</label>
            <input
              className=" shadow outline-none w-full rounded px-1 "
              placeholder="My task is:"
              type="text"
              onChange={(e) => {
                setInputs({
                  ...inputs,
                  name: e.target.value,
                });
              }}
            />
          </div>
          <div className=" p-2 flex flex-col items-center gap-1">
            <label className="font-bold text-xl">Task info:</label>
            <input
              className=" border-gray-950 shadow outline-none w-full rounded px-1"
              placeholder="My task is:"
              type="text"
              onChange={(e) => {
                setInputs({
                  ...inputs,
                  info: e.target.value,
                });
              }}
            />
          </div>
          <div className=" p-2 flex justify-around  items-center gap-1">
            <label className="font-bold text-xl">is it important?</label>

            <input
              type="checkbox"
              checked={inputs.importance}
              onChange={() => {
                setInputs({
                  ...inputs,
                  importance: inputs.importance
                    ? (inputs.importance = false)
                    : (inputs.importance = true),
                });
              }}
            />
          </div>
          <br />
          <div className=" p-2 flex flex-col items-center gap-1">
            <button
              className="font-bold text-[#000000b2] bg-blue-400 w-full rounded-lg p-1"
              onClick={(e) => sendToDB(e)}
            >
              Send
            </button>
            <button
              className="font-bold text-[#000000b2] bg-red-600 w-full rounded-lg p-1"
              onClick={() => navigate("/")}
            >
              cansel
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateTask;

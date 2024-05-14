// /lists/ubdate/
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
function UbdateTask() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    title: "",
    info: "",
    importance: false,
  });

  const idp = useParams();

  useEffect(() => {
    console.log(idp.id);
    axios
      .get(`/lists/${idp.id}`)
      .then(async (res) => {
        console.log(res.data);
        await setInputs({
          importance: res.data.importance,
          title: res.data.title,
          info: res.data.info,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const sendToDB = (e) => {
    e.preventDefault();
    axios
      .put(`/lists/update/${idp.id}`, {
        title: inputs.title,
        info: inputs.info,
        importance: inputs.importance,
      })
      .then(() => {
        navigate("/");
        window.location.reload();
      });
  };
  return (
    <>
      <div className=" w-screen h-screen flex justify-center items-center">
        <form className=" border w-2/4 h-fit rounded-xl shadow-md flex flex-col gap-1 p-1 ">
          <div className=" p-2 flex flex-col items-br gap-1 items-center">
            <br />
            <label className="font-bold text-xl">Task Name:</label>
            <input
              value={inputs.title}
              className=" shadow outline-none w-full rounded px-1 "
              placeholder="My task is:"
              type="text"
              onChange={(e) => {
                setInputs({
                  ...inputs,
                  title: e.target.value,
                });
              }}
            />
          </div>
          <div className=" p-2 flex flex-col items-center gap-1">
            <label className="font-bold text-xl">Task info:</label>
            <input
              value={inputs.info}
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
              ubdateTask
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

export default UbdateTask;

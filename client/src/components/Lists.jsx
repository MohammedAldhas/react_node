import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Lists() {
  const [lists, setLists] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("/lists")
      .then((res) => {
        setLists(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [lists]);

  const goToCreat = () => {
    navigate("/createTask");
  };
  const deleteTask = async (id) => {
    await axios.delete(`/lists/delete/${id}`).then((res) => {
      console.log(res);
      //   window.location.reload();
    });
  };
  const list = lists.map((l) => {
    return (
      <div
        key={l._id}
        className={`shadow rounded-lg p-2  hover:scale-[1.002] text-center flex justify-between w-full h-[70px]  relative  
        `}
      >
        {l.importance && (
          <div className="bg-red-500 shadow w-14 h-4 absolute top-[-1px] left-0 rounded-2xl flex justify-center items-center">
            <p className="text-[9px] p-1 font-bold text-white">important</p>
          </div>
        )}

        <div
          className="flex-[2] flex flex-col justify-between"
          onClick={() => navigate(`/list/${l._id}`)}
        >
          <h1 className=" font-semibold text-lg  h-8 overflow-hidden">
            {l.title}
          </h1>
          <p className="text-xs text-slate-500 text-center cursor-pointer">
            click here to show det..
          </p>
        </div>

        <div className="flex flex-col gap-1 px-2 flex-1">
          <button
            className="w-full bg-cyan-600 rounded-full py-[2px"
            onClick={() => navigate("/ubdateTask/" + l._id)}
          >
            Edit
          </button>
          <button
            key={l._id}
            className="w-full bg-red-600 rounded-full"
            onClick={() => deleteTask(l._id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="flex flex-col justify-between items-center h-full">
        <div className="w-full flex flex-col gap-[5px]">{list}</div>

        <button
          className="bg-emerald-400 text-white w-full p-1 rounded-2xl mt-1"
          onClick={() => goToCreat()}
        >
          create a new +
        </button>
      </div>
    </>
  );
}

export default Lists;

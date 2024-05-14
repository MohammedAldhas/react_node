// /lists/ubdate/
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function List() {
  const [title, settitle] = useState("");
  const [info, setinfo] = useState("");
  const [important, setimportant] = useState(false);

  const idp = useParams();

  useEffect(() => {
    console.log(idp.id);
    axios
      .get(`/lists/${idp.id}`)
      .then(async (res) => {
        settitle(res.data.title);
        setinfo(res.data.info);
        setimportant(res.data.importance);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idp]);
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Link
        to={"/"}
        className="absolute top-1 right-1 bg-green-500 rounded-xl text-sm p w-20 h-7 flex items-center justify-center text-white font-bold"
      >
        go back
      </Link>
      <div className="shadow w-3/6  max-h-2/6 rounded-2xl p-2 overflow-auto">
        <h3
          className={`absolute top-[42%] left-[25%]  font-bold text-lg ${
            important ? "text-red-600" : "text-blue-400"
          }`}
        >
          {important ? "Important" : "Not important"}
        </h3>
        <h1 className="text-center font-sans font-bold text-2xl">{title}</h1>
        <p className="text-xs text-slate-600">{info}</p>
      </div>
    </div>
  );
}

export default List;

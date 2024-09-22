import { useState } from "react";
import MemeImg from "./MemeImg";
import api from "../memesData";
export default function Form() {
  const [url, setUrl] = useState({
    topText: "",
    bottomText: "",
    randomMemeUrl: "",
  });
  function handlEvent() {
    setUrl((prev) => ({
      ...prev,
      randomMemeUrl:
        api.data.memes[Math.floor(Math.random() * api.data.memes.length + 1)]
          .url,
    }));
  }
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-center mt-10 gap-y-10 gap-x-2">
        <div className="flex flex-col basis-2/5 gap-3">
          <label htmlFor="">Top text</label>
          <input
            type="text"
            placeholder="Shut up"
            className="border-2 indent-3 border-input-border rounded-md p-2 w-full  "
          />
        </div>
        <div className="flex flex-col basis-2/5 gap-3">
          <label htmlFor="">Bottom text</label>
          <input
            type="text"
            placeholder="And take my money"
            className="border-2 indent-3 border-input-border rounded-md p-2  w-full "
          />
        </div>
        <input
          type="submit"
          value="Get a new meme image"
          onClick={handlEvent}
          className="w-full bg-gradient-to-r rounded-lg text-white text-xl font-bold cursor-pointer from-Header-from to-Header-to py-5 w-96"
        />
      </div>
      <MemeImg url={url} />
    </div>
  );
}

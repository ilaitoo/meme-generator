import logo from "../assets/Troll Face.png";
export default function Header() {
  return (
    <div className=" flex justify-start h-24 gap-6 items-center p-7 bg-gradient-to-r from-Header-from to-Header-to  ">
      <img src={logo} alt="" className="w-14" />
      <h1 className=" text-3xl text-white ">Meme Generator</h1>
    </div>
  );
}

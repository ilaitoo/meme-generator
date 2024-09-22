export default function MemeImg({ url }) {
  return (
    <div>
      <img
        src={url.randomMemeUrl}
        alt=""
        className="mx-auto mt-10 w-1/2 rounded-sm"
      />
    </div>
  );
}

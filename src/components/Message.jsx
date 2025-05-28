export default function Message({ type }) {
  const user = type === "user" ? "self-end flex-row-reverse" : "";
  return (
    <div className={`flex gap-3 ${user}`}>
      <div className="w-10 h-10 border rounded-full self-end overflow-hidden">
        <img src={user ? "useravater.jpg" : "senderavater.jpg"} alt="" className="w-full h-full" />
      </div>
      <div className="flex flex-col gap-2">
        <p className={`p-2 ${user ? "bg-green-100 " : "bg-slate-100"}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
          dolor!
        </p>
        <div className={`flex gap-3 ${user}`}>
          <span>{user ? "You" : "Sender"}</span>
          <span>11:00pm</span>
        </div>
      </div>
    </div>
  );
}

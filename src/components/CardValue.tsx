type CardValueProps = {
  title: string;
  value: number;
  type: "r" | "d" | "t";
};

function CardValue(props: CardValueProps) {
  const color: string =
    props.type === "r"
      ? "bg-green-400"
      : props.type === "d"
      ? "bg-red-400"
      : "bg-blue-400";

  return (
    <div
      className={`flex flex-col items-start justify-center px-2 py-1 w-full h-full rounded-md shadow-xl ${color}`}
    >
      <div className="text-[#1E1E1E] font-semibold text-xl">{props.title}</div>
      <div className="text-white font-bold text-xl sm:text-4xl drop-shadow-lg">
        R$ {props.value}
      </div>
    </div>
  );
}

export default CardValue;

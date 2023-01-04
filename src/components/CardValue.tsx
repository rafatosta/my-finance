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
      className={`flex flex-col items-center justify-center w-40 h-20 sm:w-40 sm:h-40 hover:scale-[1.1] rounded-xl shadow-xl ${color}`}
    >
      <div className="text-gray-100 font-semibold text-xl">{props.title}</div>
      <div className="text-white font-bold text-xl sm:text-4xl drop-shadow-lg">
        R$ {props.value}
      </div>
    </div>
  );
}

export default CardValue;

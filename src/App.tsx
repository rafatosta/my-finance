import CardValue from "./components/CardValue";
import Table from "./components/Table";
import Transaction from "./@types/Transaction";
import { useForm } from "react-hook-form";

function App() {
  const data: Transaction[] = [
    {
      id: 0,
      description: "carro",
      value: 200,
      type: "receita",
      date: "03/01/2023",
    },
    {
      id: 1,
      description: "salário",
      value: 1200,
      type: "despesa",
      date: "03/01/2023",
    },
    {
      id: 3,
      description: "Alimentação",
      value: 500,
      type: "despesa",
      date: "03/01/2023",
    },
  ];

  const { register, handleSubmit,reset } = useForm();
  function handleRegistration(data: Transaction) {
    console.log(data);

    reset()
  }

  return (
    <div className="flex flex-row w-full h-screen justify-center">
      <div className="flex flex-col m-16 p-8 w-full rounded-xl bg-gray-100  shadow-2xl gap-y-10">
        <div className="flex flex-row w-full justify-between">
          <CardValue title="Despesa" value="200" type="d" />
          <CardValue title="Receita" value="200" type="r" />
          <CardValue title="Total" value="200" type="t" />
        </div>

        <div>
          <form
            className="flex flex-row  bg-white w-full rounded-xl border shadow p-4 justify-center gap-x-4"
            onSubmit={handleSubmit(handleRegistration)}
          >
            <input
              className="px-2 border rounded-sm"
              type="text"
              required
              placeholder="Descrição"
              {...register("description")}
            />
            <input
              className="px-2 border rounded-sm"
              type="number"
              required
              placeholder="Valor"
              {...register("value")}
            />
            <select className="px-2 border rounded-sm" {...register("type")}>
              <option value="r">Receita</option>
              <option value="d">Despesa</option>
            </select>
            <button
              className="px-2 border rounded-lg bg-blue-500 hover:bg-blue-700 active:bg-blue-900 w-20 h-10 text-white font-bold"
              type="submit"
            >
              ok
            </button>
          </form>
        </div>

        <div className="flex justify-center">
          <Table data={data} />
        </div>
      </div>
    </div>
  );
}

export default App;

import CardValue from "./components/CardValue";
import Table from "./components/Table";
import Transaction from "./@types/Transaction";

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
  return (
    <div className="flex flex-row w-full h-screen justify-center">
      <div className="m-16 p-8 w-full rounded-xl bg-gray-100  shadow-2xl">
        <div className="flex flex-row w-full justify-between">
          <CardValue title="Despesa" value="200" type="d" />
          <CardValue title="Receita" value="200" type="r" />
          <CardValue title="Total" value="200" type="t" />
        </div>

        <div className="flex justify-center pt-20">
          <Table data={data} />
        </div>
      </div>
    </div>
  );
}

export default App;

import CardValue from "./components/CardValue";

function App() {
  return (
    <div className="flex flex-row w-full h-screen justify-center">
      <div className="m-16 p-8 w-full  rounded-xl bg-gray-100  shadow-2xl">
        <div className="flex flex-row w-full justify-between">
          <CardValue title="Despesa" value="200" type="d" />
          <CardValue title="Receita" value="200" type="r" />
          <CardValue title="Total" value="200" type="t" />
        </div>
      </div>
    </div>
  );
}

export default App;

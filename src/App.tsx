import CardValue from "./components/CardValue";
import Table from "./components/Table";
import Transaction from "./@types/Transaction";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

import { useTransaction } from "./hooks/useTransaction";

function App() {
  const { data, setData, despesa, receita, total } = useTransaction();
  return (
    <div className="flex flex-col bg-[#1E1E1E] w-full h-screen text-white">
      <div className="fixed flex flex-row justify-between items-center w-full h-16 px-4 bg-[#242424] text-white text-lg text-sans font-black shadow-2xl">
        <div>$ Minhas finanças</div>
        <div>
          Saldo: R$
          <span className={total > 0 ? "text-blue-500" : "text-red-500"}>
            {" "}
            {total}
          </span>
        </div>
        <div>
          <button className="bg-green-700 h-max-4 hover:bg-green-800 active:bg-green-900 p-2 rounded-lg">
            + Nova transação
          </button>
        </div>
      </div>
      
        <div className="m-8 mt-20 bg-[#242424]">despesa e receita</div>
      
    </div>
  );
}

export default App;

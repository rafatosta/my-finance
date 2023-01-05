import { useEffect, useState } from "react";
import Transaction from "../@types/Transaction";

const listApi: Transaction[] = [
  {
    id: 0,
    description: "carro",
    value: 200,
    type: "despesa",
  },
  {
    id: 1,
    description: "salário",
    value: 1200,
    type: "receita",
  },
  {
    id: 3,
    description: "Alimentação",
    value: 500,
    type: "despesa",
  },
  {
    id: 4,
    description: "Escola",
    value: 200,
    type: "despesa",
  },
];

export function useTransaction() {
  const [id, setId] = useState<number>(0);
  const [data, setData] = useState<Transaction[]>([]);
  const [despesa, setDespesa] = useState<number>(0);
  const [receita, setReceita] = useState<number>(0);

  useEffect(() => {
    setData(listApi);
    setId(5)
    setDespesa(900);
    setReceita(1200);
  }, []); //isso faz com que seja executado apenas na inicialização

  const add = (item: Transaction) => {
    item.id = id;
    setId(id + 1);
    if (item.type === "receita") {
      setReceita(receita + item.value);
    } else {
      setDespesa(despesa + item.value);
    }
    setData([item, ...data]);
  };

  const del = (item: Transaction) => {
    data.splice(data.indexOf(item), 1);
    setData([...data]);

    if (item.type === "receita") {
      setReceita(receita - item.value);
    } else {
      setDespesa(despesa - item.value);
    }
  };

  return { data, add, del, despesa, receita };
}

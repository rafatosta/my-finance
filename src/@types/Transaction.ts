type TypeTransaction = "despesa" | "receita";

type Trasaction = {
  id: number;
  description: string;
  value: number;
  type: TypeTransaction;
  date: string;
};

export default Trasaction;

type TypeTransaction = "despesa" | "receita";

type Trasaction = {
  id: number;
  description: string;
  value: number;
  type: TypeTransaction;
};

export default Trasaction;

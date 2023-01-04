import Transaction from "../@types/Transaction";
import tw from "tailwind-styled-components";

type TableProps = {
  data: Transaction[];
};

function Table(props: TableProps) {
  function handleDelete(item: Transaction) {
    console.log(item);
  }

  return (
    <div className="rounded-xl border shadow-xl py-2">
      <table className="table-fixed w-full">
        <thead>
          <tr>
            <CellHeader>#</CellHeader>
            <CellHeader>Descrição</CellHeader>
            <CellHeader>Valor</CellHeader>
            <CellHeader>Tipo</CellHeader>
            <CellHeader>Data</CellHeader>
            <CellHeader>Remover</CellHeader>
          </tr>
        </thead>
        <tbody>
          {props.data.map((item) => {
            return (
              <tr key={item.id} className="hover:scale-[1.01]">
                <Cell>{item.id}</Cell>
                <Cell>{item.description}</Cell>
                <Cell>{item.value}</Cell>
                <Cell>{item.type}</Cell>
                <Cell>{item.date}</Cell>
                <Cell className="hover:text-red-700">
                  <button onClick={() => handleDelete(item)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </Cell>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

const CellHeader = tw.th`
table-cell px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider align-middle
`;

const Cell = tw.td`
table-cell px-5 py-3 border-b border-gray-200 bg-white text-sm w-2/5 align-middle text-center capitalize
`;

export default Table;

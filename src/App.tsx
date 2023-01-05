import CardValue from "./components/CardValue";
import Table from "./components/Table";
import Transaction from "./@types/Transaction";
import { useForm } from "react-hook-form";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { useTransaction } from "./hooks/useTransaction";

function App() {
  const { data, add, del, despesa, receita } = useTransaction();
  const { register, handleSubmit, reset } = useForm<Transaction>();
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
    reset();
  }

  function handleSave(item: Transaction) {
    add(item);
    setIsOpen(false);
    reset();
  }

  return (
    <div className="flex flex-col bg-[#1E1E1E] w-full h-screen text-white">
      <div className="fixed flex flex-row justify-between items-center w-full h-16 px-4 bg-[#242424] text-white text-lg text-sans font-black shadow-2xl">
        <div>$ Minhas finanças</div>
        <div>
          <button
            className="bg-green-700 h-max-4 hover:bg-green-800 active:bg-green-900 p-2 rounded-lg"
            onClick={() => setIsOpen(true)}
          >
            + Novo lançamento
          </button>
        </div>
      </div>
      <div className="mt-20">
        <div className="fixed flex flex-row w-full justify-around gap-x-2 px-4">
          <CardValue title="Saldo" value={receita - despesa} type="t" />
          <CardValue title="Despesa" value={despesa} type="d" />
          <CardValue title="Receita" value={receita} type="r" />
        </div>

        <div className=" p-4 mt-20 bg-[#1E1E1E] overflow-auto">
          <div className=" rounded-lg bg-[#242424]">
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <h3 className="font-semibold text-lg text-white">
                  Lançamentos
                </h3>
              </div>
            </div>

            {data.length == 0 ? (
              <div className="text-center p-4 text-gray-400">Sem lançamentos</div>
            ) : (
              <Table
                data={data}
                onDelete={(item) => {
                  del(item);
                }}
              />
            )}
          </div>
        </div>
      </div>

      <>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-bold leading-6 text-gray-900"
                    >
                      Nova transação
                    </Dialog.Title>
                    <div className="mt-4">
                      <div>
                        <form
                          className="flex flex-col bg-white gap-y-4"
                          onSubmit={handleSubmit(handleSave)}
                        >
                          <input
                            className="p-2 border rounded-sm"
                            type="text"
                            required
                            placeholder="Descrição"
                            {...register("description")}
                          />
                          <input
                            className="p-2 border rounded-sm"
                            type="number"
                            required
                            placeholder="Valor"
                            {...register("value", {
                              valueAsNumber: true,
                            })}
                          />
                          <select
                            className="p-2 border rounded-sm"
                            {...register("type")}
                          >
                            <option value="receita">Receita</option>
                            <option value="despesa">Despesa</option>
                          </select>

                          <div className="flex mt-4 justify-end gap-x-4">
                            <button
                              type="button"
                              className="inline-flex justify-center rounded-md border border-transparent bg-red-100 w-24 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                              onClick={closeModal}
                            >
                              Cancelar
                            </button>
                            <button
                              type="submit"
                              className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 w-24 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            >
                              Salvar
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
    </div>
  );
}

export default App;

'use client';
import { BodyContainer } from "@/components/BodyContainer";
import { CardContainer } from "@/components/CardContainer";
import { FormModal } from "@/components/FormModal";
import { Header } from "@/components/Header";
import { Table } from "@/components/Table";
import { ITransaction, TotalCard } from "@/types/transaction";
import Link from "next/link";
import { useMemo, useState } from "react";

const transactions:ITransaction[] = [
  {
    id: "1",
    title: "Salário",
    price: 5000,
    category: "Trabalho",
    type: "INCOME",
    data: new Date("2024-06-01"),
  },
  {
    id: "2",
    title: "Aluguel",
    price: 1500,
    category: "Moradia",
    type: "OUTCOME",
    data: new Date("2024-06-05"),
  },
  {
    id: "3",
    title: "Supermercado",
    price: 300,
    category: "Alimentação",
    type: "OUTCOME",
    data: new Date("2024-06-10"),
  },
  {
    id: "4",
    title: "Freelance",
    price: 1200,
    category: "Trabalho",
    type: "INCOME",
    data: new Date("2024-06-15"),
  }
];

export default function Home() {
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isFormModalEdit, setIsFormModalEdit] = useState(false);
  const [transactionData, setTransactionData] = useState(transactions);
  const [editedTransaction, setEditedTransaction] = useState<ITransaction | undefined>(undefined);

  const handleAddTransaction = (transaction: ITransaction) => {
    setTransactionData( (prevState)=> [...prevState, transaction]);
  }

  const handleEditTransaction = (transaction: ITransaction) => {
    setTransactionData( (prevState)=> {
      const copy = [...prevState];

      const index = copy.findIndex(t => t.id = transaction.id);
      copy.splice(index, 1, transaction)

      return copy;
    });
  }

  const calculaTotal = useMemo(() => {
    const totals = transactionData.reduce<TotalCard>((acc, transaction) => {
      if (transaction.type === "INCOME") {
        acc.income += transaction.price;
        acc.total += transaction.price;
      } else {
        acc.outcome += transaction.price;
        acc.total -= transaction.price;
      }
      return acc;
    }, { total: 0, income: 0, outcome: 0 })

    return totals;
  }, [transactionData]);
  
  return (
    <div className="h-full min-h-screen">
      <Header handleOpenFormModal={() => setIsFormModalOpen(true)}/>
      <BodyContainer>
          <CardContainer totalValues={calculaTotal} />
          <Table data={transactionData} handleOpenFormModal={(transaction: ITransaction) => {
            setIsFormModalOpen(true);
            setIsFormModalEdit(true);
            setEditedTransaction(transaction);
          }} />
          <div className="flex flex-col text-center">
            <Link
              href="https://www.flaticon.com/free-icons/edit"
              title="edit icons"
              className="text-black"
              target="_blank"
            >
              Edit icons created by Pixel perfect - Flaticon
            </Link>
            <Link
              href="https://www.flaticon.com/free-icons/recycle-bin"
              title="recycle bin icons"
              className="text-black"
              target="_blank"
            >
              Recycle bin icons created by hqrloveq - Flaticon
            </Link>
          </div>
      </BodyContainer>
      {isFormModalOpen && <FormModal 
          closeModal={() => {
            setIsFormModalOpen(false);
            setIsFormModalEdit(false);
          }} 
          title={`${isFormModalEdit ? "Editar" : "Criar" } Transação`}
          addTransaction={handleAddTransaction}
          editTransaction={handleEditTransaction}
          edit={isFormModalEdit}
          transaction={isFormModalEdit ? editedTransaction : undefined} />}
    </div>
  );
}

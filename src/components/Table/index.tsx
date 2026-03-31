import { ITransaction } from "@/types/transaction";
import { formatDate, formatPrice } from "@/utils";
import Image from "next/image";

export type TableProps = {
    data: ITransaction[];
    handleOpenFormModal: (transaction: ITransaction) => void;
}
export const Table = ({ data, handleOpenFormModal }: TableProps) => {
    return <>
        <table className="w-full mt-16 border-separate border-spacing-y-2">
            <thead>
                <tr>
                   <th className="px-4 text-left text-table-header text-base font-medium">Título</th> 
                   <th className="px-4 text-left text-table-header text-base font-medium">Preço</th> 
                   <th className="px-4 text-left text-table-header text-base font-medium">Categoria</th> 
                   <th className="px-4 text-left text-table-header text-base font-medium">Data</th>
                   <th className="px-4 text-left text-table-header text-base font-medium">Editar</th>
                   <th className="px-4 text-left text-table-header text-base font-medium">Excluir</th>
                </tr>
            </thead> 
            <tbody>
               {data.map(transaction => (
                <tr key={transaction.id} className="h-16">
                   <td className="px-4 py-4 whitespace-nowrap text-title bg-white rounded-l-lg">{transaction.title} </td> 
                   <td className={`px-4 py-4 whitespace-nowrap ${transaction.type === "INCOME"? "text-income": "text-outcome"} bg-white text-right`}>{formatPrice(transaction.price)} </td> 
                   <td className="px-4 py-4 whitespace-nowrap text-title bg-white">{transaction.category} </td>
                   <td className="px-4 py-4 whitespace-nowrap text-title bg-white">{formatDate(transaction.data)} </td>
                   <td className="px-4 py-4 whitespace-nowrap text-title bg-white">
                    <button type="button" className="cursor-pointer" onClick={() => handleOpenFormModal(transaction)}>
                        <Image src={'/images/edit.png'} alt={`edit icon`} width={24} height={24} />
                    </button>
                   </td>
                   <td className="px-4 py-4 whitespace-nowrap text-title bg-white rounded-r-lg">
                    <button type="button" className="cursor-pointer">
                        <Image src={'/images/delete.png'} alt={`delete icon`} width={24} height={24} />
                    </button>
                   </td>
                </tr>
               ))} 
            </tbody>
        </table>
    </>
}
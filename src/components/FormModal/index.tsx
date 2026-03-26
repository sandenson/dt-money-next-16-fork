import { ITransaction } from "@/types/transaction";

export type FormModalProps = {
   title: string;
   closeModal: () => void;
   addTransaction: (transaction: ITransaction) => void;
}

export const FormModal = ({ title, closeModal, addTransaction }: FormModalProps) => {
  return (
    <div 
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
    >
       <div className="fixed inset-0 bg-gray-700 opacity-75 transition-opacity "
           aria-hidden="true"
        />

       <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
           <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div className="relative transform overflow-hidden rounder-lg  bg-modal text-left shadow-xl sm:w-full sm:max-w-lg">
                    <button type="button" className="absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600"
                     onClick={closeModal}
                     aria-label="Fechar"
                    >
                        <span className="text-2xl">&times;</span>
                    </button>

                     <div className="bg-modal px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                <h1
                                    className="font-semibold leading-9 text-title text-2xl"
                                    id="modal-title"
                                >
                                    {title}
                                </h1>
                            </div>
                        </div>
                    </div>


                </div>
           </div>
        </div> 
         

    </div>
  )
}
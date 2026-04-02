import Image from "next/image";

export type FormModalProps = {
  title: string;
  text?: string;
  closeModal: () => void;
  confirmation: (confirm: boolean) => void;
};

export const ConfirmModal = ({ title, text, closeModal, confirmation }: FormModalProps) => {
  return (
    <div
      className="relative z-10 min-w-xl"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-gray-700 opacity-75 transition-opacity "
        aria-hidden="true"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-md bg-modal text-left shadow-xl sm:w-full sm:max-w-lg">
            <button
              type="button"
              className="absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600"
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

            <div className="flex pb-4 justify-center">
              <Image src={'/images/warning.png'} alt='warning icon' width={100} height={100} />
            </div>

            <div className="flex pb-4 px-4 justify-center">
              <span className="text-title text-lg">{text || "Esta alteração não poderá ser desfeita"}</span>
            </div>

            <div className="flex justify-between pb-4 px-12 gap-12">
              <button
                type="button"
                onClick={() => {
                  confirmation(true);
                  closeModal();
                }}
                className="bg-red-500 opacity-80 rounded-md px-8 py-3 font-semibold text-center hover:opacity-100 hover:transition-colors w-full"
                aria-label="Deletar"
              >
                Deletar
              </button>
              <button
                type="button"
                onClick={() => {
                  confirmation(false);
                  closeModal();
                }}
                className="bg-gray-600 opacity-100 rounded-md px-8 py-3 font-semibold text-center hover:opacity-90 hover:transition-colors w-full"
                aria-label="Cancelar"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

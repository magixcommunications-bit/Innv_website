import { ModalState, modalInitialState } from 'store/store'

type ModalProps = {
  setModal: React.Dispatch<React.SetStateAction<ModalState>>
  modal: ModalState
}

const ConfirmModal: React.FC<ModalProps> = ({ modal, setModal }) => {
  return (
    <>
      {modal.isOpen && (
        <div className="fixed top-0 left-0 z-50 flex bg-black bg-opacity-50 backdrop-blur-md justify-center items-center w-full h-full max-h-full overflow-y-auto overflow-x-hidden">
          <div className="relative px-4 w-full max-w-md h-fit">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 py-4">
              <button
                type="button"
                aria-label="close modal"
                className="absolute top-3 right-2.5 bg-black hover:bg-opacity-10 bg-opacity-0 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
                onClick={() => setModal(modalInitialState)}
              >
                <svg className="w-3 h-3" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
              <div className="p-4 md:p-5 text-center">
                <svg
                  className="mx-auto w-12 h-12"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10 11V6m0 8h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
                <h3 className="mb-10 mt-8 text-lg font-normal">
                  {modal.message}
                </h3>
                <div className="flex gap-6 justify-center ">
                  <button
                    aria-label="Confirm"
                    className="text-white transition-colors outline-orange outline-offset-2 bg-red-600 hover:bg-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                    onClick={() => {
                      setModal({ ...modalInitialState, isConfirmed: true })
                    }}
                  >
                    Confirm
                  </button>
                  <button
                    aria-label="Cancel"
                    className="py-2.5 px-5 transition-colors outline-orange outline-offset-4 text-sm font-medium text-black bg-white rounded-lg border border-gray-200 hover:text-white hover:bg-orange hover:border-orange"
                    onClick={() => setModal(modalInitialState)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ConfirmModal

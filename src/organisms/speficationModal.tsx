import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, ReactNode } from 'react'

export default function SpecificationModal({
  isActive,
  handleModalClose,
  children,
  isJD,
}: {
  handleModalClose: () => void
  isActive: boolean
  title: string
  isJD?: boolean
  children: ReactNode
}) {
  return (
    <Transition appear show={isActive} as={Fragment}>
      <Dialog as="div" className="relative z-[300]" onClose={handleModalClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-40" />
        </Transition.Child>

        <div className="fixed inset-0">
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
              <div className="rounded-2xl overflow-hidden">
                <Dialog.Panel className="w-full overflow-y-auto h-[80vh] max-w-6xl transform overflow-hidden rounded-2xl bg-white px-2 md:px-10 text-left align-middle shadow-xl transition-all">
                  <div className="flex items-center justify-between gap-4 flex-wrap pr-3 py-4   bg-white  sticky top-0 border-b-1 border-gray border-solid">
                    <h3 className="font-medium text-orange">
                      {isJD ? 'Job description' : 'Specifications'}
                    </h3>
                    <button
                      onClick={handleModalClose}
                      type="button"
                      className="rounded-full bg-gray outine-none focus-visible:outline-none hover:bg-lightgray focus-visible:outline-orange stroke-blue p-3"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="inherit"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div className="py-10 ">{children}</div>
                </Dialog.Panel>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

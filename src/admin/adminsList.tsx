import React, { useEffect, useState } from 'react'
import AuthWrapperHOC from 'layouts/authWrapperHOC'
import { FilledBtn } from 'atoms/buttons'
import { emailSchema, passwordSchema, textSchema } from 'utils/zod'
import { z } from 'zod'
import axios from 'utils/axios'

import { modalInitialState, useAdmin } from 'store/store'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import EmailInput from 'molecules/inputs/emailInput'
import PasswordInput from 'molecules/inputs/passwordInput'
import TextInput from 'molecules/inputs/textInput'
import ConfirmModal from 'layouts/confirmModal'
import { useNavigate } from 'react-router-dom'

const AdminsList = () => {
  const [showAdminModal, setShowAdminModal] = useState(false)
  // const [adminsList, setAdminsList] = useState<any[]>([])
  const [updateAdminId, setUpdateAdminId] = useState('')
  const [deleteAdminId, setDeleteAdminId] = useState('')
  const navigate = useNavigate()
  const [modal, setModal] = useState(modalInitialState)

  const { setIsLoading, showToast, state, adminsList, setAdminsList } =
    useAdmin()

  // To get list of all admins
  useEffect(() => {
    if (!state.isAuthenticated || adminsList.length > 0) return

    // console.log(adminsList.length)
    const getAdmins = async () => {
      setIsLoading(true)
      try {
        const admins = await axios.get('/all-admins')
        if (!admins?.data) {
          throw new Error('Something went wrong')
        }
        setAdminsList(admins.data)
      } catch (error: any) {
        setIsLoading(false)
        showToast({
          status: 'error',
          message: error?.response?.data?.message || 'Something went wrong',
        })
      } finally {
        setIsLoading(false)
      }
    }

    getAdmins()
  }, [state.isAuthenticated, adminsList])

  // To handle delete admin
  useEffect(() => {
    if (!modal.isConfirmed && !deleteAdminId) return

    const deleteAdminHandler = async () => {
      // console.log(deleteAdminId)
      setIsLoading(true)
      try {
        await axios.get('/delete-admin/' + deleteAdminId)

        const admins = await axios.get('/all-admins')
        if (!admins?.data) {
          throw new Error('Something went wrong')
        }
        setAdminsList(admins.data)
        showToast({
          status: 'success',
          message: 'Admin deleted successfully',
        })
      } catch (error: any) {
        setIsLoading(false)
        showToast({
          status: 'error',
          message: error?.response?.data?.message || 'Something went wrong',
        })
      } finally {
        setIsLoading(false)
      }
    }

    if (modal.isConfirmed && deleteAdminId) {
      deleteAdminHandler()
      setDeleteAdminId('')
    }
  }, [modal.isConfirmed, deleteAdminId])

  const disableHandler = (currEmail: string) => {
    if (state?.admin?.isSuperAdmin) return false

    if (currEmail !== state?.admin?.email && !state?.admin?.isSuperAdmin)
      return true
    else return false
  }

  return (
    <AuthWrapperHOC>
      <ConfirmModal modal={modal} setModal={setModal} />

      <div className="flex justify-between items-center">
        <h4 className="font-regular leading-tight pt-3 ">Admins</h4>
      </div>
      <hr className="mt-8 blade-bottom-margin-sm opacity-25" />

      <div className="overflow-x-auto overflow-y-hidden ">
        {adminsList.length !== 0 ? (
          <div className="relativ shadow-md sm:rounded-lg text-sm lg:text-lg min-w-[855px]">
            <table className="w-full text-left table-auto ">
              <thead className="uppercase bg-slate-50 ">
                <tr>
                  <th scope="col" className="px-6 py-5">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-5">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-5">
                    Role
                  </th>
                  <th scope="col" className="px-6 py-5">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {adminsList
                  // .sort((a: any, b: any) => a.name.localeCompare(b.name))
                  .map((admin: any, key: number) => {
                    return (
                      <tr
                        key={key}
                        className="bg-white border-t border-opacity-25 border-black hover:bg-slate-50 "
                      >
                        <td
                          scope="row"
                          className="px-6 w-fit py-4 font-medium whitespace-nowrap flex items-center gap-3"
                        >
                          {admin.name}{' '}
                          {admin.email === state?.admin?.email && (
                            <div
                              className="h-2 w-2 rounded-full bg-green-500"
                              title="You"
                            ></div>
                          )}
                        </td>
                        <td className="px-6 py-4 w-fit">{admin.email}</td>
                        <td className="px-6 py-4 w-fit">
                          {!admin.isSuperAdmin ? 'Admin' : 'Super admin'}
                        </td>
                        <td className="flex items-center px-6 py-4 space-x-4 w-fit">
                          <FilledBtn
                            onClick={() => {
                              setUpdateAdminId(admin._id)
                            }}
                            isDisabled={disableHandler(admin.email)}
                            buttonType="edit"
                            color="orange"
                            size="base"
                            text="Edit"
                            type="button"
                            extraClasses="!bg-opacity-80 !bg-blue hover:!bg-opacity-100"
                          />
                          <FilledBtn
                            onClick={() => {
                              if (!state?.admin?.isSuperAdmin) {
                                showToast({
                                  status: 'error',
                                  message:
                                    'Authorization denied! Please login as Super Admin to add/edit admins',
                                })
                                return
                              }
                              setDeleteAdminId(admin._id)
                              setModal({
                                isConfirmed: false,
                                isOpen: true,
                                message:
                                  'Are you sure you want to delete this admin?',
                              })
                            }}
                            isDisabled={
                              !state?.admin?.isSuperAdmin || admin.isSuperAdmin
                            }
                            buttonType="delete"
                            color="orange"
                            size="base"
                            text="Delete"
                            type="button"
                            extraClasses="!bg-opacity-80 !bg-red-600 hover:!bg-opacity-100"
                          />
                        </td>
                      </tr>
                    )
                  })}
              </tbody>
            </table>
          </div>
        ) : (
          <h6>Oops... Unable to fetch the list</h6>
        )}
      </div>

      <div className="flex justify-end mt-16 gap-4">
        <FilledBtn
          buttonType="add"
          color="orange"
          size="large"
          text="Add new admin"
          type="button"
          extraClasses="!bg-opacity-90 !bg-lightorange hover:!bg-opacity-100 !text-black !font-regular"
          onClick={() => {
            if (!state?.admin?.isSuperAdmin) {
              showToast({
                status: 'error',
                message:
                  'Authorization denied! Please login as Super Admin to add/edit admins',
              })
              return
            }
            setShowAdminModal(true)
          }}
        />
        <FilledBtn
          buttonType="edit"
          color="orange"
          size="large"
          text="Reset your password "
          type="button"
          extraClasses="!bg-opacity-90 !bg-lightorange hover:!bg-opacity-100 !text-black !font-regular"
          onClick={() => {
            navigate('/admin/reset-password')
          }}
        />
      </div>

      {showAdminModal && (
        <AddNewAdmin
          setShowModal={setShowAdminModal}
          setAdminsList={setAdminsList}
        />
      )}
      {updateAdminId && (
        <UpdateAdmin
          setUpdateAdminId={setUpdateAdminId}
          _id={updateAdminId}
          setAdminsList={setAdminsList}
          adminsList={adminsList}
        />
      )}
    </AuthWrapperHOC>
  )
}

export default AdminsList

//! Code for Adding new admin
const addAdminSchema = z.object({
  name: textSchema,
  email: emailSchema,
  password: passwordSchema,
})

type AddAdmin = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  setAdminsList: React.Dispatch<React.SetStateAction<any>>
}

type AddAdminFormValues = z.infer<typeof addAdminSchema>

const AddNewAdmin: React.FC<AddAdmin> = ({ setShowModal, setAdminsList }) => {
  const { setIsLoading, showToast } = useAdmin()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddAdminFormValues>({
    resolver: zodResolver(addAdminSchema),
  })

  const getAdminHandler: SubmitHandler<AddAdminFormValues> = async (data) => {
    // console.log(data)
    try {
      setIsLoading(true)
      await axios.post('/signup', data)
      const admins = await axios.get('/all-admins')
      if (!admins?.data) {
        throw new Error('Something went wrong')
      }
      setAdminsList(admins.data)

      showToast({
        status: 'success',
        message: 'New admin added successfully',
      })
      setShowModal(false)
    } catch (error: any) {
      setIsLoading(false)
      showToast({
        status: 'error',
        message: error?.response?.data?.message || 'Something went wrong',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <div className="fixed top-0 left-0 z-50 flex bg-black bg-opacity-50 backdrop-blur-md justify-center items-center w-full h-full max-h-full overflow-y-auto overflow-x-hidden">
        <div className="relative w-full max-w-fit h-auto">
          <div className="relative rounded-lg shadow pt-4 bg-white">
            <button
              type="button"
              aria-label="close modal"
              className="absolute top-3 right-2.5 bg-black hover:bg-opacity-10 bg-opacity-0 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
              onClick={() => setShowModal(false)}
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
            <form
              method="post"
              onSubmit={handleSubmit(getAdminHandler)}
              className="form flex flex-col gap-4 "
            >
              <TextInput
                label="Name"
                errors={errors.name}
                placeholder="Enter new admin's name"
                register={register}
                registerer="name"
              />
              <EmailInput
                label="Email"
                errors={errors}
                placeholder="Enter new admin's email"
                register={register}
              />
              <PasswordInput
                label="Password"
                registerer="password"
                errors={errors.password}
                placeholder="Enter new admin's password"
                register={register}
              />

              <button
                type="submit"
                className="bg-black button-submit font-medium mt-6 mb-2"
              >
                Add admin
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

//! Code for Updating admin
const updateAdminSchema = z.object({
  newName: textSchema,
  email: emailSchema,
})

type UpdateAdminName = {
  setUpdateAdminId: React.Dispatch<React.SetStateAction<any>>
  setAdminsList: React.Dispatch<React.SetStateAction<any>>
  adminsList: any[]
  _id: string
}

type UpdateAdminFormValues = z.infer<typeof updateAdminSchema>

const UpdateAdmin: React.FC<UpdateAdminName> = ({
  setUpdateAdminId,
  setAdminsList,
  adminsList,
  _id,
}) => {
  const { setIsLoading, showToast } = useAdmin()

  const adminToBeUpdated = adminsList.filter((e) => e._id === _id)
  const defaultValues = {
    newName: adminToBeUpdated[0]?.name || '',
    email: adminToBeUpdated[0]?.email || '',
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateAdminFormValues>({
    resolver: zodResolver(updateAdminSchema),
    defaultValues: defaultValues,
  })

  const updateAdminHandler: SubmitHandler<UpdateAdminFormValues> = async (
    data,
  ) => {
    // console.log(data)
    // console.log(_id)
    try {
      setIsLoading(true)
      await axios.post('/edit-admin/' + _id, data)
      const admins = await axios.get('/all-admins')
      if (!admins?.data) {
        throw new Error('Something went wrong')
      }
      setAdminsList(admins?.data)
      setUpdateAdminId('')
      showToast({
        status: 'success',
        message: "Admin's name updated successfully",
      })
    } catch (error: any) {
      setIsLoading(false)
      showToast({
        status: 'error',
        message: error?.response?.data?.message || 'Something went wrong',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <div className="fixed top-0 left-0 z-50 flex bg-black bg-opacity-50 backdrop-blur-md justify-center items-center w-full h-full max-h-full overflow-y-auto overflow-x-hidden">
        <div className="relative w-full max-w-fit h-auto">
          <div className="relative rounded-lg shadow pt-4 bg-white">
            <button
              type="button"
              aria-label="close modal"
              className="absolute top-3 right-2.5 bg-black hover:bg-opacity-10 bg-opacity-0 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
              onClick={() => {
                setUpdateAdminId('')
              }}
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
            <form
              method="post"
              onSubmit={handleSubmit(updateAdminHandler)}
              className="form flex flex-col gap-4 "
            >
              <TextInput
                label="Edit name"
                errors={errors.newName}
                placeholder="Enter new name"
                register={register}
                registerer="newName"
              />
              <EmailInput
                label="Edit email"
                errors={errors}
                placeholder="Enter new Email"
                register={register}
              />

              <button
                type="submit"
                className="bg-black button-submit font-medium mt-6 mb-2"
              >
                Update name
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

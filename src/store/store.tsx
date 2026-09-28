import React, {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  useState,
  // useState,
} from 'react'
import { AboutDataType, initAboutData } from 'utils/aboutTypes'
import { AgileDataType, initAgileData } from 'utils/agileTypes'
import { AwardsDataType, initAwardData } from 'utils/awardTypes'
import { CareersDataType, initCareersData } from 'utils/careerTypes'
import { CathLabsDataType, initCathLabsData } from 'utils/cathLabsTypes'
import { ContactDataType, initContactData } from 'utils/contactTypes'
import { EliteDataType, initEliteData } from 'utils/eliteTypes'
import { HomeDataType, initHomeData } from 'utils/homeTypes'
import { NewsDataType, initNewsData } from 'utils/newsTypes'
import { SelectDataType, initSelectData } from 'utils/selectTypes'

export type ToastData = {
  status: 'success' | 'error' | 'none'
  message: string
}

interface AdminState {
  admin: any //Todo: Consider using a more specific type for your admin object
  isAuthenticated: boolean
  errors: ToastData
  isLoading: boolean
  isAuthChecked: boolean
}

export interface ModalState {
  isOpen: boolean
  message: string
  isConfirmed: boolean
}

type AdminAction =
  | { type: 'ADD_ADMIN'; payload: any } //Todo: Replace any with a more specific type for your payload if possible
  | { type: 'REMOVE_ADMIN' }
  | { type: 'IS_ERRORS'; payload: ToastData }
  | { type: 'IS_LOADING'; payload: boolean }
  | { type: 'IS_AUTH_CHECKED'; payload: boolean }

interface AdminContextType {
  state: AdminState
  addAdmin: (admin: any) => void
  removeAdmin: () => void
  showToast: (error: ToastData) => void
  setIsLoading: (bool: boolean) => void
  setIsAuthChecked: (bool: boolean) => void
  adminsList: any[]
  setAdminsList: React.Dispatch<React.SetStateAction<any[]>>
  homeData: HomeDataType
  setHomeData: React.Dispatch<React.SetStateAction<HomeDataType>>
  awardsData: AwardsDataType
  setAwardsData: React.Dispatch<React.SetStateAction<AwardsDataType>>
  newsData: NewsDataType
  setNewsData: React.Dispatch<React.SetStateAction<NewsDataType>>
  aboutData: AboutDataType
  setAboutData: React.Dispatch<React.SetStateAction<AboutDataType>>
  contactData: ContactDataType
  setContactData: React.Dispatch<React.SetStateAction<ContactDataType>>
  eliteData: EliteDataType
  setEliteData: React.Dispatch<React.SetStateAction<EliteDataType>>
  selectData: SelectDataType
  setSelectData: React.Dispatch<React.SetStateAction<SelectDataType>>
  careersData: CareersDataType
  setCareersData: React.Dispatch<React.SetStateAction<CareersDataType>>
  cathLabsData: CathLabsDataType
  setCathLabsData: React.Dispatch<React.SetStateAction<CathLabsDataType>>
  agileData: AgileDataType
  setAgileData: React.Dispatch<React.SetStateAction<AgileDataType>>
}

// Initial state of context
const adminInitialState: AdminState = {
  admin: null,
  isAuthenticated: false,
  errors: {
    status: 'none',
    message: '',
  },
  isLoading: false,
  isAuthChecked: false,
}

export const modalInitialState: ModalState = {
  isConfirmed: false,
  isOpen: false,
  message: '',
}

const AdminContext = createContext<AdminContextType | undefined>(undefined)

// Reducer to handle all function calls
function adminReducer(state: AdminState, action: AdminAction): AdminState {
  switch (action.type) {
    case 'ADD_ADMIN':
      return { ...state, admin: action.payload, isAuthenticated: true }
    case 'REMOVE_ADMIN':
      return { ...state, admin: null, isAuthenticated: false }
    case 'IS_ERRORS':
      return { ...state, errors: action.payload }
    case 'IS_LOADING':
      return { ...state, isLoading: action.payload }
    case 'IS_AUTH_CHECKED':
      return { ...state, isAuthChecked: action.payload }
    default:
      return state
  }
}

// Provider component
export const AdminProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(adminReducer, adminInitialState)
  const [adminsList, setAdminsList] = useState<any[]>([])
  const [homeData, setHomeData] = useState<HomeDataType>(initHomeData)
  const [awardsData, setAwardsData] = useState<AwardsDataType>(initAwardData)
  const [newsData, setNewsData] = useState<NewsDataType>(initNewsData)
  const [aboutData, setAboutData] = useState<AboutDataType>(initAboutData)
  const [contactData, setContactData] =
    useState<ContactDataType>(initContactData)
  const [eliteData, setEliteData] = useState<EliteDataType>(initEliteData)
  const [selectData, setSelectData] = useState<SelectDataType>(initSelectData)
  const [careersData, setCareersData] =
    useState<CareersDataType>(initCareersData)
  const [cathLabsData, setCathLabsData] =
    useState<CathLabsDataType>(initCathLabsData)
  const [agileData, setAgileData] = useState<AgileDataType>(initAgileData)

  const addAdmin = (admin: any) =>
    dispatch({ type: 'ADD_ADMIN', payload: admin })
  const removeAdmin = () => dispatch({ type: 'REMOVE_ADMIN' })
  const showToast = (error: ToastData) =>
    dispatch({ type: 'IS_ERRORS', payload: error })
  const setIsLoading = (bool: boolean) =>
    dispatch({ type: 'IS_LOADING', payload: bool })
  const setIsAuthChecked = (bool: boolean) =>
    dispatch({ type: 'IS_AUTH_CHECKED', payload: bool })

  const value = {
    state,
    addAdmin,
    removeAdmin,
    showToast,
    setIsLoading,
    setIsAuthChecked,
    adminsList,
    setAdminsList,
    homeData,
    setHomeData,
    awardsData,
    setAwardsData,
    newsData,
    setNewsData,
    aboutData,
    setAboutData,
    contactData,
    setContactData,
    eliteData,
    setEliteData,
    selectData,
    setSelectData,
    careersData,
    setCareersData,
    cathLabsData,
    setCathLabsData,
    agileData,
    setAgileData,
  }

  return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
}

// Custom hook to use the admin context
export const useAdmin = (): AdminContextType => {
  const context = useContext(AdminContext)
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider')
  }
  return context
}

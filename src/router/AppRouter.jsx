import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { ApprenticePage } from '../heroes/pages/ApprenticePage'
import { MasterPage } from '../heroes/pages/MasterPage'

export const AppRouter = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={ <Navigate to="/apprentice" /> } /> 
        <Route path='apprentice' element={ <ApprenticePage /> } />
        <Route path='master' element={ <MasterPage /> } /> 
        <Route path='login' element={ <LoginPage /> } /> 
    </Routes>
    </>
  )
}

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Login from './pages/home'
import Pay from './pages/unlock'



export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Navigate to={"/maariya"} />} />
            <Route path='/maariya' element={<Login/>}/>
            <Route path='/maariya/pay' element={<Pay/>}/>
            
        </Routes>
    </BrowserRouter>
  )
}
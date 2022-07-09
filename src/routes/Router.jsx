import { Route, Routes, BrowserRouter } from 'react-router-dom'
import React from 'react'
import HomePage from '../pages/HomePage/HomePage'
import UserPage from '../pages/UserPage/UserPage'


const Router = () => {
    
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path='/users/:id/todos' element={<UserPage />}/>
                <Route path='*' element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
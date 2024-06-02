import { useState, useEffect } from 'react'
import {useDispatch} from "react-redux"
import authService from "./appwrite/auth"
import { login, logout } from './store/authSlice';
import { Header, Footer } from "./components"
import { Outlet } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({userData}));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => {
        setLoading(false);
      })
  }, [])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-900 text-blue-300'>
      <div className='w-full block'>
        <Header />
          <Outlet />
        <Footer /> 
      </div>
    </div>
  ) : null
}

export default App


// Tutorial would be start after 04hr: 53min soon
import React, { useState, useEffect } from 'react';
import authSvg from '../assests/update.svg';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { updateUser, isAuth, getCookie, signout } from '../helpers/auth';
import {Link} from 'react-router-dom'



const Private = ({ history }) => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
  
  });
  const loadProfile = () => {
    const token = getCookie('token');
    axios
      .get(`http://localhost:5000/api/user/${isAuth()._id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        const { fname,lname, email } = res.data;
        console.log(fname)
        setFormData({ ...formData, fname,lname, email });
      })
      .catch(err => {
        toast.error(`Error To Your Information ${err.response.statusText}`);
        if (err.response.status === 401) {
          signout(() => {
            history.push('/login');
          });
        }
      });
  };
  useEffect(() => {
   loadProfile();
  }, [])
 const {fname,lname,email}= formData;

  return (
    <div className='min-h-screen bg-gray-100 text-gray-900 flex justify-center'>
      <div className='max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1'>
        <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12'>
          <div className='mt-12 flex flex-col items-center'>
            <h1 className='text-2xl xl:text-3xl font-extrabold'>
              Warm Welcome !!!
            </h1>
            <h1>
               {fname} {lname}

            </h1>
              <div className='my-12 border-b text-center'>
                <div className='leading-none px-4 inline-block text-sm text-gray-600 tracking-wide font-medium bg-indigo transform translate-y-1/2'>
                  Go To MusicHome
                </div>
              </div>
              <div className='flex flex-col items-center'>

                <Link
                  className='w-full max-w-xs font-bold shadow-sm rounded-lg py-3
           bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5'
                  to='/inner'
                  target='_self'
                >
                  <i className='fas fa-sign-in-alt fa 1x w-8  ml-2 text-indigo-500' />
                  <span className='m-3'>Home</span>
                </Link>
              </div>
          </div>
        </div>
        <div className='flex-1 bg-red-100 text-center hidden lg:flex'>
          <div
            className='m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat'
            style={{ backgroundImage: `url(${authSvg})` }}
          ></div>
        </div>
      </div>
      ;
    </div>
  );
};

export default Private;
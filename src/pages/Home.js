import React from 'react'
import Chats from '../assets/chat.png'
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className='  flex flex-col lg:mt-20  mt-32  items-center '>
            <img src={Chats} alt='Chats messages' className=' lg:h-1/5  lg:w-1/5 h-2/4 w-2/4' />
            <h1 className=' font-bold text-2xl mt-5'>Welcome To Awesome Chats</h1>
            <button type='button' className=' bg-blue-400 py-2 px-3 mt-8 text-base font-bold text-white rounded-md '>
                <Link to='/chats'>
                    Get Started
                </Link>
            </button>
        </div>
    )
}

export default Home
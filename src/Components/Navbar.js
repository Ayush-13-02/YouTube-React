import React from 'react'
import youImg from './Img/youtubeimg.png'
import search from './Img/search.png'
import mic from './Img/microphone.png'
import bell from './Img/bell.png'
import pic from './Img/newbuild.jpg'
import addvedio from './Img/add-video.png'
import moreapp from './Img/more.png'
import Hambur from './Img/menu.png'
import user from './Img/user.png'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import Example from './drop'
function Navbar({ open, signin, handleopen, handlelogin }) {
    return (
        <div className='h-16 m-0 p-0 w-full overflow-x-scroll scrollnav'>
            <div className='h-16 min-w-[768px] flex justify-between flex-row bg-black bg-opacity-90'>
                <div className='flex justify-start ml-6 items-center'>
                    <button className='mr-2 h-10 w-10 p-2 rounded-lg flex justify-center items-center hover:border' onClick={handleopen} >
                        <img src={Hambur} alt="..." className='h-6 w-6' />
                    </button>
                    <button className='flex items-center mx-1'>
                        <img src={youImg} alt="..." className='h-6' />
                        <div className='md:text-xl lg:text-2xl text-gray-500 font-bold flex'>YouTube <sup className='md:text-sm lg:text-base'>IN</sup> </div>
                    </button>
                </div>
                <div className='flex justify-center items-center sm:w-[40vw]'>
                    <div className='h-10 flex'>
                        <input type="text" name="search" id="search" placeholder="Search" className=" text-xl px-2 py-2 border border-gray-500 text-white  bg-black bg-opacity-90 w-full" />
                    </div>
                    <button className='justify-center border border-gray-500 h-10'><img src={search} alt="" className='p-1 h-10' /></button>
                    <button className='justify-center flex'><img src={mic} alt="" className='h-8' /></button>
                </div>
                <div className='flex justify-end mr-4 items-center'>
                    <button className='justify-center mx-2' style={signin ? null : { display: "none" }}><img src={addvedio} alt="" className='h-10 w-10' /></button>
                    <Tippy content={<span className='p-2 text-white text-base'>YouTube Apps</span>}>
                        <button className='justify-center'><img src={moreapp} alt="" className='h-6 w-6' /></button>
                    </Tippy>

                    {<Example signin={signin} />}

                    <button className='mx-2' style={signin ? null : { display: "none" }}><img src={bell} alt="" className='h-6 w-6' /></button>

                    {signin ? <button className='mx-2 h-8 w-8 rounded-full overflow-hidden'><img src={pic} alt="" className='h-8 w-8'/></button> :
                        <button className='mx-2 justify-center border border-blue-600 h-10 flex items-center p-2'
                            onClick={handlelogin}><img src={user} alt="" className='h-6' /><span className='text-xl text-blue-600'>Sign in</span></button>}
                </div>

            </div>
        </div>
    )
}

export default Navbar
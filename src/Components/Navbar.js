import React from 'react'
import youImg from './Img/youtubeimg.png'
import search from './Img/search.png'
import mic from './Img/microphone.png'
import bell from './Img/bell.png'
import pic from './Img/newbuild.jpg'
import addvedio from './Img/add-video.png'
import moreapp from './Img/more.png'
// import threedot from './Img/3dot.png'
import user from './Img/user.png'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
// import { Menu, Transition } from '@headlessui/react'
// import SettingList from './SettingList'
import Example from './drop'
// import { useIonAlert } from '@ionic/react';
// import HamburItem from './HamburItem'
function Navbar({ open, signin, handlelogin }) {
    // const [login, setLogin] = useState(false);
    // const [showAlert, hideAlert] = useIonAlert();
    return (
        <>
            <div className='flex h-16 mb-2'>
                <button className='flex mt-2 mr-8' style={open ? { display: "none" } : null}>
                    <img src={youImg} alt="..." className='m-2 h-8 mt-2 mr-0' />
                    <div className='text-3xl text-gray-500 mr-6 m-1 ml-1 font-bold flex'>YouTube <sup className='text-base mb-5'>IN</sup> </div>
                </button>
                <div className='h-12 my-3 mx-20 flex mr-0' style={open ? { width: "42rem", marginLeft: "8.05rem" } : { width: "42rem" }}>
                    <input type="text" name="search" id="search" placeholder="Search" className=" text-2xl px-2 py-2 border border-gray-500 text-white bg-slate-800 w-full" />
                </div>
                <button className='justify-center border border-gray-500 h-12 my-3 mr-1'><img src={search} alt="" className='p-1 h-12 ml-1' /></button>
                <button className='justify-center mx-2 mt-3' style={signin ? null : { marginRight: "17rem" }}><img src={mic} alt="" className='h-10' /></button>
                <button className='justify-center mx-2  mt-3 ml-56' style={signin ? null : { display: "none" }}><img src={addvedio} alt="" className='h-10' /></button>
                <Tippy content={<span className='p-2 text-white text-lg'>YouTube Apps</span>}>
                    <button className='justify-center mt-3 mx-2'><img src={moreapp} alt="" className='h-8' /></button>
                </Tippy>

                {<Example signin = {signin}/>}

                <button className='justify-center mt-3 mx-4' style={signin ? null : { display: "none" }}><img src={bell} alt="" className='h-8' /></button>

                {signin ? <button className='mx-2 bg-white my-3 h-12 w-12 rounded-full overflow-hidden'><img src={pic} alt="" /></button> :
                    <button className='justify-center mx-2 border my-3 h-12 w-40 flex align-center p-2'
                        onClick={handlelogin}><img src={user} alt="" className='h-8 mr-4' /><span className='text-2xl text-white'>Sign in</span></button>}

            </div>
            <hr />
        </>
    )
}

export default Navbar
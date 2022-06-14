import React from 'react'
import Home from './Img/home.png'
import shorts from './Img/shorts.png'
import library from './Img/library.png'
import subscription from './Img/Sub.png'
import explore from './Img/explore.png'
import youImg from './Img/youtubeimg.png'
import music from './Img/music.jpg'
import sport from './Img/sports.jpg'
import f_b from './Img/fashion.jpg'
import news from './Img/news.jpg'
import spotlight from './Img/spotlight.jpg'
import learn from './Img/learn.jpg'
import vedio from './Img/360.jpg'
import live from './Img/live.jpg'
import gaming from './Img/gaming.jpg'
import movie from './Img/movie.jpg'
import plus from './Img/add.png'
import Live from './Img/radio.png'
import setting from './Img/settings.png'
import help from './Img/question.png'
import rphist from './Img/flag.png'
import feedback from './Img/feedback.png'
import premium from './Img/youtube.png'
import history from './Img/history.png'
import Hambur from './Img/menu.png'
function HamburItem({ open, handleopen }) {

    return (
        <div className='flex flex-col'>
            <div className='flex'>
                <button className='mx-10 my-2 mt-6 rounded-lg flex justify-center hover:border' open={open} onClick={handleopen} style={open ? {
                    width: "4rem",
                    margin: "1rem 0rem 0rem 1rem"
                } : { width: "3.3rem" }}>
                    <img src={Hambur} alt="..." className='m-2 h-8 mt-2' />
                </button>
                <button className='flex mt-4 mr-8' style={open ? null : { display: "none" }}>
                    <img src={youImg} alt="..." className='m-2 h-8 mt-2 mr-0' />
                    <div className='text-3xl text-gray-500 mr-6 m-1 ml-1 font-bold flex'>YouTube <sup className='text-base mb-5'>IN</sup> </div>
                </button>
                {/* <HamburItem/> */}
            </div>
            <div className='my-4 flex flex-col mx-4 overflow-y-auto scrollbar ' style={open ? { width: "18rem", height: "44rem" } : { width: "6rem" }}>
                <button className=' mt-3 mx-1 rounded hover:bg-slate-500'>
                    <div className='items-center flex my-1 p-2' style={open ? { flexDirection: "row" } : { flexDirection: "column" }}>
                        <img src={Home} alt="" className='h-8 w-8' />
                        <h6 className='my-2 text-cyan-200' style={open ? { margin: "0rem 1rem", fontSize: "1.3rem" } : null}>Home</h6>
                    </div>
                </button>
                <button className=' mt-2 mx-1 rounded hover:bg-slate-500'>
                    <div className='items-center flex my-1 p-2' style={open ? { flexDirection: "row" } : { flexDirection: "column" }}>
                        <img src={explore} alt="" className='h-8 w-8' />
                        <h6 className='my-2 text-cyan-200' style={open ? { margin: "0rem 1rem", fontSize: "1.3rem" } : null}>Explore</h6>
                    </div>
                </button>
                <button className=' mt-2 mx-1 rounded hover:bg-slate-500'>
                    <div className='items-center flex my-1 p-2' style={open ? { flexDirection: "row" } : { flexDirection: "column" }}>
                        <img src={shorts} alt="" className='h-8 w-8' />
                        <h6 className='my-2 text-cyan-200' style={open ? { margin: "0rem 1rem", fontSize: "1.3rem" } : null}>Shorts</h6>
                    </div>

                </button>
                <button className=' mt-2 mx-1 rounded hover:bg-slate-500'>
                    <div className='items-center flex my-1 p-2' style={open ? { flexDirection: "row" } : { flexDirection: "column" }}>
                        <img src={subscription} alt="" className='h-8 w-8' />
                        <h6 className='my-2 text-cyan-200' style={open ? { margin: "0rem 1rem", fontSize: "1.3rem" } : null}>Subscriptions</h6>
                    </div>

                </button>
                <button className=' mt-2 mx-1 rounded hover:bg-slate-500'>
                    <div className='items-center flex my-1 p-2' style={open ? { flexDirection: "row" } : { flexDirection: "column" }}>
                        <img src={library} alt="" className='h-8 w-8' />
                        <h6 className='my-2 text-cyan-200' style={open ? { margin: "0rem 1rem", fontSize: "1.3rem" } : null}>Library</h6>
                    </div>
                </button>
                <button className=' mt-2 mx-1 mb-4 rounded hover:bg-slate-500'>
                    <div className='items-center flex my-1 p-2' style={open ? { flexDirection: "row" } : { flexDirection: "column" }}>
                        <img src={history} alt="" className='h-8 w-8' />
                        <h6 className='my-2 text-cyan-200' style={open ? { margin: "0rem 1rem", fontSize: "1.3rem" } : null}>History</h6>
                    </div>
                </button>
                <div className='my-3' style={open ? null : { display: "none" }}>
                    <hr />
                    <h1 className='text-2xl font-medium text-cyan-700 my-4'>BEST OF YOUTUBE</h1>
                    <button className=' mt-2 mx-4 rounded w-spec hover:bg-slate-500'>
                        <div className='items-center flex my-1 p-2' style={open ? { flexDirection: "row" } : { flexDirection: "column" }}>
                            <img src={music} alt="" className='h-8 w-8 border rounded-full' />
                            <h6 className='my-2 text-cyan-200' style={open ? { margin: "0rem 1rem", fontSize: "1.3rem" } : null}>Music</h6>
                        </div>
                    </button>
                    <button className=' mt-2 mx-4 rounded w-spec hover:bg-slate-500'>
                        <div className='items-center flex my-1 p-2' style={open ? { flexDirection: "row" } : { flexDirection: "column" }}>
                            <img src={sport} alt="" className='h-8 w-8 border rounded-full' />
                            <h6 className='my-2 text-cyan-200' style={open ? { margin: "0rem 1rem", fontSize: "1.3rem" } : null}>Sports</h6>
                        </div>
                    </button>
                    <button className=' mt-2 mx-4 rounded w-spec hover:bg-slate-500'>
                        <div className='items-center flex my-1 p-2' style={open ? { flexDirection: "row" } : { flexDirection: "column" }}>
                            <img src={gaming} alt="" className='h-8 w-8 border rounded-full' />
                            <h6 className='my-2 text-cyan-200' style={open ? { margin: "0rem 1rem", fontSize: "1.3rem" } : null}>Gaming</h6>
                        </div>
                    </button>
                    <button  className=' mt-2 mx-4 rounded w-spec hover:bg-slate-500'>
                        <div className='items-center flex my-1 p-2' style={open ? { flexDirection: "row" } : { flexDirection: "column" }}>
                            <img src={movie} alt="" className='h-8 w-8 border rounded-full' />
                            <h6 className='my-2 text-cyan-200' style={open ? { margin: "0rem 1rem", fontSize: "1.3rem" } : null}>Movies</h6>
                        </div>
                    </button>
                    <button  className=' mt-2 mx-4 rounded w-spec hover:bg-slate-500'>
                        <div className='items-center flex my-1 p-2' style={open ? { flexDirection: "row" } : { flexDirection: "column" }}>
                            <img src={news} alt="" className='h-8 w-8 border rounded-full' />
                            <h6 className='my-2 text-cyan-200' style={open ? { margin: "0rem 1rem", fontSize: "1.3rem" } : null}>News</h6>
                        </div>
                    </button>
                    <button  className=' mt-2 mx-4 rounded w-spec hover:bg-slate-500'>
                        <div className='items-center flex my-1 p-2' style={open ? { flexDirection: "row" } : { flexDirection: "column" }}>
                            <img src={live} alt="" className='h-8 w-8 border rounded-full' />
                            <h6 className='my-2 text-cyan-200' style={open ? { margin: "0rem 1rem", fontSize: "1.3rem" } : null}>Live</h6>
                        </div>
                    </button>
                    <button  className=' mt-2 mx-4 rounded w-spec hover:bg-slate-500'>
                        <div className='items-center flex my-1 p-2' style={open ? { flexDirection: "row" } : { flexDirection: "column" }}>
                            <img src={f_b} alt="" className='h-8 w-8 border rounded-full' />
                            <h6 className='my-2 text-cyan-200' style={open ? { margin: "0rem 1rem", fontSize: "1.3rem" } : null}>Fashion & Beauty</h6>
                        </div>
                    </button>
                    <button  className=' mt-2 mx-4 rounded w-spec hover:bg-slate-500'>
                        <div className='items-center flex my-1 p-2' style={open ? { flexDirection: "row" } : { flexDirection: "column" }}>
                            <img src={learn} alt="" className='h-8 w-8 border rounded-full' />
                            <h6 className='my-2 text-cyan-200' style={open ? { margin: "0rem 1rem", fontSize: "1.3rem" } : null}>Learning</h6>
                        </div>
                    </button>
                    <button  className=' mt-2 mx-4 rounded w-spec hover:bg-slate-500'>
                        <div className='items-center flex my-1 p-2' style={open ? { flexDirection: "row" } : { flexDirection: "column" }}>
                            <img src={spotlight} alt="" className='h-8 w-8 border rounded-full' />
                            <h6 className='my-2 text-cyan-200' style={open ? { margin: "0rem 1rem", fontSize: "1.3rem" } : null}>Spotlight</h6>
                        </div>
                    </button>
                    <button className=' mt-2 mx-4 mb-4 rounded w-spec hover:bg-slate-500'>
                        <div className='items-center flex my-1 p-2' style={open ? { flexDirection: "row" } : { flexDirection: "column" }}>
                            <img src={vedio} alt="" className='h-8 w-8 border rounded-full' />
                            <h6 className='my-2 text-cyan-200' style={open ? { margin: "0rem 1rem", fontSize: "1.3rem" } : null}>360* vedio</h6>
                        </div>
                    </button>
                    <hr />
                    <button className=' mt-2 mx-4 mb-4 my-2 w-spec rounded hover:bg-slate-500'>
                        <div className='items-center flex my-1 p-2' style={open ? { flexDirection: "row" } : { flexDirection: "column" }}>
                            <img src={plus} alt="" className='h-8 w-8' />
                            <h6 className='my-2 text-cyan-200' style={open ? { margin: "0rem 1rem", fontSize: "1.3rem" } : null}>Browse channels</h6>
                        </div>
                    </button>
                    <hr />
                    <h1 className='text-xl font-medium text-cyan-700 my-4'>MORE FROM YOUTUBE</h1>
                    <button  className=' mt-2 mx-4 rounded w-spec hover:bg-slate-500'>
                        <div className='items-center flex my-1 p-1' style={open ? { flexDirection: "row" } : { flexDirection: "column" }}>
                            <img src={premium} alt="" className='h-8 w-8' />
                            <h6 className='my-2 text-cyan-200' style={open ? { margin: "0rem 1rem", fontSize: "1.3rem" } : null}>YouTube Premium</h6>
                        </div>
                    </button>
                    <button className=' mt-2 mx-4 mb-4 w-spec rounded hover:bg-slate-500'>
                        <div className='items-center flex my-1 p-2' style={open ? { flexDirection: "row" } : { flexDirection: "column" }}>
                            <img src={Live} alt="" className='h-8 w-8' />
                            <h6 className='my-2 text-cyan-200' style={open ? { margin: "0rem 1rem", fontSize: "1.3rem" } : null}>Live</h6>
                        </div>
                    </button>
                    <hr />
                    <button className=' mt-4 mx-4 w-spec rounded hover:bg-slate-500'>
                        <div className='items-center flex my-1 p-2' style={open ? { flexDirection: "row" } : { flexDirection: "column" }}>
                            <img src={setting} alt="" className='h-8 w-8' />
                            <h6 className='my-2 text-cyan-200' style={open ? { margin: "0rem 1rem", fontSize: "1.3rem" } : null}>Settings</h6>
                        </div>
                    </button><button  className=' mt-2 mx-4 rounded w-spec hover:bg-slate-500'>
                        <div className='items-center flex my-1 p-2' style={open ? { flexDirection: "row" } : { flexDirection: "column" }}>
                            <img src={rphist} alt="" className='h-8 w-8' />
                            <h6 className='my-2 text-cyan-200' style={open ? { margin: "0rem 1rem", fontSize: "1.3rem" } : null}>Report History</h6>
                        </div>
                    </button>
                    <button  className=' mt-2 mx-4 rounded w-spec hover:bg-slate-500'>
                        <div className='items-center flex my-1 p-2' style={open ? { flexDirection: "row" } : { flexDirection: "column" }}>
                            <img src={help} alt="" className='h-8 w-8' />
                            <h6 className='my-2 text-cyan-200' style={open ? { margin: "0rem 1rem", fontSize: "1.3rem" } : null}>Help</h6>
                        </div>
                    </button>
                    <button  className=' mt-2 mx-4 rounded w-spec hover:bg-slate-500'>
                        <div className='items-center flex my-1 p-2' style={open ? { flexDirection: "row" } : { flexDirection: "column" }}>
                            <img src={feedback} alt="" className='h-8 w-8' />
                            <h6 className='my-2 text-cyan-200' style={open ? { margin: "0rem 1rem", fontSize: "1.3rem" } : null}>Send Feedback</h6>
                        </div>
                    </button>
                </div>
            </div>
        </div >
    )
}

export default HamburItem
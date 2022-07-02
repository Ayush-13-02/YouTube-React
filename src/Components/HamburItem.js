import React from 'react'
import Home from './Img/home.png'
import shorts from './Img/shorts.png'
import library from './Img/library.png'
import subscription from './Img/Sub.png'
import explore from './Img/explore.png'
// import youImg from './Img/youtubeimg.png'
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
// import Hambur from './Img/menu.png'
function HamburItem({ open }) {

    return (
        <div className='flex-col flex'>
            <div className='h-screen flex flex-col overflow-y-auto scrollbar w-0 md:w-[5rem] pt-2 absolute md:relative bg-zinc-900 bg-opacity-90' style={open ? { width: "16rem", marginLeft: "0rem"} :null}>
                <button className='rounded hover:bg-gray-500'>
                    <div className='items-center flex my-1' style={open ? { flexDirection: "row",marginLeft:"1.7rem",padding: "0.25rem" } : { flexDirection: "column" }}>
                        <img src={Home} alt="" className='h-6 w-6' />
                        <h6 className='my-2 text-white' style={open ? { margin: "0rem 1rem", fontSize: "1rem" } : {fontSize: "0.75rem"}}>Home</h6>
                    </div>
                </button>
                <button className='rounded hover:bg-slate-500'>
                    <div className='items-center flex my-1' style={open ? { flexDirection: "row",marginLeft:"1.7rem",padding: "0.25rem" } : { flexDirection: "column" }}>
                        <img src={explore} alt="" className='h-6 w-6' />
                        <h6 className='my-2 text-white' style={open ? { margin: "0rem 1rem", fontSize: "1rem" } : {fontSize: "0.75rem"}}>Explore</h6>
                    </div>
                </button>
                <button className='rounded hover:bg-slate-500'>
                    <div className='items-center flex my-1' style={open ? { flexDirection: "row",marginLeft:"1.7rem",padding: "0.25rem" } : { flexDirection: "column" }}>
                        <img src={shorts} alt="" className='h-6 w-6' />
                        <h6 className='my-2 text-white' style={open ? { margin: "0rem 1rem", fontSize: "1rem" } : {fontSize: "0.75rem"}}>Shorts</h6>
                    </div>

                </button>
                <button className='rounded hover:bg-slate-500'>
                    <div className='items-center flex my-1' style={open ? { flexDirection: "row",marginLeft:"1.7rem",padding: "0.25rem" } : { flexDirection: "column" }}>
                        <img src={subscription} alt="" className='h-6 w-6' />
                        <h6 className='my-2 text-white' style={open ? { margin: "0rem 1rem", fontSize: "1rem" } : {fontSize: "0.75rem"}}>Subscriptions</h6>
                    </div>

                </button>
                <button className='rounded hover:bg-slate-500'>
                    <div className='items-center flex my-1' style={open ? { flexDirection: "row",marginLeft:"1.7rem",padding: "0.25rem" } : { flexDirection: "column" }}>
                        <img src={library} alt="" className='h-6 w-6' />
                        <h6 className='my-2 text-white' style={open ? { margin: "0rem 1rem", fontSize: "1rem" } : {fontSize: "0.75rem"}}>Library</h6>
                    </div>
                </button>
                <button className='mb-4 rounded hover:bg-slate-500'>
                    <div className='items-center flex my-1' style={open ? { flexDirection: "row",marginLeft:"1.7rem",padding: "0.25rem" } : { flexDirection: "column" }}>
                        <img src={history} alt="" className='h-6 w-6' />
                        <h6 className='my-2 text-white' style={open ? { margin: "0rem 1rem", fontSize: "1rem" } : {fontSize: "0.75rem"}}>History</h6>
                    </div>
                </button>
                <div className='my-3' style={open ? {fontSize: "0.75rem"} : { display: "none" }}>
                    <hr />
                    <h1 className='text-lg mx-2 ml-8 font-medium text-yellow-100 my-4'>BEST OF YOUTUBE</h1>
                    <button className='mx-2 rounded w-spec hover:bg-slate-500'>
                        <div className='items-center flex my-1' style={open ? { flexDirection: "row",marginLeft:"1.7rem",padding: "0.25rem" } : { flexDirection: "column" }}>
                            <img src={music} alt="" className='h-6 w-6 border rounded-full' />
                            <h6 className='my-2 text-white' style={open ? { margin: "0rem 1rem", fontSize: "1rem" } : {fontSize: "0.75rem"}}>Music</h6>
                        </div>
                    </button>
                    <button className='mx-2 rounded w-spec hover:bg-slate-500'>
                        <div className='items-center flex my-1' style={open ? { flexDirection: "row",marginLeft:"1.7rem",padding: "0.25rem" } : { flexDirection: "column" }}>
                            <img src={sport} alt="" className='h-6 w-6 border rounded-full' />
                            <h6 className='my-2 text-white' style={open ? { margin: "0rem 1rem", fontSize: "1rem" } : {fontSize: "0.75rem"}}>Sports</h6>
                        </div>
                    </button>
                    <button className='mx-2 rounded w-spec hover:bg-slate-500'>
                        <div className='items-center flex my-1' style={open ? { flexDirection: "row",marginLeft:"1.7rem",padding: "0.25rem" } : { flexDirection: "column" }}>
                            <img src={gaming} alt="" className='h-6 w-6 border rounded-full' />
                            <h6 className='my-2 text-white' style={open ? { margin: "0rem 1rem", fontSize: "1rem" } : {fontSize: "0.75rem"}}>Gaming</h6>
                        </div>
                    </button>
                    <button className='mx-2 rounded w-spec hover:bg-slate-500'>
                        <div className='items-center flex my-1' style={open ? { flexDirection: "row",marginLeft:"1.7rem",padding: "0.25rem" } : { flexDirection: "column" }}>
                            <img src={movie} alt="" className='h-6 w-6 border rounded-full' />
                            <h6 className='my-2 text-white' style={open ? { margin: "0rem 1rem", fontSize: "1rem" } : {fontSize: "0.75rem"}}>Movies</h6>
                        </div>
                    </button>
                    <button className='mx-2 rounded w-spec hover:bg-slate-500'>
                        <div className='items-center flex my-1' style={open ? { flexDirection: "row",marginLeft:"1.7rem",padding: "0.25rem" } : { flexDirection: "column" }}>
                            <img src={news} alt="" className='h-6 w-6 border rounded-full' />
                            <h6 className='my-2 text-white' style={open ? { margin: "0rem 1rem", fontSize: "1rem" } : {fontSize: "0.75rem"}}>News</h6>
                        </div>
                    </button>
                    <button className='mx-2 rounded w-spec hover:bg-slate-500'>
                        <div className='items-center flex my-1' style={open ? { flexDirection: "row",marginLeft:"1.7rem",padding: "0.25rem" } : { flexDirection: "column" }}>
                            <img src={live} alt="" className='h-6 w-6 border rounded-full' />
                            <h6 className='my-2 text-white' style={open ? { margin: "0rem 1rem", fontSize: "1rem" } : {fontSize: "0.75rem"}}>Live</h6>
                        </div>
                    </button>
                    <button className='mx-2 rounded w-spec hover:bg-slate-500'>
                        <div className='items-center flex my-1' style={open ? { flexDirection: "row",marginLeft:"1.7rem",padding: "0.25rem" } : { flexDirection: "column" }}>
                            <img src={f_b} alt="" className='h-6 w-6 border rounded-full' />
                            <h6 className='my-2 text-white' style={open ? { margin: "0rem 1rem", fontSize: "1rem" } : {fontSize: "0.75rem"}}>Fashion & Beauty</h6>
                        </div>
                    </button>
                    <button className='mx-2 rounded w-spec hover:bg-slate-500'>
                        <div className='items-center flex my-1' style={open ? { flexDirection: "row",marginLeft:"1.7rem",padding: "0.25rem" } : { flexDirection: "column" }}>
                            <img src={learn} alt="" className='h-6 w-6 border rounded-full' />
                            <h6 className='my-2 text-white' style={open ? { margin: "0rem 1rem", fontSize: "1rem" } : {fontSize: "0.75rem"}}>Learning</h6>
                        </div>
                    </button>
                    <button className='mx-2 rounded w-spec hover:bg-slate-500'>
                        <div className='items-center flex my-1' style={open ? { flexDirection: "row",marginLeft:"1.7rem",padding: "0.25rem" } : { flexDirection: "column" }}>
                            <img src={spotlight} alt="" className='h-6 w-6 border rounded-full' />
                            <h6 className='my-2 text-white' style={open ? { margin: "0rem 1rem", fontSize: "1rem" } : {fontSize: "0.75rem"}}>Spotlight</h6>
                        </div>
                    </button>
                    <button className='mx-2 mb-4 rounded w-spec hover:bg-slate-500'>
                        <div className='items-center flex my-1' style={open ? { flexDirection: "row",marginLeft:"1.7rem",padding: "0.25rem" } : { flexDirection: "column" }}>
                            <img src={vedio} alt="" className='h-6 w-6 border rounded-full' />
                            <h6 className='my-2 text-white' style={open ? { margin: "0rem 1rem", fontSize: "1rem" } : {fontSize: "0.75rem"}}>360* vedio</h6>
                        </div>
                    </button>
                    <hr />
                    <button className='mx-2 mb-4 my-2 w-spec rounded hover:bg-slate-500'>
                        <div className='items-center flex my-1' style={open ? { flexDirection: "row",marginLeft:"1.7rem",padding: "0.25rem" } : { flexDirection: "column" }}>
                            <img src={plus} alt="" className='h-6 w-6' />
                            <h6 className='my-2 text-white' style={open ? { margin: "0rem 1rem", fontSize: "1rem" } : {fontSize: "0.75rem"}}>Browse channels</h6>
                        </div>
                    </button>
                    <hr />
                    <h1 className='text-base mx-2 ml-8 font-medium text-yellow-100 my-4'>MORE FROM YOUTUBE</h1>
                    <button className='mx-2 rounded w-spec hover:bg-slate-500'>
                        <div className='items-center flex my-1 p-1' style={open ? { flexDirection: "row",marginLeft:"1.7rem",padding: "0.25rem" } : { flexDirection: "column" }}>
                            <img src={premium} alt="" className='h-6 w-6' />
                            <h6 className='my-2 text-white' style={open ? { margin: "0rem 1rem", fontSize: "1rem" } : {fontSize: "0.75rem"}}>YouTube Premium</h6>
                        </div>
                    </button>
                    <button className='mx-2 mb-4 w-spec rounded hover:bg-slate-500'>
                        <div className='items-center flex my-1' style={open ? { flexDirection: "row",marginLeft:"1.7rem",padding: "0.25rem" } : { flexDirection: "column" }}>
                            <img src={Live} alt="" className='h-6 w-6' />
                            <h6 className='my-2 text-white' style={open ? { margin: "0rem 1rem", fontSize: "1rem" } : {fontSize: "0.75rem"}}>Live</h6>
                        </div>
                    </button>
                    <hr />
                    <button className=' mt-4 mx-2 w-spec rounded hover:bg-slate-500'>
                        <div className='items-center flex my-1' style={open ? { flexDirection: "row",marginLeft:"1.7rem",padding: "0.25rem" } : { flexDirection: "column" }}>
                            <img src={setting} alt="" className='h-6 w-6' />
                            <h6 className='my-2 text-white' style={open ? { margin: "0rem 1rem", fontSize: "1rem" } : {fontSize: "0.75rem"}}>Settings</h6>
                        </div>
                    </button><button className='mx-2 rounded w-spec hover:bg-slate-500'>
                        <div className='items-center flex my-1' style={open ? { flexDirection: "row",marginLeft:"1.7rem",padding: "0.25rem" } : { flexDirection: "column" }}>
                            <img src={rphist} alt="" className='h-6 w-6' />
                            <h6 className='my-2 text-white' style={open ? { margin: "0rem 1rem", fontSize: "1rem" } : {fontSize: "0.75rem"}}>Report History</h6>
                        </div>
                    </button>
                    <button className='mx-2 rounded w-spec hover:bg-slate-500'>
                        <div className='items-center flex my-1' style={open ? { flexDirection: "row",marginLeft:"1.7rem",padding: "0.25rem" } : { flexDirection: "column" }}>
                            <img src={help} alt="" className='h-6 w-6' />
                            <h6 className='my-2 text-white' style={open ? { margin: "0rem 1rem", fontSize: "1rem" } : {fontSize: "0.75rem"}}>Help</h6>
                        </div>
                    </button>
                    <button className=' mx-2 rounded w-spec hover:bg-slate-500'>
                        <div className='items-center flex my-1' style={open ? { flexDirection: "row",marginLeft:"1.7rem",padding: "0.25rem" } : { flexDirection: "column" }}>
                            <img src={feedback} alt="" className='h-6 w-6' />
                            <h6 className='my-2 text-white' style={open ? { margin: "0rem 1rem", fontSize: "1rem" } : {fontSize: "0.75rem"}}>Send Feedback</h6>
                        </div>
                    </button>
                </div>
            </div>
        </div >
    )
}

export default HamburItem
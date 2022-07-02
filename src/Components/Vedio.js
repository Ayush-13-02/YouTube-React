import React from 'react'
import build from './Img/newbuild.jpg'
import hq from './Img/hq720.webp'
// import '../talwind.css'
function Vedio({ login }) {
    const list = [
        { image: hq }, { image: hq }, { image: hq }, { image: hq }, { image: hq }, { image: hq },
        { image: hq }, { image: hq }, { image: hq }, { image: hq }, { image: hq }, { image: hq },
        { image: hq }, { image: hq }, { image: hq }, { image: hq }, { image: hq }, { image: hq }, { image: hq }, { image: hq }
    ]
    return (
        <>
            <div className='w-full h-full' style={login ? { display: "none" } : null}>
                <hr />
                <div className='h-full w-full overflow-y-scroll scrollbar'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center'>
                        {
                            list.map((item, i) => {
                                return <div key={i} className="max-w-sm rounded overflow-hidden shadow-lg m-2">
                                    <a href='https://www.youtube.com/watch?v=vo943l4Pp0I'>
                                        <img className="w-full" src={item.image} alt="Sunset in the mountains" />
                                        <div className="px-1 overflow-y-hidden py-2 flex">
                                            <img className='h-12 w-12 rounded-full mr-2' src={build} alt='' />
                                            <div className="font-medium text-base p-1 mb-2 text-white">Dirty Little Secret - Nora Fatehi x Zack Knight (EXCLUSIVE Music Video)</div>

                                        </div>
                                        <div className='text-gray-100 text-sm font-normal m-1 px-4 ml-12'>
                                            <h6>Channel Name</h6>
                                            <span>100k veiws </span>
                                            <span className='mx-1 mb-1'>.</span>
                                            <span> 2 months ago</span>
                                        </div>
                                    </a>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Vedio
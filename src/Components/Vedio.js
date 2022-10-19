import React from 'react'
import build from './Img/newbuild.jpg'
import hq from './Img/hq720.webp'
import hq2 from './Img/hq2.webp'
import hq3 from './Img/hq3.webp'
import hq4 from './Img/hq4.webp'
import hq5 from './Img/hq5.webp'
import hq6 from './Img/hq6.webp'
import hq7 from './Img/hq7.webp'
import hq8 from './Img/hq8.webp'
import hq9 from './Img/hq9.webp'
import hq10 from './Img/hq10.webp'
// import '../talwind.css'
function Vedio({ login }) {
    const list = [
        { image:hq, Title:'B Praak Top 10 Sad Songs B Praak Romantic Jukebox Best Sad Songs  B Praak(128k)' },{ image:hq4, Title:'The Untold LOVE Story of Vicky with Katrina Kaif | How they fell in love | Learn English 2022' },{ image:hq2, Title:'Together Forever | Yo Yo Honey Singh | Love Song | Judwaaz' },{ image:hq3, Title:'B Praak Top 10 Sad Songs     B Praak Romantic Jukebox  Best Sad Songs  B Praak(128k)' },
        { image:hq5, Title:'Together Forever | Yo Yo Honey Singh | Love Song | Judwaaz' },{ image:hq6, Title:'Apsraa | Jaani Ft Asees Kaur | Arvindr Khaira | Desi Melodies | Latest Punjabi Songs 2021' },{ image:hq, Title:'B Praak Top 10 Sad Songs B Praak Romantic Jukebox Best Sad Songs  B Praak(128k)' },{ image:hq8, Title:'The Untold LOVE Story of Vicky with Katrina Kaif | How they fell in love | Learn English 2022' },
        { image:hq10, Title:'Apsraa | Jaani Ft Asees Kaur | Arvindr Khaira | Desi Melodies | Latest Punjabi Songs 2021' },{ image:hq7, Title:'The Untold LOVE Story of Vicky with Katrina Kaif | How they fell in love | Learn English 2022' },{ image:hq9, Title:'The Untold LOVE Story of Vicky with Katrina Kaif | How they fell in love | Learn English 2022' },{ image:hq3, Title:'B Praak Top 10 Sad Songs B Praak Romantic Jukebox Best Sad Songs  B Praak(128k)' },
        { image:hq, Title:'The Untold LOVE Story of Vicky with Katrina Kaif | How they fell in love | Learn English 2022' },{ image:hq4, Title:'The Untold LOVE Story of Vicky with Katrina Kaif | How they fell in love | Learn English 2022' },{ image:hq2, Title:'Together Forever | Yo Yo Honey Singh | Love Song | Judwaaz' },{ image:hq5, Title:'Together Forever | Yo Yo Honey Singh | Love Song | Judwaaz' },
    ]
    return (
        <>
            <div className='w-full h-full' style={login ? { display: "none" } : null}>
                <hr />
                <div className='h-full w-full overflow-y-scroll scrollnav md:scrollbar'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center'>
                        {
                            list.map((item, i) => {
                                return <div key={i} className="max-w-sm rounded overflow-hidden shadow-lg m-2">
                                    <a href='https://www.youtube.com/watch?v=vo943l4Pp0I'>
                                        <img className="w-full" src={item.image} alt="Sunset in the mountains" />
                                        <div className="p-1 overflow-y-hidden flex items-center justify-center">
                                            <img className='h-10 w-10 rounded-full mr-2' src={build} alt='' />
                                            <div className="font-semibold w-full max-h-12 overflow-hidden whitespace-normal text-ellipsis text-[0.925rem] p-1 mb-2 text-white">{item.Title}</div>

                                        </div>
                                        <div className='text-gray-400 text-sm px-4 ml-12'>
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
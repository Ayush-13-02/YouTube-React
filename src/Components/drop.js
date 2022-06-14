import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import setting from './Img/settings.png'
import help from './Img/question.png'
import feedback from './Img/feedback.png'
import threedot from './Img/3dot.png'
import Tippy from '@tippyjs/react'
import moon from './Img/moon.png'
import Lang from './Img/Lang.png'
import Location from './Img/Location.png'
import data from './Img/data.png'
import keyboard from './Img/keyboard.png'
import rarr from './Img/arrow-r.png'
import 'tippy.js/dist/tippy.css'
export default function Example({signin}) {
  return (
    <div className="text-right mt-3" style={signin?{display:"none"}:null}>
      <Menu as="div" className="relative inline-block text-left">
        <Tippy content={<span className='p-2 text-white text-lg'>Settings</span>}>
          <Menu.Button className='justify-center mt-4 mx-2'><img src={threedot} alt="" className='h-6' /></Menu.Button>
        </Tippy>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="w-80 bg-slate-500 text-yellow-50 mt-2 absolute right-0">
             <div className='py-1'>
              <Menu.Item>
                {() => (
                  <button>
                    <div className='flex items-center p-2 hover:bg-slate-600'>
                        <img src={moon} alt="..." className='m-2 h-6 mt-2' />
                        <span className='text-lg mx-4'>Appearence: Dark</span>
                        <img src={rarr} alt="..." className='m-2 h-4 mt-2' style={{marginLeft:"3.75rem"}} />
                    </div>
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
              {() => (
                  <button>
                    <div className='flex items-center p-2 w-80 rounded hover:bg-slate-600'>
                        <img src={Lang} alt="..." className='m-2 h-6 mt-2' />
                        <span className='text-lg mx-4'>Language: English (India)</span>
                        <img src={rarr} alt="..." className='m-2 h-4 mt-2 ml-0' />
                    </div>
                  </button>
                )}
              </Menu.Item>
              
              <Menu.Item>
              {() => (
                  <button>
                  <div className='flex items-center p-2 w-80 rounded hover:bg-slate-600'>
                    <img src={Location} alt="..." className='m-2 h-6 mt-2' />
                    <span className='text-lg mx-4'>Location: Ghana</span>
                    <img src={rarr} alt="..." className='m-2 h-4 mt-2' style={{marginLeft:"4.5rem"}} />
                  </div>
                </button>
                )}
              </Menu.Item>
              <Menu.Item>
                  {() => (
                      <button>
                    <div className='flex items-center p-2 w-80 rounded hover:bg-slate-600'>
                        <img src={setting} alt="..." className='m-2 h-6 mt-2' />
                        <span className='text-xl mx-4'>Settings</span>
                    </div>
                  </button>
                )}
              </Menu.Item>
              
              <Menu.Item>
                 {() => (
                  <button>
                    <div className='flex items-center p-2 w-80 rounded hover:bg-slate-600'>
                        <img src={data} alt="..." className='m-2 h-6 mt-2' />
                        <span className='text-xl mx-4'>Your data in YouTube</span>
                    </div>
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {()=>(
                    <button>
                        <div className='flex items-center p-2 w-80 rounded hover:bg-slate-600'>
                            <img src={help} alt="..." className='m-2 h-6 mt-2' />
                            <span className='text-xl mx-4'>Help</span>
                        </div>
                    </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {()=>(
                    <button>
                        <div className='flex items-center p-2 w-80 rounded hover:bg-slate-600'>
                            <img src={feedback} alt="..." className='m-2 h-6 mt-2' />
                            <span className='text-xl mx-4'>Send Feedback</span>
                        </div>
                    </button>
                )}
                </Menu.Item>
                <Menu.Item>
                {()=>(
                    <button>
                        <div className='flex items-center p-2 w-80 rounded hover:bg-slate-600'>
                            <img src={keyboard} alt="..." className='m-2 h-6 mt-2' />
                            <span className='text-xl mx-4'>Keybopard Shortcuts</span>
                        </div>
                    </button>
                )}
              </Menu.Item>
              <hr/>
              <Menu.Item>
                {()=>(
                    <button>
                        <div className='flex items-center p-2 w-80 rounded hover:bg-slate-600'>
                            <span className='text-xl mx-4'>Restricted Mode: Off</span>
                            <img src={rarr} alt="..." className='m-2 h-4 mt-2 ml-16' />
                        </div>
                    </button>
                )}
              </Menu.Item>
            </div>
              
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}


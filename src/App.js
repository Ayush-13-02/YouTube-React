// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import HamburItem from './Components/HamburItem';
import Login from './Components/Login';
// import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
// import SettingList from './Components/SettingList';
import Vedio from './Components/Vedio';
// import Example from './Components/drop'
function App() {
  const [open, setOpen] = useState(false);
  const [login, setLogin] = useState(false);
  const [signin, setSignin] = useState(false)
  const handleopen = () => {
    setOpen(!open);
  }
  const handlelogin = () => {
    setLogin(!login);
  }
  const handlesignin = () => {
    setSignin(!signin);
    setLogin(!login);
  }
  return (
    <>
      <div className='bg-slate-800 w-full h-full flex'>
        <HamburItem open={open} handleopen={handleopen} />
        <div className='flex flex-col h-screen justify-center'>
          <Navbar open={open} signin={signin} handlelogin={handlelogin} />
          <Vedio login={login} />
          {login ? <Login handlesignin={handlesignin} /> : null}
        </div>
        {/* <Footer/> */}
      </div>
    </>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import HamburItem from './Components/HamburItem';
import Login from './Components/Login';
import Logpass from './Components/Logpass';
// import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
// import Navcopy from './Components/Navcopy';
// import SettingList from './Components/SettingList';
import Vedio from './Components/Vedio';
// import Example from './Components/drop'
function App() {
  const [open, setOpen] = useState(false);
  const [login, setLogin] = useState(false);
  const [signin, setSignin] = useState(false);
  const [logopen, setLogopen] = useState(false);
  const [checklogin, setChecklogin] = useState('');
  const handleopen = () => {
    setOpen(!open);
  }
  const handlelogin = () => {
    setLogin(!login);
  }
  const handlesignin = () => {
    setSignin(!signin);
    setLogin(!login);
    setLogopen(!logopen);
  }
  const handlelogpass = () => {
    setLogopen(!logopen);
  }
  return (
    <>
      <Navbar open={open} signin={signin} handleopen={handleopen} handlelogin={handlelogin} />
      <div className='bg-slate-800 w-full flex h-[calc(100vh-4rem)]'>
        <HamburItem open={open} />
        <div className='flex w-full justify-center'>
          <Vedio login={login} />
          {
            login? logopen?null:<Login checklogin={checklogin} setChecklogin = {setChecklogin} handlelogpass={handlelogpass}/> : null
          }
          {
            logopen? <Logpass emailval = {checklogin} handlesignin={handlesignin} handlelogin={handlelogin}/>:null
          }
        </div>
      </div>
    </>
  );
}

export default App;

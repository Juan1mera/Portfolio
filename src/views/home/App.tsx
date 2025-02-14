import Dock from '../../components/Dock/Dock'
import './App.css'
import { BsTelegram, BsLinkedin, BsMailboxFlag, BsGithub, BsDatabaseFill , BsFillPersonFill, BsCameraFill      } from "react-icons/bs";
function App() {
  const items = [
    { icon: <BsFillPersonFill  size={18} />, label: 'About', onClick: () => alert('About!') },
    { icon: <BsDatabaseFill    size={18} />, label: 'Projects', onClick: () => alert('Projects!') },
    { icon: <BsCameraFill   size={18} />, label: 'Galery', onClick: () => alert('Galery!') },
    { icon: <BsGithub   size={18} />, label: 'Github', onClick: () => alert('Contact!') },
    { icon: <BsLinkedin    size={18} />, label: 'Linkedin', onClick: () => alert('Contact!') },
    { icon: <BsTelegram    size={18} />, label: 'Telegram', onClick: () => alert('Contact!') },
    { icon: <BsMailboxFlag     size={18} />, label: 'Gmail', onClick: () => alert('Contact!') },
  ];

  
  return (
  <div style={{position: 'fixed', bottom: 0}}>
  <Dock 
    items={items}
    panelHeight={58}
    baseItemSize={50}
    magnification={70}
  />
  </div>
  )
}

export default App

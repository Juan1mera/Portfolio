import Dock from '../../components/Dock/Dock'
import './App.css'
import { VscHome,VscArchive, VscAccount, VscSettingsGear } from "react-icons/vsc";
function App() {
  const items = [
    { icon: <VscHome size={18} />, label: 'About', onClick: () => alert('Home!') },
    { icon: <VscArchive size={18} />, label: 'Projects', onClick: () => alert('Archive!') },
    { icon: <VscAccount size={18} />, label: 'Galery', onClick: () => alert('Profile!') },
    { icon: <VscSettingsGear size={18} />, label: 'Contact', onClick: () => alert('Settings!') },
  ];

  
  return (
  <div style={{position: 'fixed', bottom: 0}}>
  <Dock 
    items={items}
    panelHeight={68}
    baseItemSize={50}
    magnification={70}
  />
  </div>
  )
}

export default App

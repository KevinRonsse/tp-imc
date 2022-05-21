import { Layout } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import Connexion from './Components/Connexion/Connexion'
import { NavSide } from './Components/nav-side/nav-side';
import { RoutesImc } from './Components/Tools/routes-imc';
import './App.css'



function App() {
  return (
    <BrowserRouter>
      {/* <Connexion/> */}
      <Layout className='layout-imc'>
        <NavSide />
        <RoutesImc />
      </Layout>
    </BrowserRouter>
  )
}

export default App;

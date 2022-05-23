import { Layout } from 'antd';
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
//import Connexion from './Components/Connexion/Connexion'
import { NavSide } from './Components/nav-side/nav-side';
import { RoutesImc } from './Components/Tools/routes-imc';
import { useDispatch, useSelector } from 'react-redux';
import { getImcUser } from './Services/imc-service';
import { Landing } from './Containers/landing';
import './App.css'

function App() {

  const { userData, loggedIn } = useSelector((state) => ({
    ...state.userReducer,
  }));
  const { imcData, updated } = useSelector((state) => ({
    ...state.imcReducer,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    if (imcData !== undefined) {
      if (imcData.length === 0 && loggedIn) {
        const data = getImcUser(userData.id)
          .then((res) => {
            dispatch({
              type: "LOADIMC",
              payload: res.data,
            });
          })
          .catch((err) => {
            console.log("App component: axios error:", err);
          });

        if (!loggedIn) {
          dispatch({
            type: "CLEARDATA",
          });
        }
      }
    }
    // test
    // console.log("userData",userData);
    // console.log("loggedIn",loggedIn);
    // test

  }, []);

  return (
    <BrowserRouter>
      {/* <Connexion/> */}
      {loggedIn
        ?
        (
          <Layout className='layout-imc'>
            <NavSide />
            <RoutesImc />
          </Layout>
        )
        :
        (
          <Landing />
        )
      }
    </BrowserRouter>
  )
}

export default App;

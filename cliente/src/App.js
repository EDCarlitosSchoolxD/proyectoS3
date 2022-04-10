import logo from './logo.svg';
import './App.css';
import {Route,BrowserRouter as Router, Routes,Link} from "react-router-dom";
import {Card} from "./components/Card.jsx";
import { Select } from './components/Select';
import intel from "./img/intel.png";
import amd from './img/amd.jpg';


import { useState } from 'react';


const amdProcesadores = ['Ryzen1','Ryzen2'];
const intelProcesadores = ['intel1','intel2'];


function App() {
  const [marca,setMarca] = useState(null);

  const cambiarMarca = (marca)=>{
    setMarca(marca);
  }



  return (
    <Router>
   <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="nav navbar-nav">
            <Card marca={()=>setMarca('Intel')} titulo="Intel" img={intel}></Card>
            <Card marca={()=>setMarca('Amd')} titulo="Amd" img={amd}/>
            
        

        </div>
    </nav>
    <div className='container'>

        <Select>
        {marca==='Amd'?
          amdProcesadores.map(procesador =>{
            return <option key={procesador} >{procesador}</option>
          }):
          intelProcesadores.map(procesador=>{
            return <option key={procesador}>{procesador}</option>
          }) 
        }
        </Select>

      <Routes>
      {/*
        <Route exact path='/' element={<Listar/>} />
        <Route path='/crear' element={<Crear/>} />
        <Route path='/editar' element={<Editar/>}/>
     
     */ }
      </Routes>
    </div>      
  </Router>

  );
}

export default App;

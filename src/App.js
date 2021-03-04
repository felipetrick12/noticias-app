import React, { useEffect, useState } from 'react'
import {Header} from './components/Header'
import {Formulario} from './components/Formulario'
import axios from 'axios'
import { ListNews } from './components/ListNews'

export const App = () => {

    const [categoria, guardarCategoria] = useState('')
    const [pais, guardarPais] = useState('')
    const [noticias, setNoticias] = useState([])

    useEffect(() => {
      if(pais==='') return;
      const url= `https://newsapi.org/v2/top-headlines?country=${pais}&category=${categoria}&apiKey=2cc980cb946a4c80aaebed44202fc634`;

      const BuscarNoticias =async ()=> {

        const {data} = await axios.get(url)
       const{articles}=data;

       setNoticias(articles);
      }
      BuscarNoticias();

    }, [pais,categoria]);

    
  
  return (
    <>
     
     <Header
     titulo={'EL Tiempo'}
     />

     <div className="container">
          <Formulario
          guardarCategoria={guardarCategoria}
          guardarPais={guardarPais}
          />

        <ListNews
        noticias={noticias} 
        />

     </div>
    </>
  )
}


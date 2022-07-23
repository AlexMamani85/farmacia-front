import apiFetch from "../context/api-fetch.js";
import React, { useState } from 'react';

const Products = () =>{

    async function listaProductos(){
        const data = await apiFetch("products");
        console.log(data.map(x=>x.name));
        return data;
      } 

      const [productos, setProductos] = useState(null);


      React.useEffect(() => {
          listaProductos().then(setProductos).catch(console.log);
          console.log(productos);
        },[]);

    return(
        <div>hi6</div>
    );
}

export default Products
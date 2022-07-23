import apiFetch from "../context/api-fetch.js";
import React, { useState } from 'react';
import Product from './product'

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
        <div>
            {productos && productos.map(data=>{return <Product key={data.id} data={data}></Product>})}
            {!productos && <div>nada</div>}

        </div>
    );
}

export default Products
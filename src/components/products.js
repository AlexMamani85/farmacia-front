import apiFetch from "../context/api-fetch.js";
import React, { useState } from 'react';
import Product from './product'
import "bootstrap/dist/css/bootstrap.min.css"

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
            <table className="table-primary table-hover table-striped">
                <tr scope="row">
                    <th >Name</th>
                    <th >Quantity</th>
                    <th >Price</th>
                    <th >Laboratory</th>
                </tr>
            {productos && productos.map(data=>{return (
                <>

                    <tr scope="row">
                        <Product key={data.id} data={data}></Product>

                    </tr>
                </>
            )})}

            </table>
            {!productos && <div>nada</div>}

        </div>
    );
}

export default Products
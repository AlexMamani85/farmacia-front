import { tokenKey } from "../config";
import apiFetch from "./api-fetch"


export async function createProduct(body){
  console.log(body)
    const data = await apiFetch("products", {body: body}).then(alert("Producto Creado")).catch(console.log)
  
    return data;
  }

import "bootstrap/dist/css/bootstrap.min.css"

const Product = (data) =>{
    console.log(data);

    return(
        
        <>
            
            <td>{data && <p>{data.data.name}</p>}</td>
            <td>{data && <p>{data.data.quantity}</p>}</td>
            <td>{data && <p>{data.data.price}</p>}</td>
            <td>{data && <p>{data.data.laboratory}</p>}</td>
        </>
    );
}

export default Product
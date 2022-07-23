
const Product = (data) =>{
    console.log(data);

    return(
        <div>
            
            {data && <p>{data.data.name}</p>}


            
            {!data && <div>nada</div>}
        </div>
    );
}

export default Product
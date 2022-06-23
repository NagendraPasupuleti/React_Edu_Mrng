import React from 'react';
import "./product.css"

let ProductDisplay=(props)=>{ 
   let renderProduct=props.productData.map((item,index)=>{
    return(
        <div className="col" key={item.id}>
            <div className='card'>
            <img src={item.image} alt={item.name} />
                <div className='card-body'>  
                    <div className='card-title'>{item.name}</div>
                    <div className='card-description'>{item.description}</div>
                    <div className='card-description text-primary'>Rs. {item.cost}</div>



                </div>

            </div>

        </div>
    )
   })

    
   
    return(
        <div className="row  m-3 row-cols-1 row-cols-md-5 g-5">
            {renderProduct}
    
        </div>

    ) 
}
export default ProductDisplay
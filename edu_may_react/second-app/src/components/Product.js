import React from 'react';
import { Link } from 'react-router-dom';

const  Product=(props)=>{
    console.log(props.location.search.split("")[1])


    return(
        <div>
            
            <div className='panel panel-success'>
                <div className='panel-heading'>Products Page</div>
                <div class="panel-body">
                 <div className="jumbotron ">
                        <h3>Products</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                        type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
                        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                    </div>
                <div>
                    <h2>Mobile</h2>
                    <Link to="/products/mobile?page=1" className="btn btn-primary btn-xs">Mobile</Link>
                    <h2>Cloths</h2>
                    <Link to="/products/cloths?page=2" className="btn btn-primary btn-xssuccess btn-xs">Cloths</Link>
                    <h2>Foot wares</h2>
                    <Link to="/products/footwares?page=3" className="btn btn-info btn-xs">Footwares</Link>
                </div>

                </div>
            </div>

        </div>
    )
}
export default Product;
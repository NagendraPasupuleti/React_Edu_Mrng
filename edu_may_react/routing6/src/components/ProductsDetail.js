import React from 'react';
import {useParams,useSearchParams} from "react-router-dom"


const  ProductDetail=(props)=>{
 let params=useParams();
 let {searchParams}=useSearchParams();
 console.log(searchParams)



    return(
        <div>
            
            <div className='panel panel-success'>
                <div className='panel-heading'>Products Page</div>
                <div class="panel-body">
                <div className="jumbotron ">
                    <h3>{params.item} Details</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                     type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
                     Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                </div>
                {/* <p>You are on page number:  {props.location.search.split("=")[1]}</p>
                 */}
                 <p>{searchParams?.getAll("page")}</p>
                </div>
            </div>

        </div>
    )
}
export default ProductDetail;
import React from 'react';


const  ProductDetail=(props)=>{
    console.log(props)


    return(
        <div>
            
            <div className='panel panel-success'>
                <div className='panel-heading'>Products Page</div>
                <div class="panel-body">
                <div className="jumbotron ">
                    {/* <h3>{props.match.params.item} page</h3> */}
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                     type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
                     Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                </div>
                {/* <p>You are on page number:  {props.location.search.split("=")[1]}</p>
                 */}
                </div>
            </div>

        </div>
    )
}
export default ProductDetail;
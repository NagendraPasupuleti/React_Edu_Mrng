import React from 'react';
import ProductDisplay from "./ProductDisplay";
import data from "./db.json";

class Home extends React.Component {
constructor(props) {  
    super(props);
    this.state={
        productData:data
    } 
}
render() {
return(
    <div>
        <ProductDisplay productData={this.state.productData}/>

    </div>
)
}

}
export default Home;


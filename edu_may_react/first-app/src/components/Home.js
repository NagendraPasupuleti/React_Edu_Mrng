import React from 'react';
import ProductDisplay from "./ProductDisplay";
import JSON from "./db.json";
import "./home.css"
import Header from './Header';
import Footer from './Footer';

class Home extends React.Component {
constructor(props) {  
    super(props);
    this.state={
        productData:JSON,
        filteredData:JSON
    } 
}

filterProduct=(userInput)=>{
    let output=this.state.productData.filter((item)=>{
        return item.name?.toLocaleLowerCase().indexOf(userInput.toLocaleLowerCase())>-1
    })
    this.setState({filteredData:output})
}



render() {
return(
    <div>
        <Header  userText={(data)=>this.filterProduct(data)}/>
        <ProductDisplay productData={this.state.filteredData}/><hr/>
        <Footer year="2022"/>

    </div>
)
}

}
export default Home;


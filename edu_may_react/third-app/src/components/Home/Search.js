import React from 'react';
import "./search.css"


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {


        }
    }
    render() {
    return (
        <>
        <div id="search">
            <div id="logo">
                <span>B!</span>
            </div>
            <div id="heading">
                Search Place Near To You
            </div>
            <div id="dropdown">
                <select>
                    <option>Delhi</option>
                    <option>Mumbai</option>


                </select>
                <select id="restaurants">
                    <option>Ama cafe</option>
                    <option>Wow Momos</option>


                </select>
            </div>


        </div>
           
        </>

    )

    }




}
export default Search;
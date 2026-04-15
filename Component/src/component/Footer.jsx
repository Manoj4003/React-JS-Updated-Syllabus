import React from "react";
class Footer extends React.Component{

    render(){
       return(
        <>
        <h1>My name is {this.props.name} and age is {this.props.age}</h1>
        </>

       )
    }
}
export default Footer;
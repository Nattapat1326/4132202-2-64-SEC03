import React from "react";

 class Car extends React.Component{
   constructor(){
     super();
     this.state = 25;
   }
  render(){
  return <p>Hello class{this.state} {this.props.brand}</p>;
  }
 }
 ReactDOM.render(<car />, document.getElementById("root"));

 
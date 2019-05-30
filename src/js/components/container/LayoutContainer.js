import React, { Component } from "react";

class LayoutContainer extends Component{
    constructor() {
        super();
        this.state = {
            title: "title home page"
        }
    }

    render(){
        return(<div><h1>Heading</h1></div>);
    }
}

export default LayoutContainer;
import React from 'react';
import ReactDOM from "react-dom";
import LayoutContainer from "./js/components/container/LayoutContainer";
const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<LayoutContainer />, wrapper) : false;
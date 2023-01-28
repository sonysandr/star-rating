import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { FaStar } from "react-icons/fa";
import { useState } from "react";



const createArray = (length) => [...Array(length)]

function Star({ selected = true , onSelect }) {
  return <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />;
}

function StarRating({totalStars}) {
  const [selectedStars, setSelectedStars] = useState(0)
  return (
    <>
    {createArray(totalStars).map((n, i) => 
  (<Star 
  key={i}
  selected = {selectedStars>i}
  onSelect={()=>setSelectedStars(i+1)}
  
   />))}
   <p>Rating {selectedStars} of {totalStars}</p>
   
   </>
   
   )
}

function App() {
  return <StarRating totalStars={10} />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

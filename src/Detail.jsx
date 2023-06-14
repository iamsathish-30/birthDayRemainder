import React from "react";
import './main.css';

export default function Detail(props){
    return (
        <div className="box">
            <div className="img-box">
                <img className="image" src={props.image}/>
            </div>
            <div className="box-content">
                <p className="person-name">{props.name}</p>
                <p className="person-age">{props.age} years</p>
            </div>
        </div>
    );
}

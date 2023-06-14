import React , {useState} from 'react';
import './main.css'
import Detail from './Detail';
import data from './Data'
export default function App(){
    const [persons ,setPersons]= useState(data);

    let len = persons.length;

    const personDetail = persons.map((person)=>{
        return <Detail 
            image={person.img} 
            name={person.name}
            age={person.age}
            key={person.name}
            />
    })

    const handleClick = () =>{
        setPersons([]);
    }

    return (
        <div className='container'>
            <div className='content-box'>
                <h2 className='content-text'>{len} birthdays today</h2>
                {personDetail}
                <button className='btn' onClick={handleClick}>Clear All</button>
            </div> 
        </div>
    );
}
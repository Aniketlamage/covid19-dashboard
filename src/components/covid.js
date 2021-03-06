import React, { useEffect, useState } from 'react'
import "./covid.css"

const Covid = () => {
    const [data, setData] =  useState([]);
    const getCovidData = async () =>{
        try{      
            const res = await fetch('https://data.covid19india.org/data.json')
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
           }
        catch(err){console.log(err);}
    }

    useEffect(() => {
        getCovidData ();
    }, []);
return(

<>
<section>

<div class="nav">
  <ul>
  <li><a href="http://localhost:3000/" class="nav-link">Home</a></li>
  <li><a href="https://github.com/Aniketlamage" class="nav-link">Contact Us</a></li> 
  </ul>
</div>
    <h2>Covid-19 Dashboard</h2>
    
<ul>
    <li className = "card">
        <div className ="card__main">
            <div className ="card__inner">
                <p className="card__name"> COUNTRY </p>
                <p classname="card__total card__small">INDIA</p>
            </div>
        </div>
    </li>
    <li className = "card">
        <div className ="card__main">
            <div className ="card__inner">
                <p className="card__name"><span> Total </span> RECOVERD </p>
                <p classname="card__total card__small">{data.recovered}</p>
            </div>
        </div>
    </li><li className = "card">
        <div className ="card__main">
            <div className ="card__inner">
                <p className="card__name"><span> Total </span> CONFIRMED </p>
                <p classname="card__total card__small">{data.confirmed}</p>
            </div>
        </div>
    </li><li className = "card">
        <div className ="card__main">
            <div className ="card__inner">
                <p className="card__name"><span> Total </span> DEATH </p>
                <p classname="card__total card__small">{data.deaths}</p>
            </div>
        </div>
    </li><li className = "card">
        <div className ="card__main">
            <div className ="card__inner">
                <p className="card__name"><span> Total </span> ACTIVE </p>
                <p classname="card__total card__small">{data.active}</p>
            </div>
        </div>
    </li><li className = "card">
        <div className ="card__main">
            <div className ="card__inner">
                <p className="card__name"><span> LAST </span> UPDATE </p>
                <p classname="card__total card__small">{ data.lastupdatedtime}</p>
            </div>
        </div>
    </li>
</ul>
</section>
</>

)

}
export default Covid;

import React, { useEffect } from 'react'
import "./covid.css"

const Covid = () => {

    const getCovidData = async () =>{
        try{      
            const res = await fetch('https://data.covid19india.org/data.json')
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
           }
        catch(err){console.log(err);}
    }

    useEffect(() => {
        getCovidData ();
    }, []);
return(

<>
<section>
<h1>🔴 Live </h1>
<h2>Covid19 Tracker</h2>

<ul>
    <li className = "card">
        <div className ="card__main">
            <div className ="card__inner">
                <p className="card__name"><span>Our</span>COUNTRY</p>
                <p classname="card__total card__small">INDIA</p>
            </div>
        </div>
    </li>
    <li className = "card">
        <div className ="card__main">
            <div className ="card__inner">
                <p className="card__name"><span>Total</span>RECOVERD</p>
                <p classname="card__total card__small">INDIA</p>
            </div>
        </div>
    </li><li className = "card">
        <div className ="card__main">
            <div className ="card__inner">
                <p className="card__name"><span>Our</span>COUNTRY</p>
                <p classname="card__total card__small">INDIA</p>
            </div>
        </div>
    </li><li className = "card">
        <div className ="card__main">
            <div className ="card__inner">
                <p className="card__name"><span>Our</span>COUNTRY</p>
                <p classname="card__total card__small">INDIA</p>
            </div>
        </div>
    </li><li className = "card">
        <div className ="card__main">
            <div className ="card__inner">
                <p className="card__name"><span>Our</span>COUNTRY</p>
                <p classname="card__total card__small">INDIA</p>
            </div>
        </div>
    </li><li className = "card">
        <div className ="card__main">
            <div className ="card__inner">
                <p className="card__name"><span>Our</span>COUNTRY</p>
                <p classname="card__total card__small">INDIA</p>
            </div>
        </div>
    </li>
</ul>
</section>
</>

)

}
export default Covid;

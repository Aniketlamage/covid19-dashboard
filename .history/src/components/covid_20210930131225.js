import React, { useEffect } from 'react'
const Covid = () => {

    const getCovidData = async () =>{
        try{      
            const res = await fetch('https://data.covid19india.org/data.json')
            const actualData = await res.json();
            console.log(actualData[0]);
           }
        catch(err){console.log(err);}
    }

    useEffect(() => {
        getCovidData ();
    }, []);
return(

<>
<h1>🔴 Live </h1>
<h2>Covid19 Tracker</h2>
</>

)

}
export default Covid;

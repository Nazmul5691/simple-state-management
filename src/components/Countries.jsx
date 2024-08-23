import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countires.css'


const Countries = () => {

    const [countries, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])


    const handleVisitedCountries = (country) =>{
        console.log('add this to my visited countries');
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }

    const handleVisitedFlags = (flag) =>{
        console.log('add this to my visited flags');
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }


    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <div>
                <h3>Visited Countries: {visitedCountries.length}</h3>
                <ul>
                   {
                    visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                   }
                </ul>
            </div>

            <div>
                <h3>Visited Flags : {visitedFlags.length}</h3>
                <ul>
                    {
                        visitedFlags.map((flag, index) => <div key={index}>

                            <img src={flag} alt="" />

                        </div> )
                    }
                </ul>
            </div>


            <div className="countries-style">
                {
                    countries.map(country => <Country key={country.cca3} 
                    handleVisitedCountries = {handleVisitedCountries}
                    handleVisitedFlags = {handleVisitedFlags}
                    country={country} ></Country>)
                }
            </div>
            
        </div>
    );
};

export default Countries;
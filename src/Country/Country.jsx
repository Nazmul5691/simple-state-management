/* eslint-disable no-unused-vars */

import { useState } from 'react';
import './Country.css'
import CountryDetail from '../components/CountryDetail';

const Country = ({ country, handleVisitedCountries, handleVisitedFlags }) => {

    const { name, flags, area, cca3 } = country;

    const [isVisited, setIsVisited] = useState(false);

    const handleVisited = () => {
        setIsVisited(!isVisited);
    }



    return (
        <div className={`country ${isVisited && 'visited'}`}>
            <h3 style={{ color: isVisited && 'blue' }}>Name:{name.common} </h3>
            <img src={flags.png} alt="" />
            <p>Area: {area}</p>

            <button onClick={() => handleVisitedCountries(country)}>Mark as Visited</button>
            <br />
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Visited Flags</button>
            <br />
            <button onClick={handleVisited}>{isVisited ? 'visited' : 'Going'}</button>
            {isVisited ? 'i have already visited' : 'Want to visit'}

            <hr />
            <CountryDetail>
                country={country}
                handleVisitedCountries={handleVisitedCountries}
                handleVisitedFlags={handleVisitedFlags}
            </CountryDetail>

        </div>
    );
};

export default Country;
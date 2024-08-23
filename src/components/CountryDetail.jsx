
import CountryData from "./CountryData";


const CountryDetail = ({ country, handleVisitedCountries, handleVisitedFlags }) => {


    return (
        <div>
            <h4>country details</h4>
            <hr />

            <CountryData>
                country={country}
                handleVisitedCountries={handleVisitedCountries}
                handleVisitedFlags={handleVisitedFlags}
            </CountryData>
        </div>
    );
};

export default CountryDetail;
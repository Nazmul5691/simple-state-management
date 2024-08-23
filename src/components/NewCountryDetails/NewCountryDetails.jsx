import NewCountryData from "../NewCountryData/NewCountryData";



// const NewCountryDetails = ({ country, handleVisitedCountries, handleVisitedFlags }) => {
const NewCountryDetails = (props) => {

    // const { country, handleVisitedCountries, handleVisitedFlags } = props;

    return (
        <div>
            <h4>country details</h4>
            <hr />

            {/* <NewCountryData country={country}
                handleVisitedCountries={handleVisitedCountries}
                handleVisitedFlags={handleVisitedFlags}> 
            </NewCountryData> */}

            <NewCountryData {...props} ></NewCountryData>

            
            
        </div>
    );
};

export default NewCountryDetails;
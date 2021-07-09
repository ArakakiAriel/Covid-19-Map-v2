import React,{ useState }from 'react'
import { useForm} from '../../hooks/useForm'
import PropTypes from "prop-types";
import { Opacity } from '@material-ui/icons';



export const SearchCountry = ({setCountry}) => {
    

    const [{country}, handleInputChange, reset] =useForm({country: ""});

    const handleSearch = async (e) => {
        e.preventDefault();
        setCountry(country);

        console.log(country)
        reset();

    }
    return (
        <>
            <div className="ml-3" style={{maxWidth:"90%"}}>
                <form class="row g-3" onSubmit={handleSearch} autoComplete="off">
                    <div className="col-md-9">
                        <input type="text"
                        placeholder="Country Name"
                        className="form-control"
                        name="country"
                        value = {country}
                        onChange={handleInputChange}
                        />
                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-block btn-outline-primary">Search</button>
                    </div>
                </form>
            </div>
        </>
    )
}

SearchCountry.propTypes = {
    setCountry: PropTypes.func.isRequired,
};
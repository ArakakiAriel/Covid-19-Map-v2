import React,{ useState }from 'react'
import { useForm} from '../../hooks/useForm'
import PropTypes from "prop-types";

export const SearchCountry = ({setCountry}) => {
    const [{country}, handleInputChange, reset] =useForm({country: ""});

    const handleSearch = async (e) => {
        e.preventDefault();
        setCountry(country);

        console.log(country)

    }
    return (
        <form onSubmit={handleSearch} autoComplete="off">
            <input type="text"
            placeholder="Country Name"
            className="form-control"
            name="country"
            value = {country}
            onChange={handleInputChange}
            />
            <button className="btn m-1 btn-block btn-outline-primary">Search</button>
        </form>
    )
}

SearchCountry.propTypes = {
    setCountry: PropTypes.func.isRequired,
};
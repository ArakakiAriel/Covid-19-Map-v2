import React, {useState, useEffect} from 'react';
import { axiosCall } from '../../helpers/axiosCalls';
import { StatisticsTable } from '../StatisticsTable';
import { SearchCountry } from './SearchCountry';
import { CommonLoading } from 'react-loadingg';

export const CountryScreen = () => {

    const [country, setCountry] = useState("")
    const [data, setData] = useState({loading: false, error:false, response:null});
    let error = false;
    
    const url = `https://covid-api-info.herokuapp.com/api/covid/cases/country/${country}`

    
    useEffect(() => {
        console.log("Country cambio");
        console.log(data.response)
        if(country != ""){
            const response = call();
        }

    }, [country])

    const call = async () => {
        console.log("Entro al call")
        setData({...data, loading: true})
        const response = await axiosCall(url);
        if(response.error){
            error = true;
            setData({...data, loading: false, response:null});
        }else{
            console.log(response.response_data)
            await setData({...data, response: response.response_data});
            console.log("DATA")
            console.log(data)
        }
        console.log(data);
    }
    return (
        <>
            <h1>Country Screen</h1>
            <hr/>
            
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <SearchCountry setCountry={setCountry}/>
                    </div>
                </div>
                <div className="row">
                    <StatisticsTable/>
                    <hr/>
                    <div className="container">
                        <div className="row border" classkey="total-row">
                                <div className="col" style={{"align-items":"center","justify-content": "center"}} classkey="total-col">Total</div>
                        </div>
                        <div className="row border" classkey={`row-name-title`} >
                                <div className="col border" classkey="confirmed">Confirmed</div>
                                <div className="col border" classkey="Actives">Actives</div>
                                <div className="col border" classkey="Deaths">Deaths</div>
                                <div className="col border" classkey="Recovered">Recovered</div>
                        </div>
                    {
                        (data.loading) && <CommonLoading />
                    }
                    {
                            (data.response) && data.response.map((day, index) => 

                            <div className="row border" classkey={`row-${index}`} >
                                <div className="col border" classkey={`col-confirmed-${index}`}>{day.total.confirmed}</div>
                                <div className="col border" classkey={`col-actives-${index}`}>{day.total.actives}</div>
                                <div className="col border" classkey={`col-deaths-${index}`}>{day.total.deaths}</div>
                                <div className="col border" classkey={`col-recovered-${index}`}>{day.total.recovered}</div>
                            </div>)
                    }
                    </div>
                   
                </div>
            </div>
            
        </>
    )
}
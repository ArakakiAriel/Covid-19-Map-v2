import React, {useState, useEffect} from 'react';
import { axiosCall } from '../../helpers/axiosCalls';
import { StatisticsTable } from '../StatisticsTable';
import { SearchCountry } from './SearchCountry';
import { CommonLoading } from 'react-loadingg';
import { commaSeparator } from '../../helpers/commaSeparator';
import { CountryTable } from './CountryTable';
import { Example } from './Example';
import { Charts } from './Charts';

export const CountryScreen = () => {

    const [country, setCountry] = useState("")
    const [data, setData] = useState({loading: false, error:false, response:null});
    let error = false;
    
    const urlCountry = `https://covid-api-info.herokuapp.com/api/covid/cases/country/${country}`;
    const urlCountryGrowth = `https://covid-api-info.herokuapp.com/api/covid/cases/country/${country}/growth`;


    
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
        const response = await axiosCall(urlCountry);
        const growthResponse = await axiosCall(urlCountryGrowth);
        if(response.error || growthResponse.error ){
            error = true;
            setData({...data, loading: false, response:null});
        }else{
            console.log(response.response_data)
            let tableData = await formatTableData(response.response_data, growthResponse.response_data);
            await setData({...data, response: tableData});
            
        }
        console.log(data.response);
    }
    return (
        <>
            {data.response && <h1>{data.response[0].country}</h1>}
            <hr/>


            <div>
                <div>
                    <SearchCountry setCountry={setCountry}/>
                </div>
                <div className="mt-3 container">
                    <div className="row">
                        <Charts countryData={data.response}  line_key={"new_confirmed_cases"} x_axis_key={"updated_date"} />
                    </div>
                    <div className="row">
                        <Charts countryData={data.response}  line_key={"new_death_cases"} x_axis_key={"updated_date"} stroke_color={"#DA2D00"}/>
                    </div>
                    <div className="row">
                        <Charts countryData={data.response}  line_key={"new_recovered_cases"} x_axis_key={"updated_date"} stroke_color={"#A4C406"}/>
                    </div>
                </div>
                <div className="mt-3">
                    {
                        (!data.loading?<CountryTable countryData={data.response}/>:<CommonLoading />)
                    }
                </div>
            </div>


            {/* <div className="container">
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
                                <div className="col border" classkey={`col-date-${index}`}>{day.updated_date}</div>
                                <div className="col border" classkey={`col-confirmed-${index}`}>{commaSeparator(day.total.confirmed)}</div>
                                <div className="col border" classkey={`col-actives-${index}`}>{commaSeparator(day.total.actives)}</div>
                                <div className="col border" classkey={`col-deaths-${index}`}>{commaSeparator(day.total.deaths)}</div>
                                <div className="col border" classkey={`col-recovered-${index}`}>{commaSeparator(day.total.recovered)}</div>
                                <div className="col border" classkey={`col-recovered-${index}`}>{commaSeparator(day.total.recovered)}</div>
                                <div className="col border" classkey={`col-recovered-${index}`}>{commaSeparator(day.total.recovered)}</div>
                                <div className="col border" classkey={`col-recovered-${index}`}>{commaSeparator(day.total.recovered)}</div>
                            </div>)
                    }
                    </div>
                   
                </div>
            </div> */}
            
        </>
    )
}

const formatTableData = async (arrayA, arrayB) => {
    let formatedData = [];
    await arrayA.map((dataA, index) => 
        formatedData[index] = {
            ...dataA,
            ...arrayB[index]
        }
    );

    return formatedData;
}

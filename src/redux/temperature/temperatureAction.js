import axios from 'axios'
import {
    FETCH_TEMPERATURE_REQUEST,
    FETCH_TEMPERATURE_SUCCESS, 
    FETCH_TEMPERATURE_FAILURE
} from './temperatureTypes'

export const fetchTemperatureRequest = () => {
    return {
        type: FETCH_TEMPERATURE_REQUEST
    }
}

export const fetchTemperatureSuccess = temperature => {
    return {
        type: FETCH_TEMPERATURE_SUCCESS,
        payload: temperature
    }
}

export const fetchTemperatureFailure = error => {
    return {
        type: FETCH_TEMPERATURE_FAILURE,
        payload: error
    }
}

export const fetchTemperature = () => {
    return (dispatch) => {
        dispatch(fetchTemperatureRequest())
        axios
        .get(`http://api.openweathermap.org/data/2.5/weather?lat=28.8386&lon=78.7733&appid=aa9866224e413a833008c05673c9fdc1`)
        .then(respose => {
             const temperature = respose.data.main.temp
             dispatch(fetchTemperatureSuccess(temperature))
         })
         .catch(error => {
             const errorMsg = error.message
             dispatch(fetchTemperatureFailure(errorMsg))
         })
    }
}
import axios from "axios";
import { API_HEADER_RAJA, API_RAJA, API_TIMEOUT } from "../utils/constant";


export const GET_PROVINSI = "GET_PROVINSI";

export const getProvinsiList = () => {
    // console.log('Asin')
    return (dispatch) => {
        // Loading
        dispatch({
            type: GET_PROVINSI,
            payload: {
                loading : true,
                data: false,
                errorMessage:false
            }
        })
        axios({
            method : 'get' ,
            url: API_RAJA+'province',
            timeout: API_TIMEOUT,
            headers:API_HEADER_RAJA,
        }).then((Response)=>
        // error
        {
            // console.log('Asin :', Response);
            if(Response.status !== 200){
                dispatch({
                    type: GET_PROVINSI,
                    payload: {
                        loading : false,
                        data: false,
                        errorMessage:Response
                    }
                })
            }else{
                // Berhasil
                // console.log('Asin :', Response.data.rajaongkir.results);
                dispatch({
                    type: GET_PROVINSI,
                    payload: {
                        loading : false,
                        data: Response.data ? Response.data.rajaongkir.results:[],
                        errorMessage:false
                    }
                })
            }
        }).catch((error)=>{
            dispatch({
                type: GET_PROVINSI,
                payload: {
                    loading : false,
                    data: false,
                    errorMessage:error
                }
            })
            alert(error)
        })
    }
}
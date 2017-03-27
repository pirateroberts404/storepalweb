import keys from '../keys';
import { GET_ALL_ORDERS, GET_ORDER, GET_NOTES } from './OrderActions';
import axios from 'axios';


const auth = {
    username: keys.username,
    password: keys.password
}
        
export function getAllOrders(page=1){
    let url = 'https://roofrack.com.au/wp-json/wc/v1/orders?page='+page+'&per_page=12';
    console.log(url);
    return {
        type: GET_ALL_ORDERS,
        payload: axios.get(url, {auth: auth})
    }
}

export function getOrder(orderID){
    let url = 'https://roofrack.com.au/wp-json/wc/v1/orders/' + orderID;
    return {
        type: GET_ORDER,
        payload: axios.get(url, {auth: auth})
    }
}

export function getNotes(orderID){
    let url = 'https://roofrack.com.au/wp-json/wc/v1/orders/' + orderID + '/notes';
    return {
        type: GET_NOTES,
        payload: axios.get(url, {auth: auth})
    }
}
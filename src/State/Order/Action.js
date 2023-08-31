import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS } from "./ActionType";
import {api} from "../../config/apiConfig";
import { useNavigate } from "react-router-dom";

export const createOrder = (reqData) => async (dispatch) => {
  console.log("req data", reqData);
  dispatch({ type: CREATE_ORDER_REQUEST });
  try {
    const  {data}  = await api.post(
      `/api/orders/`,
      reqData.address,
    );

    console.log("data",data.id);
  console.log("req data", reqData);

    // const navigate =useNavigate();
    if(data.id){
      // console.log("amola");
        reqData.navigate({search: `step=3&order_id=${data.id}`});
    }

    console.log("created order - ",data);

    dispatch({
        type:CREATE_ORDER_SUCCESS,
        payload:data,
    });

  } catch (error) {
   
    dispatch({
        type:CREATE_ORDER_FAILURE,
        payload:error.message
    });
  }
};


export const getOrderById = (orderId) => async (dispatch) =>{
    console.log("get order req ",orderId);
    dispatch({type:GET_ORDER_BY_ID_REQUEST});
    try {
    
        const {data} = await api.get(`/api/orders/${orderId}`,);
        
        console.log("order by id ",data);

        dispatch({
            type:GET_ORDER_BY_ID_SUCCESS,
            payload:data,
        });
    } catch (error) {
        dispatch({
            type:GET_ORDER_BY_ID_FAILURE,
            payload:error.message
        });
    }
};

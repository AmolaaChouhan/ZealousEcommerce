import React from 'react'
import AdressCard
 from '../AdressCard/AdressCard'
 import CartItem from '../Cart/CartItem'
 import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderById } from '../../../State/Order/Action'
import { useLocation } from 'react-router-dom'
import {useEffect} from "react"

const OrderSummary = () => {
  const dispatch = useDispatch();
  const location =useLocation();
  const {order}=useSelector(store=>store);
  const searchParamms=new URLSearchParams(location.search);
  const orderId=searchParamms.get("order_id")


  useEffect(()=>{
    dispatch(getOrderById(orderId))
  },[orderId]);


  return (
    <div>
      <div className='p-5 shadown-lg md-border'>
        <AdressCard address={order.order?.address}/>
      </div>
      <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
          {" "}
         {order.order?.orderItems.map((item)=> <CartItem item={item}/>)}
        </div>
    
      <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
        <div className="border">
            <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>
           <hr />
           <div className="space-y-3 font-semibold mb-10">
            <div className="flex justify-between pt-3 text-black">
                <span>price</span>
                <span>₹4697</span>
            </div>
            <div className="flex justify-between pt-3">
                <span>Disccount</span>
                <span className=" text-green-600">₹3419</span>
            </div>
            <div className="flex justify-between pt-3">
                <span>Delivery Charge</span>
                <span className=" text-green-600">Free</span>
            </div>
            <div className="flex justify-between pt-3  font-bold">
                <span>Total Amount</span>
                <span className="text-green-600">₹1278</span>
            </div>
           </div>
           <Button variant="contained" className="w-full mt-5" sx={{px:"2.5rem",py:".7rem",bgcolor:"#9155fd"}}>
                Checkout
                </Button>
        </div>
      </div>
    </div>
    </div>
  );
    </div>
  )
}

export default OrderSummary

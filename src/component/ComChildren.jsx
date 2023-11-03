import React from 'react'
import ComBrother from './ComBrother'
export default function ComChildren({number,arr,sum}) {
    
  return (
    <>
    {/* <button onClick={()=>{sum(100000)}}> Tong gia tien la:</button> */}
    <button onClick={function addCartPrice(){
        sum(1000000)
    }}> Tong gia tien la:</button>
    <div>ComChildren</div>
    <div>{number}</div>
    <ComBrother number={number}/>
    </>
  )
}

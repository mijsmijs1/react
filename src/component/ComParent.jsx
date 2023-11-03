import React from 'react'
import ComChildren from './ComChildren'
const count =1300;
export default function ComParent() {
    const sum=(SumOfCart)=>{
        alert(SumOfCart)
    }
  return (
    <>
    
    <div>ComParent</div>
    <ComChildren number={count} test={[1,2,3]} sum={sum}/>
    </>
  )
}

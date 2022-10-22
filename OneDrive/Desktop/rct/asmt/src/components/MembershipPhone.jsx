
import React from 'react';
import { useState } from 'react'
import './Phone.css'

function MembershipPhone() {

    const arr = [
        {
            i: 0,
            name: "Private Limited Company",
            price: 999,
            isSelected: false

        },
        {
            i: 1,
            name: "Limited Liability Partnership",
            price: 999,
            isSelected: false

        },
        {
            i: 2,
            name: "One Person Company",
            price: 5998,
            isSelected: true

        },
        {
            i: 3,
            name: "Partnership Firm",
            price: 999,
            isSelected: false

        }
    ]

    

    const initial = arr[0];
    const [dis,setDis] = useState(initial);

    
    const [ind,setInd] = useState(0);
    

    return (
        <div className="plans phone" >
            

            <div  className="pln" >
                <div className="header">
                    <h1>{dis.name}</h1>
                </div>
                <div className='price'>
                    <h5>Starting</h5>
                    <h1 className='rs'>Rs. {dis.price}</h1>
                    <h5 style={{ color: "blue" }}> + Govt Fees </h5>
                </div>
                <div className='details' >
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum illo dolore, a cumque rem aut explicabo obcaecati aliquid quasi recusandae molestias ex commodi asperiores quos mollitia nobis incidunt natus dignissimos!  </p>
                </div>
                <div className='more' >
                    <h5> <a href="/#">KNOW MORE</a> </h5>
                </div>
            </div>
            <div className='shapes' >
                <span className={"dot " + (ind===0 ? 'active' : '') } id='0'  onClick={() => { setDis(arr[0]); setInd(0) }}></span>
                <span className={"dot " + (ind===1 ? 'active' : '') } id='1'  onClick={() => { setDis(arr[1]); setInd(1) }}></span>
                <span className={"dot " + (ind===2 ? 'active' : '') } id='2'  onClick={() => { setDis(arr[2]); setInd(2) }}></span>
                <span className={"dot " + (ind===3 ? 'active' : '') } id='3'  onClick={() => { setDis(arr[3]); setInd(3) }}></span>
            </div>
        </div>
    );
}

export default MembershipPhone;
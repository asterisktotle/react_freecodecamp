'use client'
import React, { useState } from 'react'
import { data } from '@/data/data'

const DisplayContent = ({ data }) => {
    return (
        <div>
            {
                data && data.length > 0 ? 
                data.map( dataItem =><div className='title p-2'>
                    <h3>{dataItem.question}</h3>
                    <p>{dataItem.answer}</p>
                </div>
                 ):(
                    <div>No data found</div>
                 )
            }
        </div>
    )
}

const Accordion = () => {
    const [selected, setSelected] = useState(null);

  return (
    <div>
        <h1>Accordion</h1>
        <div>
    
        </div>


    </div>
  )
}

export default Accordion
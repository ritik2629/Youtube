import React from 'react'

export const Button =(props)=>{
    return(
        <div>
            <button className=' p-2 m-2 rounded-lg bg-gray-300 hover:bg-black hover:text-white'>{props.name}</button>
        </div>
    )
}

export default Button;
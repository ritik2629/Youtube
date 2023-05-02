import React from 'react'
import ButtonList from '../components/ButtonList'
import Result from '../components/Result'

const Filter = () => {
    return (
        <div className='flex flex-wrap  w-[87%] sm:w-4/5'>
            <ButtonList />
            <Result />
        </div>
    )
}

export default Filter
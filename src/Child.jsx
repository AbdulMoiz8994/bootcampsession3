import React from 'react'

export const Child = (props) => { //This is props which data type is object and we pass this in function parameter
    // console.log(props)
    return (
        <div>
            <h1>{props.fullName}</h1>
        </div>
    )
}
export default Child
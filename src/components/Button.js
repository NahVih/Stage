import React from 'react'



const Button = ({onClick, title}) => {

    return (
        <div>
           <button onClick={onClick} className="btn btn-primary">{title}</button>
        </div>
    )
}

export default Button

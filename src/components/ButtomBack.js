import React from 'react'


const ButtomBack = ({ history }) => {
    return (
        <div>
            <button className="btn-primary" style={{ position: 'relative', left: '-40%'}} onClick={() => history.goBack()}><i className="fas fa-arrow-left"></i></button>
        </div>
    )
}

export default ButtomBack

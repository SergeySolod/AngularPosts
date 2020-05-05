import React from 'react'

const CovidCard = (props) => {
    return (
            <div className={`card ${props.data.color}`}>
                <div className="card-content black-text">
                    <span className="card-title">{props.data.title}</span>
                    <p>{props.data.value}</p>
                </div>
            </div>
    )
}

export default CovidCard
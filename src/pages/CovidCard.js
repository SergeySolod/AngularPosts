import React from 'react'

const CovidCard = (props) => {
    return (
            <div className={`card ${props.color}`}>
                <div className="card-content black-text">
                    <span className="card-title">{props.title}</span>
                    <p></p>
                </div>
            </div>
    )
}

export default CovidCard
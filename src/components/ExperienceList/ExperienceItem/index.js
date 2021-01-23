import React from 'react'

function ExperienceItem(props) {
    
    return (
        <div className="experience-item">

            <div>
                <h4>{props.cargo}</h4>
                <span>{props.periodo}</span>

                <strong>{props.empresa}</strong>
                <span>{props.local}</span>
            </div>
            <p>
                {props.conteudo}
        </p>
        </div>
    )
}

export default ExperienceItem
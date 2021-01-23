import React from 'react'

function EducationItem(props) {
    return (
        <>
            <div className="lista-de-formacao">
                <li>
                    <h4>{props.curso}</h4>
                    <p>{props.instituicao}</p>
                    <p>{props.periodo}</p>
                </li>
            </div>
        </>
    )
}

export default EducationItem
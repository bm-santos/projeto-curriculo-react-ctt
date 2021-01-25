import React from 'react'

function EducationItem(props) {
    const { curso, instituicao, periodo } = props
    return (
        <>
            <div className="lista-de-formacao">
                <li>
                    <h4>{curso}</h4>
                    <p>{instituicao}</p>
                    <p>{periodo}</p>
                </li>
            </div>
        </>
    )
}

export default EducationItem
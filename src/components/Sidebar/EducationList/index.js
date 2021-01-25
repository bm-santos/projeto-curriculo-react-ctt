import React from 'react'
import EducationItem from './EducationItem'

function EducationList(props) {
    const { educacao } = props.resposta
    return (
        <>
            <div className="sidebar">
                <h3>Educação</h3>
                {
                    educacao.map(item => (
                        <EducationItem key={item.id} curso={item.curso} instituicao={item.instituicao} periodo={item.periodo} />
                    ))
                }
            </div>
        </>
    )
}

export default EducationList
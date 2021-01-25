import React from 'react'
import ExperienceItem from './ExperienceItem'


function ExperienceList(props) {
    const { experiencia } = props.resposta

    return (
        <>
            <div className="experience">
                <h2>Experiência Profissional</h2>

                {
                    experiencia.map(item => (
                        <ExperienceItem key={item.id} cargo={item.cargo} conteudo={item.conteudo} empresa={item.empresa} local={item.local} periodo={item.periodo} />
                    ))
                }

            </div>
        </>
    )
}

export default ExperienceList
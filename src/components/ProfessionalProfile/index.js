import React from 'react'

function ProfessionalProfile(props) {
    const { perfilProfissional } = props.resposta
    return (
        <>
            <div className="titulo">
                Perfil <br /> Profissional
      </div>

            <div className="perfil-profissional">
                <p>{perfilProfissional}</p>
            </div>
        </>
    )
}

export default ProfessionalProfile
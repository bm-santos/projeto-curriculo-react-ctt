import React from 'react'

function ProfessionalProfile(props) {
    return (
        <>
            <div className="titulo">
                Perfil <br /> Profissional
      </div>

            <div className="perfil-profissional">
                <p>{props.resposta.perfilProfissional}</p>
            </div>
        </>
    )
}

export default ProfessionalProfile
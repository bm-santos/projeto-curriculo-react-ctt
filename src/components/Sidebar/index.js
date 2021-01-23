import React from 'react'
import EducationList from './EducationList'
import ContactList from './ContactList'

function Sidebar(props) {

    return (
        <aside>
            <ContactList resposta={props.resposta.contatos} />

            <EducationList resposta={props.resposta.educacao} />
        </aside>
    )
}

export default Sidebar
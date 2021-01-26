import React from 'react'
import EducationList from './EducationList'
import ContactList from './ContactList'

function Sidebar(props) {
    const contatos = props.dadosContatos
    const educacao = props.dadosEducacao

    return (
        <aside>
            <ContactList dadosContatos={contatos} />

            <EducationList dadosEducacao={educacao} />
        </aside>
    )
}

export default Sidebar
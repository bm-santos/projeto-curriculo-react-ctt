import React from 'react'
import EducationList from './EducationList'
import ContactList from './ContactList'

function Sidebar(props) {

    return (
        <aside>
            <ContactList resposta={props.resposta} />

            <EducationList resposta={props.resposta} />
        </aside>
    )
}

export default Sidebar
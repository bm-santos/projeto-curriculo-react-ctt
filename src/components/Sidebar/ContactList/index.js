import React, { useState } from 'react'
import ContactItem from './ContactItem'

function ContactList(props) {
    const [contactSection, showContactSection] = useState(false)

    const showSection = () => {
        showContactSection(!contactSection)
    }

    return (
        <>
            <div className="sidebar">
                <h3>Contatos</h3>

                <button onClick={showSection}>Mostrar Contatos</button>

                <div className="lista-de-contatos">
                        {
                            contactSection &&
                            <>
                                {props.resposta.map(item => (
                                    <ContactItem key={item.id} tipo={item.tipo} contato={item.contato} link={item.link}/>
                                ))
                                }
                            </>
                        }
                </div>

            </div>
        </>
    )
}

export default ContactList
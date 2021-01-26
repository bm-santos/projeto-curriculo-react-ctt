import React, { useState } from 'react'
import ContactItem from './ContactItem'

function ContactList(props) {
    const [contactSection, showContactSection] = useState(false)
    const contatos  = props.dadosContatos

    const showSection = () => {
        showContactSection(!contactSection)
    }

    return (
        <>
            <div className="sidebar">
                <h3>Contatos</h3>

                <button id="botao" onClick={showSection}>Mostrar contatos</button>
                <div className="lista-de-contatos">
                    {
                        contactSection &&
                        <>
                            { 
                            contatos.map(item => (

                                < ContactItem key={item.id} tipo={item.tipo} contato={item.contato} link={item.link} />
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
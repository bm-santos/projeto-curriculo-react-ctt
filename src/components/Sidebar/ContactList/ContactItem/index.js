import React from 'react'

function ContactItem(props) {
    const { tipo, link, contato } = props

    return (
        <div className="item-contato">
            <h4>{tipo}</h4>
            <p><a href={link} target="blank">{contato}</a></p>
        </div>
    )
}

export default ContactItem
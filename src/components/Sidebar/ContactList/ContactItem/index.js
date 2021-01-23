import React from 'react'

function ContactItem(props) {
    console.log(props)

    return (
        <div className="item-contato">
            <h4>{props.tipo}</h4>
            <p><a href={props.link}>{props.contato}</a></p>
        </div>
    )
}

export default ContactItem
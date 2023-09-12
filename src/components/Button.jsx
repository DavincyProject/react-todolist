import React from 'react'

export default function Button(props) {
    const { className, text } = props;

    return (
        <button className={className}>{text}</button>
    )
}

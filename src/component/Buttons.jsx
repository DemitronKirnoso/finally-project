import React from 'react'

const Buttons = ({ style, onClick, text }) => {
    return (
        <button className={style} onClick={onClick}>{text}</button>
    )
}

export default Buttons
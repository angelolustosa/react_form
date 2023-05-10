import React, { useState } from 'react'

export const MyInput = ({ type, label, name, id, placeholder, width }) => {
    const [input, setInput] = useState('');

    return (
        <div className={`col-md-${width ? width : 2} mb-3`}>
            <label className="form-label">{label}</label>
            <input className="form-control" required type={type} name={name} id={id} placeholder={placeholder}
                value={input} 
                onChange={e => setInput(e.target.value)}/>
        </div>
    )
}

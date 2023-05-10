import React, { useState } from 'react'

export const MyInput5 = ({ label, name, type, placeholder, object, setInput }) => {

    const [inputs, setInputs] = useState({});

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({ ...values, [name]: value }))
        console.log(inputs)
    }

    return (
        <div className={`col-md-4 mb-3`}>
            <label className="form-label">{label}</label>
            <input
                className="form-control"
                // required
                type={type ? type : 'text'}
                name={name}
                id={name}
                placeholder={placeholder}
                value={inputs.nomeCompleto || ''}
                onChange={handleChange}
            />
        </div>
    )
}

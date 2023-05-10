import React, { useState } from 'react'

export const MyInput3 = ({ label, name, type, placeholder, object, setInput }) => {

    const [inputs, setInputs] = useState({});
    //console.log(object[`nomeCompleto`], { label, name, type, placeholder, object, setInput })

    /* const onChangeInput = (e, key) => {
        console.log(e.target.value, key, `${e.id}`)
        setInput({ ...object, [key]: e.target.value });
    } */

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
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
                //value={object[`${name}`] || ''}
                value={inputs[`${name}`]}
                onChange={handleChange}
            />
        </div>
    )
}

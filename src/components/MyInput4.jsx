import React from 'react'

export const  MyInput4 = ({ label, name, type, required, placeholder, object, setInput}) => {

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setInput({ ...object, [name]: value })
        //console.log(object)
    }

    return (
        <div className={`col-md-4 mb-3`}>
            <label className="form-label">{label}</label>
            <input
                className="form-control"
                required={required != undefined ? false : true}
                type={type ? type : 'text'}
                name={name}
                id={name}
                placeholder={placeholder}
                value={object[`${name}`] || ''}
                onChange={handleChange}
            />
            <div className="valid-feedback">{}</div>
        </div>
    )
}

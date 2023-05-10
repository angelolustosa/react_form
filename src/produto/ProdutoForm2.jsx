import React, { useState } from 'react'
import { MyInput } from '../components/MyInput'

export const ProdutoForm2 = () => {
    // tudo tem a ver com estado
    const [nomeCompleto, setNomeCompleto] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const [usuario, setUsuario] = useState({})

    const onChangeInput = (e, key) => {
        console.log(e, key, `${e.id}`)
        setUsuario({ ...usuario, [key]: e.target.value });
    }


    const handleSubmit = e => {
        e.preventDefault();
        console.log('submit', usuario);
    }

    return (
        <div className='container'>
            <form className='col' onSubmit={handleSubmit}>
                <h2>Cadastro de Produtos</h2>
                <hr />

                <div className={`col-md-4 mb-3`}>
                    <label className="form-label">{'Nome Completo'}</label>
                    <input
                        className="form-control"
                        // required
                        type={'text'}
                        name={'nomeCompleto'}
                        id={'nomeCompleto'}
                        placeholder={'Insira o nome completo'}
                        value={usuario.nomeCompleto || ''}
                        onChange={e => onChangeInput(e, `nomeCompleto`)}
                    />
                </div>

                <div className={`col-md-4 mb-2`}>
                    <label className="form-label">{'Email'}</label>
                    <input
                        className="form-control"
                        // required
                        type='email'
                        name='email'
                        id='email'
                        placeholder='Insira o email'
                        value={usuario.email || ''}
                        onChange={e => onChangeInput(e, `email`)}

                    />
                </div>

                <div className={`col-md-4 mb-2`}>
                    <label className="form-label">{'Senha'}</label>
                    <input
                        className="form-control"
                        // required
                        type='password'
                        name='senha'
                        id='senha'
                        placeholder='Insira a senha'
                        value={usuario.senha || ''}
                        onChange={e => onChangeInput(e, `senha`)}

                    />
                </div>
                <button className="btn btn-primary" type="submit">Enviar</button>
                <hr />
            </form>
        </div>
    )
}

import React, { useState } from 'react'
import { MyInput } from '../components/MyInput'
import { MyInput3 } from '../components/MyInput3'
import { MyInput4 } from '../components/MyInput4'
import { MyInput5 } from '../components/MyInput5'

export const ProdutoForm3 = () => {
    const [usuario, setUsuario] = useState({
        /*  nomeCompleto: `Angelo`,
         email: `angelo@gmail.com`,
         senha: `123456` */
    })

    const handleSubmit = e => {
        e.preventDefault();

        /* if (erros) {

        } else {
            
            console.log('submit', usuario);
        } */

    }

    return (
        <div className='container'>
            <form className='col' onSubmit={handleSubmit}>
                <h2>Cadastro de Produtos</h2>
                <hr />

                <MyInput4
                    label='Nome Completo'
                    //required={false}
                    name={'nomeCompleto'}
                    placeholder={'Insira o nome completo'}
                    object={usuario}
                    setInput={setUsuario}
                />

                <MyInput4
                    label='Email'
                    name={'email'}
                    type='email'
                    placeholder={'Insira o  email'}
                    object={usuario}
                    setInput={setUsuario}
                />

                <MyInput4
                    label='Senha'
                    name={'senha'}
                    type='password'
                    placeholder={'Insira a senha'}
                    object={usuario}
                    setInput={setUsuario}
                />

                <button className="btn btn-primary" type="submit">Enviar</button>
                <hr />
            </form>
        </div>
    )
}

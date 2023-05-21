import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'

export const ApiForm = () => {

    const [cep, setCep] = useState('')
    const [endereco, setEndereco] = useState('')
    const [estados, setEstados] = useState([])
    const [cidades, setCidades] = useState([])
    const complementoRef = useRef('')


    const formatarCEP = (str) => {
        console.log(str)
        const re = /^([\d]{2})([\d]{3})([\d]{3})|^[\d]{2}.[\d]{3}-[\d]{3}/

        if (re.test(str)) {
            return str.replace(re, "$1.$2-$3");
        }/* else{
            alert("CEP inválido!");
        } */

        return "";
    }

    const getInfoCep = (e) => {
        console.log(e.target.value, cep, e.target.id)
        axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            .then(function (response) {
                // aqui acessamos o corpo da resposta:
                console.log(response.data);

                //getCidades(response.data.uf)

                setEndereco({
                    ...endereco,
                    logradouro: response.data.logradouro,
                    bairro: response.data.bairro,
                    localidade: response.data.localidade,
                    estado: response.data.uf,
                })

                complementoRef.current.focus()
            })
            .catch(function (error) {
                // aqui temos acesso ao erro, quando alguma coisa inesperada acontece:
                console.log(error);
            })
    }

    const getEstados = () => {
        axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`)
            .then(function (response) {
                // aqui acessamos o corpo da resposta:
                console.log(response.data);

                let arrayEstados = response.data.map((estado, index) => <option key={index} value={estado.sigla}>{estado.nome}</option>)
                setEstados(arrayEstados)
            })
            .catch(function (error) {
                // aqui temos acesso ao erro, quando alguma coisa inesperada acontece:
                console.log(error);
            })
    }

    const getCidades = uf => {
        axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/distritos`)
            .then(function (response) {
                // aqui acessamos o corpo da resposta:
                console.log(response.data);

                let arrayCidades = response.data.map((cidade, index) => <option key={index} value={cidade.nome}>{cidade.nome}</option>)
                setEstados(arrayCidades)
            })
            .catch(function (error) {
                // aqui temos acesso ao erro, quando alguma coisa inesperada acontece:
                console.log(error);
            })
    }

    useEffect(() => {
        getEstados()
    }, [])

    return (
        <div className="container">
            <h1 className="mt-4">Buscar CEP</h1>
            <hr />
            <form className="row g-3">
                <div className="col-md-2">
                    <label htmlFor="cep" className="form-label">CEP</label>
                    <input
                        type="email"
                        className="form-control"
                        id="cep"
                        value={cep}
                        maxLength={8}
                        //onChange={e => setCep(formatarCEP(e.target.value))}
                        onBlur={getInfoCep}
                        onChange={e => setCep(e.target.value)}
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="logradouro" className="form-label">Endereco</label>
                    <input type="text" className="form-control" id="logradouro"
                        value={endereco.logradouro || ''} />
                </div>
                <div className="col-12">
                    <label htmlFor="complemento" className="form-label">Complemento</label>
                    <input ref={complementoRef} type="text" className="form-control" id="complemento" placeholder="complemento"
                        value={endereco.complemento || ''} />
                </div>
                <div className="col-2">
                    <label htmlFor="bairro" className="form-label">Bairro</label>
                    <input type="text" className="form-control" id="bairro" placeholder="Bairro"
                        value={endereco.bairro || ''} />
                </div>
                {/* <div className="col-md-6">
                    <label htmlFor="localidade" className="form-label">Localidade</label>
                    <input type="text" className="form-control" id="localidade"
                        value={endereco.localidade || ''} />
                </div> */}
                <div className="col-md-4">
                    <label htmlFor="estado" className="form-label">Estado</label>
                    <select id="estado" className="form-select" value={endereco.estado || ''}>
                        <option defaultValue>Escolha...</option>
                        {estados}
                    </select>
                </div>

                <div className="col-md-4">
                    <label htmlFor="cidade" className="form-label">Cidade</label>
                    <select id="cidade" className="form-select" value={endereco.cidade || ''}>
                        <option defaultValue>Escolha...</option>
                        {cidades}
                    </select>
                </div>

                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </div>
            </form>
        </div>
    )
}

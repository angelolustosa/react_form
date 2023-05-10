import React from 'react'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/produtos">Produto</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/cadastro">Cadastro</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/vendas">Vendas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/relatorios">Relatórios</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

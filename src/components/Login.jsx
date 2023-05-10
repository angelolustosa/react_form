import React, { useState } from 'react'
import './Login.css'
import { redirect, useNavigate } from 'react-router-dom'

export const Login = () => {

    const [user, setUser] = useState({})
    const excludedRoutes = ['/login', '/sign-up']

    const login = () => {
        if (user.senha === 'adm' && email === 'admin@admin') {
            redirect('/')
        }
    }

    const handleLogin = () => setUser({ id: '1', name: 'robin' });
    const handleLogout = () => setUser(null);

    return (
        <div id='login'>
            <main className="form-signin w-100 m-auto">
                <form onSubmit={login}>
                    <img className="mb-4" src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                    <div className="form-floating">
                        <input value={user.email || ''} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input value={user.senha || ''} type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Password</label>
                    </div>

                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" />
                            Remember me</label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-muted">© 2017–2022</p>
                </form>
            </main>
        </div>
    )
}

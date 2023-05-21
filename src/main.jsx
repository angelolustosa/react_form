import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import { Produtos } from './pages/Produtos.jsx';
import ErrorPage from './pages/ErroPage.jsx';
import { NavBar } from './components/NavBar.jsx';
import { Relatorio } from './pages/Relatorio.jsx';
import { Venda } from './pages/Venda.jsx';
import { Root } from './pages/Root.jsx';
import { ProdutoForm } from './produto/ProdutoForm.jsx';
import { Footer } from './components/Footer.jsx';
import { Login } from './components/Login.jsx';
import { UsuarioForm } from './produto/UsuarioForm.jsx';
import { ApiCep } from './produto/ApiCep.jsx';
//import './index.css'



const router = createBrowserRouter([
  {
    path: "/",
    /* element: <Login /> */
    element: <UsuarioForm />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/produtos",
    element: <ProdutoForm />,
    errorElement: <ErrorPage />,
  },
  /*  {
     path: "/",
     element: <App />,
   },
   {
     path: "/produtos",
     element: <Produtos />,
   },
   {
     path: "/relatorios",
     element: <Relatorio />,
   },
   {
     path: "/vendas",
     element: <Venda />,
     errorElement: <ErrorPage />,
   } */
]);


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     {/* <NavBar />
//     <RouterProvider router={router} />
//     <Footer /> */}
//     <ApiCep />
//   </React.StrictMode>,
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApiCep />,
)

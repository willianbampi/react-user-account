import './Home.css'
import React from 'react'

import Main from '../template/Main'

export default props => {
    return <Main icon="home" title="Início" description="Cadastro de Usuário" >
                <div className="display-4">Bem Vindo!</div>
                <hr></hr>
                <p className="mb-0">Sistema para exemplificar a construção de um cadastro de usuários utilizando o React.</p>
            </Main>
}
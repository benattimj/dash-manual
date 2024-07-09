import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importando FontAwesome
import './Sidebar.css'; // Certifique-se de criar e ajustar o arquivo CSS

const Sidebar = () => {
    return (
        <div className="area" id="main-content">
            {/* Conteúdo inicial aqui */}
            <h1>Welcome to Life <h1 className="display-4"></h1></h1>
            <p>Escolha uma opção no menu para começar.</p>

            <nav className="main-menu">
                <ul>
                    <li id="home">
                        <a href="#">
                            <i className="fa fa-home fa-2x"></i>
                            <span className="nav-text">Inicio</span>
                        </a>
                    </li>
                    <li id="global-content">
                        <a href="#">
                            <i className="fa fa-globe fa-2x"></i>
                            <span className="nav-text">Conteudo Global</span>
                        </a>
                    </li>
                    <li id="chat-groups">
                        <a href="#">
                            <i className="fa fa-comments fa-2x"></i>
                            <span className="nav-text">Grupo de Chats</span>
                        </a>
                    </li>
                    <li id="photo-album">
                        <a href="#">
                            <i className="fa fa-camera-retro fa-2x"></i>
                            <span className="nav-text">Album de fotos</span>
                        </a>
                    </li>
                    <li id="tutorials-books">
                        <a href="#">
                            <i className="fa fa-film fa-2x"></i>
                            <span className="nav-text">Tutoriais e Livros</span>
                        </a>
                    </li>
                    <li id="assignments">
                        <a href="#">
                            <i className="fa fa-book fa-2x"></i>
                            <span className="nav-text">Trabalhos</span>
                        </a>
                    </li>
                    <li id="management">
                        <a href="#">
                            <i className="fa fa-cogs fa-2x"></i>
                            <span className="nav-text">Gerenciamento</span>
                        </a>
                    </li>
                    <li id="locations">
                        <a href="#">
                            <i className="fa fa-map-marker fa-2x"></i>
                            <span className="nav-text">Localizaçõexgit s</span>
                        </a>
                    </li>
                    <li id="documentation">
                        <a href="#">
                            <i className="fa fa-info fa-2x"></i>
                            <span className="nav-text">Documentação</span>
                        </a>
                    </li>
                </ul>
                <ul className="logout">
                    <li>
                        <a href="Login/login.html">
                            <i className="fa fa-power-off fa-2x"></i>
                            <span className="nav-text">Logout</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
import React, { useState } from 'react'
import Sidebar from '../../Components/Sidebar'
import Menu from '../../Components/Menu'
import DescargarApp from '../../Components/DescargarApp'
import Chat from '../../Components/Chat'

export default function Home({ darkMode, onToggleDarkMode }) {
    const [chatAbierto, setChatAbierto] = useState(false);
    const [vistaActiva, setVistaActiva] = useState("menu");

    const abrirChat = () => {
        setChatAbierto(true);
        setVistaActiva("chat");
    };

    const volverAlMenu = () => {
        setVistaActiva("menu");
    };

    return (
        <div className="home-container">
            <Sidebar />
            <Menu
                onChatClick={abrirChat}
                darkMode={darkMode}
                onToggleDarkMode={onToggleDarkMode}
                className={vistaActiva === "menu" ? "" : "menu-oculto"}
            />
            <div className={`home-main-content ${vistaActiva === "chat" ? "" : "main-oculto"}`}>
                {chatAbierto
                    ? <Chat onVolver={volverAlMenu} />
                    : <DescargarApp />
                }
            </div>
        </div>
    );
}
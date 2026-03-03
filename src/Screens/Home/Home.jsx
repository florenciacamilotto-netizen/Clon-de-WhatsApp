import React, { useState } from 'react'
import Sidebar from '../../Components/Sidebar'
import Menu from '../../Components/Menu'
import DescargarApp from '../../Components/DescargarApp'
import Chat from '../../Components/Chat'

export default function Home({ darkMode, onToggleDarkMode }) {

    // Estado para saber si hay un chat abierto
    const [chatAbierto, setChatAbierto] = useState(false);
    const [vistaActiva, setVistaActiva] = useState("menu");

    // Estado para guardar el objeto completo del contacto seleccionado
    const [contactoActivo, setContactoActivo] = useState(null);

    // Abrir chat con el contacto recibido desde Menu
    const abrirChat = (contacto) => {
        setContactoActivo(contacto);
        setChatAbierto(true);
        setVistaActiva("chat");
    };

    // Volver al menú principal (útil para vista móvil)
    const volverAlMenu = () => {
        setVistaActiva("menu");
        setChatAbierto(false);
        setContactoActivo(null);
    };

    return (
        <div className={`home-container ${darkMode ? 'dark-mode' : ''}`}>
            <Sidebar />

            {/* Menu recibe la función abrirChat que actualiza el contactoActivo */}
            <Menu
                onChatClick={abrirChat} 
                darkMode={darkMode}
                onToggleDarkMode={onToggleDarkMode}
                className={vistaActiva === "menu" ? "" : "menu-oculto"}
            />

            <div className={`home-main-content ${vistaActiva === "chat" ? "" : "main-oculto"}`}>
                {chatAbierto && contactoActivo ? (
                    /* IMPORTANTE: Pasamos contactoActivo a la prop 'chat' 
                       para que coincida con el componente Chat que armamos.
                    */
                    <Chat 
                        onVolver={volverAlMenu} 
                        chat={contactoActivo} 
                    />
                ) : (
                    <DescargarApp />
                )}
            </div>
        </div>
    );
}
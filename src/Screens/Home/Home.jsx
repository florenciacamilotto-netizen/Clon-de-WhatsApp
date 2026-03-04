import React, { useState, useEffect } from 'react'
import Sidebar from '../../Components/Sidebar'
import Menu from '../../Components/Menu'
import DescargarApp from '../../Components/DescargarApp'
import Chat from '../../Components/Chat'

export default function Home({ darkMode, onToggleDarkMode }) {

    const [chatAbierto, setChatAbierto] = useState(false);
    const [vistaActiva, setVistaActiva] = useState("menu");
    const [contactoActivo, setContactoActivo] = useState(null);
    const [anchoVentana, setAnchoVentana] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setAnchoVentana(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const esMobile = anchoVentana < 600;
    const esTabletChico = anchoVentana >= 600 && anchoVentana < 880;
    const esTabletGrande = anchoVentana >= 880 && anchoVentana < 1200;
    const esDesktop = anchoVentana >= 1200;

    const abrirChat = (contacto) => {
        setContactoActivo(contacto);
        setChatAbierto(true);
        setVistaActiva("chat");
    };

    const volverAlMenu = () => {
        setVistaActiva("menu");
        setChatAbierto(false);
        setContactoActivo(null);
    };

    // En mobile y tablet chico, el menu se oculta cuando hay chat abierto
    const menuOculto = (esMobile || esTabletChico) && vistaActiva === "chat";
    // El contenido principal se oculta en mobile/tablet chico cuando no hay chat
    const mainOculto = (esMobile || esTabletChico) && vistaActiva === "menu";
    // El sidebar se oculta en mobile
    const sidebarOculto = esMobile;

    return (
        <div className={`home-container ${darkMode ? 'dark-mode' : ''}`}>

            {!sidebarOculto && <Sidebar />}

            <Menu
                onChatClick={abrirChat}
                darkMode={darkMode}
                onToggleDarkMode={onToggleDarkMode}
                esOculto={menuOculto}
            />

            <div className={`home-main-content ${mainOculto ? 'main-oculto' : ''}`}>
                {chatAbierto && contactoActivo ? (
                    <Chat
                        onVolver={volverAlMenu}
                        chat={contactoActivo}
                        esTablet={esTabletGrande || esTabletChico}
                    />
                ) : (
                    <DescargarApp />
                )}
            </div>

        </div>
    );
}
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Loading() {
    const navigate = useNavigate();

    useEffect(() => {
        // Simulamos el tiempo de carga (3 segundos)
        const timer = setTimeout(() => {
            navigate('/home');
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="loading-container">
            <div className="loading-first_section">
                <div className="logo-wrapper">
                    <img src="/whatsapp-logo.jpg" alt="Logo de WhatsApp" />
                </div>
                <div className="loading-text">
                    <h3 className="loading-title">WhatsApp</h3>
                    <br />
                    <h3 className="loading-chats">Cargando mensajes...</h3>
                </div>
                <div className="loading-line">
                    {/* Aquí puedes agregar un div interno con CSS para la animación de la barra */}
                    <div className="loading-progress-bar"></div>
                </div>
                <p>Cifrado de extremo a extremo</p>
            </div>
            <div className="loading-second_section">
                <button className="btn-log_out" onClick={() => navigate('/')}>
                    Cerrar sesión
                </button>
            </div>
        </div>
    )
}

export default Loading
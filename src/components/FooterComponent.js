import React, { useState, useEffect } from 'react';

export const FooterComponent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const windowHeight = window.innerHeight;

            // Mostrar el footer cuando el usuario haya hecho scroll hacia abajo
            setIsVisible(scrollTop > windowHeight * 0.1);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <footer className={`footer ${isVisible ? 'visible' : ''}`}>
            <div className='footer-content'>
                <br></br>
                <h2 className="texto">Contacto</h2>
                <p className="texto"><strong>Teléfono:</strong> +57 3188901261</p>
                <p className="texto"><strong>Email:</strong> pulgaashelby@gmail.com</p>
                <p className="texto"><strong>Ciudad:</strong> Cali, Valle del cauca</p>
            </div>
        </footer>
    );
}

export default FooterComponent;
import React from 'react';
import styles from './Tarjeta.module.css';

interface TarjetaProps {
    nombre: string;
    apellido: string;
    ocupacion: string;
    imagenURL: string;
}

const Tarjeta: React.FC<TarjetaProps> = ({ nombre, apellido, ocupacion, imagenURL }) => {
    return (
        <div className={styles.tarjeta}>
            <img src={imagenURL} alt={`${nombre} ${apellido}`} className={styles.imagen} />
            <h2>{nombre} {apellido}</h2>
            <p>{ocupacion}</p>
        </div>
    );
}

export default Tarjeta;
import React from 'react';
import Tarjeta from '../Tarjeta/Tarjeta';
import styles from './ListaDeTarjetas.module.css';

interface Persona {
    nombre: string;
    apellido: string;
    ocupacion: string;
    imagenURL: string;
}

interface ListaDeTarjetasProps {
    personas: Persona[];
}

const ListaDeTarjetas: React.FC<ListaDeTarjetasProps> = ({ personas }) => {
    return (
        <div className={styles.listaDeTarjetas}>
            {personas.map((persona) => (
                <Tarjeta
                    nombre={persona.nombre}
                    apellido={persona.apellido}
                    ocupacion={persona.ocupacion}
                    imagenURL={persona.imagenURL}
                />
            ))}
        </div>
    );
};

export default ListaDeTarjetas;
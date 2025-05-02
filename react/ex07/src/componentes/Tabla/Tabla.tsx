import React from 'react';
import Fila from '../Fila/Fila';
import styles from './Tabla.module.css';

interface TablaProps {
    columnas: string[];
    filas: string[][];
}

const Tabla: React.FC<TablaProps> = ({ columnas, filas }) => {
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    {columnas.map((columna) => (
                        <th>{columna}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {filas.map((fila) => (
                    <Fila datos={fila} />
                ))}
            </tbody>
        </table>
    )
}

export default Tabla;
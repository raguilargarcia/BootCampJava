import React from 'react';

interface FilaProps {
    datos: string[];
}

const Fila: React.FC<FilaProps> = ({ datos }) => {
    return (
        <tr>
            {datos.map((dato) => (
                <td>{dato}</td>
            ))}
        </tr>
    );
};

export default Fila;
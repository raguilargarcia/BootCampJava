import React from 'react';

interface ListaProps {
    productos: string[];
}

const Lista: React.FC<ListaProps> = ({ productos }) => {

    return (
        productos.map((producto) =>
            <li>{producto}</li>
        )
        )
}

export default Lista;
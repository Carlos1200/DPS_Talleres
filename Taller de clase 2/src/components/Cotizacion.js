import React from 'react';
import styled from '@emotion/styled';

const ResultadoDiv = styled.div`
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
`;

const Info = styled.p`
    font-size: 18px;
    span {
        font-weight:bold;
    }
`;
const Precio = styled.p`
    font-size: 30px;

    span {
        font-weight:bold;
    }
`

const Cotizacion = ({resultado,cantidad}) => {
    if(Object.keys(resultado).length === 0) return null;

    const valor=Number(resultado.PRICE.replace('$ ','').replace(',',''));
    return ( 
        <ResultadoDiv>
            <Precio>Cantidad en cripto: <span>{cantidad/valor} {resultado.FROMSYMBOL}</span> </Precio>
            <Info>El precio es: <span>{resultado.PRICE}</span></Info>
            <Info>Precio más alto del día: <span>{resultado.HIGHDAY}</span> </Info>
            <Info>Precio más bajo del día: <span>{resultado.LOWDAY}</span> </Info>
            <Info>Variación últimas 24 horas: <span>{resultado.CHANGEPCT24HOUR}</span> </Info>
            <Info>Última Actualización: <span>{resultado.LASTUPDATE}</span> </Info>
        </ResultadoDiv>
     );
}
 
export default Cotizacion;
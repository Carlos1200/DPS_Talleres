import React from 'react'
import styled from "@emotion/styled";

const Label = styled.label`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`;

const Select = styled.input`
  width: 100%;
  display: block;
  padding: 1rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
`;

const Input = ({valor, setValor}) => {
    const handleChange=(e)=>{
        if(!isNaN(e.target.value)){
            setValor(e.target.value)
        }
    }

    return (
        <div>
            <Label>Digita la cantidad</Label>
            <Select onChange={e=>handleChange(e)} value={valor} placeholder="Ingresa la cantidad"/>
        </div>
    )
}

export default Input

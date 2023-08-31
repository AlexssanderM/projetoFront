import React from 'react'
import styled from 'styled-components';

const ItemPrincipal = styled.div`
  border-radius: 4px;
  background-color: #fff;
  height:120px;
  color:#29303b;
  margin-bottom: 10px;
  margin-right: 10px;
  padding: 10px;
`;

const Thumbnail = styled.img`
  width: 20%;
  height: 100%; 
  border: 0;
  vertical-align: middle;
  float: left;
  margin-right: 10px;
`

const Title = styled.div`
  font-weight: 700;
  margin-bottom: 5px;
`;

const Price = styled.div`
  margin-bottom: 5px;
`;

const ButtonA = styled.div`
  display: inline-block;
  margin-bottom: -60px;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  border: 1px solid transparent;
  font-size: 14px;
  padding: 8px 15px;
  color: #fff;
  background-color: #1414d2;
  border-color: #6d6dec;
  border-radius: 4px;

`;

const ButtonB = styled.a`
  display: inline-block;
  margin-bottom: -60px;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  border: 1px solid transparent;
  font-size: 14px;
  padding: 8px 15px;
  color: #fff;
  background-color: #1414d2;
  border-color: #6d6dec;
  border-radius: 4px;

`;


const ItemLink = styled.a`
  text-decoration: none;
`

export default function Contradmin({cars}) {
    return(
    <>
        <ItemLink href={cars.url} target="_blank">
            <ItemPrincipal>
                <Thumbnail src={cars.img}/>
                <Title>{cars.title}</Title>
                <Price>{cars.price}</Price>
                <ButtonA>Modificar</ButtonA>
                <ButtonB>Deletar</ButtonB>
            </ItemPrincipal>
        </ItemLink>
    </>
    )
}
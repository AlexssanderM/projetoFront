import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ListAdminC from '../../components/admin'
import api from '../../services/api';
import styles from './styles.mod.css';

const Container = styled.div`

  max-width: 960px;

  margin: 30px auto;

`;

const ListContainer = styled.div`

  display: flex;

  flex-direction: column;

  flex-wrap: wrap;

  justify-content: center;

  background-color: gray;

  padding: 10px;

`;


function ListAdminP() {

  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {

    const url = '/cars';  

    const params = {};

    if (search) {

      params.title_like = search



      api.get('/cars?_embed=cars', { params })

        .then((response) => {

          // console.log(response)

          setCars(response.data)

        })

    } else {

      api.get(url) // all

        .then((response) => {

          // console.log(response)

          setCars(response.data)

        })



    }

  }, [search])





  return (

    <Container>

      <h1>Carros em Estoque</h1>

      <input

        className={styles.listaSearchInput}

        type="search"

        placeholder='Buscar Carros - Digite aqui o Nome do Carro'

        value={search}

        onChange={(ev) => setSearch(ev.target.value)}

      />

      <ListContainer>

        {

          cars.map(cars => {

            return (<ListAdminC

              key={cars.id}

              cars={cars}


            />)

          })

        }

        <button>
        Cadastrar
        </button>

      </ListContainer>

    </Container>

  )

}



export default ListAdminP;
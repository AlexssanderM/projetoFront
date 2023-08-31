import React, {useState} from 'react';
import api from '../../services/api'
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

 

const initialValue = {

    title: '',
    img: '',
    price: 0,
    url:'',

};

function Cadastrar(){

    const [values, setValues] = useState (initialValue);

 

    const navigate = useNavigate();

 

function onSubmit(ev){

   

    ev.preventDefault();

 

    const url = '/cars';

 

    api.post(url, values)

    .then( () => {

        navigate('/');

    })

 

}

 

function onChange(ev){

    const {name, value} = ev.target

    console.log({name, value});

 

    setValues({...values,[name]:value})

    console.log(values);

}

 

 

    return(

        <>

        <h1>Cadastrar</h1>

        <form onSubmit={onSubmit}>

            <div className={styles.carsFormGroup}>

                <label htmlFor="title">Nome</label>

                <input type="text" id="title" name='title' onChange={onChange}/>

            </div>

            <div className={styles.carsFormGroup}>

                <label htmlFor="url">Url do Carro</label>

                <input type="text" id="url" name='url' onChange={onChange}/>

            </div>

            <div className={styles.carsFormGroup}>

                <label htmlFor="img">url/image</label>

                <input type="text" id="img" name='img' onChange={onChange}/>

            </div>

            <div className={styles.carsFormGroup}>

                <label htmlFor="price">Preço</label>

                <input type="text" id="price" name='price' onChange={onChange}/>

                <button type="submit">Salvar</button>

            </div>

        </form>

        </>

    )

}

 

export default Cadastrar;
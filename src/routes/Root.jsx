import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';


import ListaCars from '../pages/ListaCars';
import Cadastrar from '../pages/Cadastrar';
import NotFound from '../pages/NotFound';
import ListAdminC from '../pages/Listadmin';
 

const Root = () => {

    return(

        <Router>
            <Routes>
                <Route path="administrar" element={ <ListAdminC/>}/>
                <Route path="/" element={ <ListaCars />} />
                <Route path="/administrar/cadastrar" element={ <Cadastrar />} />
                <Route path="*" element={ <NotFound />} />
            </Routes>
        </Router>

    );

}

 

export default Root;
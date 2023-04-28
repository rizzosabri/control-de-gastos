import React, { useEffect, useState } from 'react';
import { firebaseLogin } from '../utils/UtilsDB';
import { useHistory, Route, BrowserRouter, useNavigate } from 'react-router-dom';


const Login = () => {
    const history = useHistory();

    return (
        <div >
            <label >Usuario:</label><br />
            <input id="usuario" /> <br />
            <label >contraseña:</label><br />
            <input id="contraseña" type="password" /> <br />
            <button onClick={
                async () => {
                    var usuario = document.getElementById('usuario').value;
                    var contraseña = document.getElementById('contraseña').value;
                    var resultadoLogin = await firebaseLogin(usuario, contraseña);
                    if (resultadoLogin) {
                        history.push({
                            pathname: '/inicio',
                        });
                    }
                    else {
                        console.log("false")
                    }

                }
            }>Login</button>
        </div>
    );
}

export default Login;


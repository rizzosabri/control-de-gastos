import React, { useEffect, useState } from 'react';
import { firebaseLogin } from '../utils/UtilsDB';


const Login = () => {

    return (
        <>
            <div >
                <label >Usuario:</label><br />
                <input id="usuario" /> <br />
                <label >contraseña:</label><br />
                <input id="contraseña" type="password" /> <br />
                <button onClick={
                    () => {
                        var usuario = document.getElementById('usuario').value;
                        var contraseña = document.getElementById('contraseña').value;
                        firebaseLogin(usuario, contraseña);

                    }
                }>Login</button>
            </div>
        </>
    );
}

export default Login;


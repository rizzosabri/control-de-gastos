import React, { useEffect, useState } from 'react';


const FormMovimiento = () => {

    const [total, setTotal] = useState(0);

    return (
        <>
            <form id="añadir-nuevo-movimiento" >
                <p>Concepto</p>
                <input id="nombre-del-movimiento" type="text" placeholder="Añade Concepto..." />
                <p>Cantidad</p>
                <p id="instrucciones"> Introducir gastos con el signo negativo</p>
                <input id="monto-del-movimiento" type="number" step="any" placeholder="Ingrese la cantidad..." />
                <button
                    type="submit"
                    id="createMovimiento"
                    onClick={
                        async () => {
                            const inputMonto = parseInt(document.getElementById('monto-del-movimiento').value)
                            console.log(inputMonto)
                            setTotal(total + inputMonto)
                        }}>Añadir Movimiento</button>
            </form>
            <div>
                TOTAL: {total}
            </div>

        </>
    );
}

export default FormMovimiento;


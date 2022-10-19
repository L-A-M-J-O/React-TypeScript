import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function Main() {
    const [state, setState] = useState<string>('');
    const navigate = useNavigate();
    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('llego al submit')
    }
    const handleClick = () => {
        navigate('/fomr')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type='text' name='state' onChange={(e) => {
                setState(e.target.value);
            }} />
            <button type='submit' onClick={handleClick} >Crear</button>
            <h2>{state}</h2>
        </form>
    )
}

export default Main
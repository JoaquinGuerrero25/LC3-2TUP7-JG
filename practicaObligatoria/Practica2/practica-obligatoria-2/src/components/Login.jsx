import { useState } from "react"

export const Login = () => {
    const [username, setUsername] = useState('');

    const handleInputChange = (e) => {
        const value = e.target.value;
        setUsername(value);

        if (/o/i.test(value)) {
            alert('Por favor, ¡Nombres de usuario sin la letra o!');
        }
    };

    const handleRegister = () => {
        if (username === '' || /o/i.test(username)) {
            alert('Usuario inválido para registrarse');
        } else {
            alert('¡Usuario registrado correctamente!');
        }
    };

    return (
        <div>
            <h2>Registro</h2>
            <input
                type="text"
                value={username}
                onChange={handleInputChange}
                placeholder="Nombre de usuario"
            />
            <button onClick={handleRegister}>Registrarse</button>
            <p>Valor ingresado: {username}</p>
        </div>
    )
}
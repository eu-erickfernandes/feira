const Input = ({ label, name, type, value, onChange }) => {
    const handleChange = (evento) => {
        onChange(evento.target.value)
    }

    return(
        <div>
            <label htmlFor={ `campo-${name}` }>{ label }</label>

            <input 
                id={ `campo-${name}` }
                name={ name }
                type={ type }
                value={ value }
                onChange={ handleChange }
                required 
            />
        </div>
    )
}

export default Input
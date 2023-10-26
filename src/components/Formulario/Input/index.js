import styles from './Input.module.css'

const Input = ({ label, name, type, value, placeholder, onChange }) => {
    const handleChange = (evento) => {
        onChange(evento.target.value)
    }

    return(
        <div className={ styles.grupo }>
            <label htmlFor={ `campo-${name}` }>{ label }</label>

            <input
                className={ styles.input } 
                id={ `campo-${name}` }
                name={ name }
                type={ type }
                value={ value }
                onChange={ handleChange }
                placeholder={ placeholder }
                required 
            />
        </div>
    )
}

export default Input
import styles from './Input.module.css'

const Input = ({ label, name, value, placeholder, onChange, mascara }) => {
    const handleChange = (evento) => {
        onChange(evento.target.value)
    }

    return(
        <div className={ styles.grupo }>
            <label htmlFor={ `campo-${name}` }>{ label }</label>

            <input
                className={ styles.input } 
                id={ `campo-${name}` }
                inputMode={ mascara && 'decimal' }
                name={ name }
                onChange={ handleChange }
                placeholder={ placeholder }
                required 
                type='text'
                value={ value }
            />
        </div>
    )
}

export default Input
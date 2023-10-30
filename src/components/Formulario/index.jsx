import styles from './Formulario.module.css'

const Formulario = ({ children, onSubmit }) => {
    const handleSubmit = (evento) => {
        evento.preventDefault()

        onSubmit()
    }

    return(
        <form 
            className={ styles.formulario }
            onSubmit={ handleSubmit }
        >
            { children }
        </form>
    )
}

export default Formulario
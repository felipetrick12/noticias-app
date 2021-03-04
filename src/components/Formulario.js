import React from 'react'
import styles from '../styles/Formulario.module.css'
import { useSelect } from '../hooks/useSelect'


export const Formulario = ({guardarCategoria,guardarPais}) => {

    const OPCIONES = [
        { value: 'general', label: 'General'},
        { value: 'business', label: 'Negocios'},
        { value: 'entertainment', label: 'Entretenimiento'},
        { value: 'health', label: 'Salud'},
        { value: 'science', label: 'Ciencia'},
        { value: 'sports', label: 'Deportes'},
        { value: 'technology', label: 'Tecnología'},
    ]

    const OPCIONES2 = [
        { value: 'general', label: 'General'},
        { value: 'mx', label: 'Mexico'},
        { value: 'co', label: 'Colombia'},
        { value: 've', label: 'Venezuela'},
        { value: 'us', label: 'Estados Unidos'},
    ]

    const [ categoria, SelectNoticias ] = useSelect('general', OPCIONES);
    const [ pais, SelectPais ] = useSelect('general', OPCIONES2);

    const buscarNoticias = e => {
        e.preventDefault();

        guardarCategoria(categoria);
        guardarPais(pais);
    }

    return (
        <div className={`${styles.buscador} row`}>
        <div className="col s12 m8 offset-m2">
            <form
                 onSubmit={buscarNoticias}
            >
            <h2 className={styles.title}> Encuentre noticias por Pais y Categoria</h2>

                <h2 className={styles.heading}> Pais</h2>

                    <SelectPais />

                <h2 className={styles.heading}>Categoría</h2>

                <SelectNoticias />

                <div className="input-field col s12">
                    <input 
                        type="submit" 
                        className={`${styles['btn-block']}  btn-large amber darken-2`}
                        value="Buscar"
                    />
                </div>
            </form>
        </div>
    </div>
    )
}

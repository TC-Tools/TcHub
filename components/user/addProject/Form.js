import { useState } from 'react';
import styles from './styles/form.module.scss';

export default function FormProject() {
    const [isSubmit, setIsSubmit] = useState(false);
    
    function submit(e) {
        e.preventDefault();
        setIsSubmit(true);
        console.log('submit');
    }

    return (
        <div className={styles.formContainer}>
            <form className={styles.form} onSubmit={submit}>
                <h1>Agregar proyecto</h1>
                <div className={styles.basic__info}>
                    <div className={styles.form__name}>
                        <label htmlFor="input_name">Nombre</label>
                        <input
                            required
                            onInvalid={(e) => e.target.setCustomValidity('<p>Este campo es requerido</p>')}
                            type="text" 
                            id='input_name' 
                            placeholder='Nombre del proyecto' 
                            className={styles.form__nameInput}
                        />
                    </div>
                    <div className={styles.form__image}>
                        <label htmlFor="input_file">Imagen</label>
                        <div className={styles.form__imageContainerInput}>
                            Click para agregar
                            <input type="file" id='input_file' className={styles.form__imageContainerInput__input}/>
                        </div>
                    </div>
                </div>
                <label className={styles.form__description}>
                    Descripción
                    <textarea placeholder='form__descriptionText...' cols="30" rows="10" className={styles.form__descriptionText}>
                    </textarea>
                </label>
                <button type="submit" className={styles.submit__project}>
                    {
                        isSubmit ? 'Enviando' : <>&gt;</>
                    }
                </button>
            </form>
        </div>
    )
}
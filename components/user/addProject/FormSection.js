import styles from './styles/formSection.module.scss';

import FormProject from './Form';

export default function FormSection() {
    return (
        <section className={styles.sectionForm}>
            <FormProject />
        </section>
    )
}
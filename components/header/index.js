import styles from './styles.module.scss';

export default function Header() {
    return <>
        <header className={styles.headerSite}>
            <div className="left-header">
                <img src="/images/nave.png" alt="Logo de tchub" />
            </div>
            <div className="right-header">
                <img src="/images/menu.png" alt="Logo de tchub" />
            </div>
        </header>
    </>
}
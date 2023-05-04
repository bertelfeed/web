import styles from "./AsteroidContent.module.css"
export const AsteroidContent = () =>{
    return (
        <div>
            <div className={styles.contentName}>
                Первый
            </div>
            <div className={styles.contentWrapper}>
                <div className={styles.contentDate}>
                    Дата: 22 апреля 2023 года
                </div>
                <div className={styles.contentDistance}>
                    Расстояние: 100999 км
                </div>
                <div className={styles.contentSize}>
                    Размер: 100 м
                </div>
            </div>
        </div>
    )
}
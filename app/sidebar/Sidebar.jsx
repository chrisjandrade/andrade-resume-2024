
import styles from './Sidebar.module.scss';

export default function Sidebar() {
    return (
        <div className={styles.Sidebar}>
            <div className={styles.Header}>
                <h1>CHRISTOPHER ANDRADE</h1>
                <h2>
                    Principal Software Engineer<br />
                    <em>Web Development</em>
                </h2>
            </div>
        </div>
    )
}
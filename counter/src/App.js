import logo from './logo.svg';
import styles from './App.module.css';
import Counter from './Counter'

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.AppMain}>
      <div className={styles.App1}>
        <div className={styles.box1}><Counter name='product'/></div>
        <div className={styles.box2}><Counter name='product2'/></div>
      </div>
      <div className={styles.App2}>
        <div className={styles.box3}><Counter name='product3'/></div>
        <div className={styles.box4}><Counter name='product4'/></div>
      </div>
      </div>

    </div>
  );
}

export default App;

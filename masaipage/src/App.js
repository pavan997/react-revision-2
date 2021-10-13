import styles from './App.module.css';
import Performance from './performance';

function App() {
  return (
    <div className={styles.App}>

      <h1>Glide Program</h1>
      <h3>Living Allowance Program</h3>
      <p>For the entire duration of our Full-Time courses, we wil provide our top performing with a living allowance of 15000 per unit.</p>
      <br/>
      <p>We will closely monitor the performance of our students in Unit-1, and we will evaluate the basis of their - </p>

      <div className={styles.cont1}>

        <Performance image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-DfHpYeqiq9bsGeGsTr2gi-SH6R6B6925Hg&usqp=CAU' title='Disipline and attendance'></Performance>
        <Performance image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-DfHpYeqiq9bsGeGsTr2gi-SH6R6B6925Hg&usqp=CAU' title='Performance in assignments'></Performance>
        <Performance image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-DfHpYeqiq9bsGeGsTr2gi-SH6R6B6925Hg&usqp=CAU' title='Scores in Assignments'></Performance>
        <Performance image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-DfHpYeqiq9bsGeGsTr2gi-SH6R6B6925Hg&usqp=CAU' title='Team Work'></Performance>
        </div>

        <p>Based on the overall performances we will choose the top performing students who will be <br />eligible for the living alloance of ₹15000 per unit, which will be added to their ISA amount.<br />(At Masai 1 Unit equals 5 Weeks and 1 Full-TIme course has 6 Units)</p>
        <h3 className={styles.line}> KnowMore</h3>

        
    </div>
  );
}

export default App;

import React from 'react'
import styles from '../src/Counter.module.css'

function Counter(props) {
    const [counter,setCounter] = React.useState(0);
    const handleChange=(incr)=>
    {
        if(counter<=0 && incr==-1){
            setCounter(0);
        }else{
        setCounter(counter+incr)
        }
    }
    return (
        <div >
            <div>{props.name}</div>
            <div>price</div>
            <div className={styles.innercont1}>
                <div>Qty   :    </div>
                <div>
                    <button onClick={()=>handleChange(-1)}>-</button>
                    <button>{counter}</button>
                    <button onClick={()=>handleChange(1)}>+</button>
                </div>
            </div>
        </div>
    )
}

export default Counter

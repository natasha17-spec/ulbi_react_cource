import {useState} from "react";
import styles from './Counter.module.scss';

const Counter = () => {
    const [state, setState] = useState(0)


    function handleCountermeasure() {
        setState(state + 1)
    }

    return (
        <div className={styles.button_container}>
            <button onClick={handleCountermeasure}>+</button>
            <span>{state}</span>
        </div>
    );
};

export default Counter;
import { useState } from 'react'

function CounterButtons() {

    const [countA, setCountA] = useState(0)
    const [countB, setCountB] = useState(0)

    return <div>
        {countA} {countB}
        <button onClick={() => setCountA(countA + 1) }>A</button>
        <button onClick={() => setCountB(countB + 1) }>B</button>
    </div>
}

export default CounterButtons;

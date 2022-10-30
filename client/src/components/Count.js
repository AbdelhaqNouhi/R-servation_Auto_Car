import useState from 'react'

const Count = () => {
    const [ Count, setCount ] = useState(0)
    
    function increment () {
        setCount ( Count + 1)
    }

    function decrement () {
        setCount ( Count - 1)
    }

    return (
        <div>
            <button onClick={ decrement }>-</button>
            <span>{ Count }</span>
            <button onClick={ increment }>+</button>
        </div>
    )
}

export default Count
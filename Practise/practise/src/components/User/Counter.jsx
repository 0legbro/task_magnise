import React, {useState} from 'react';
import "./Counter.css"

const Counter = (props) => {
    const [likes, setLikes] = useState(0)
    const [value, setValue] = useState('Some text')

    console.log(props);

    function incremets() {
        setLikes(likes + 1)

    }

    function decrement() {
        setLikes(likes - 1)
    }

    return (
        <div>
            <div  >
                <div>
                    <h1>{props.post.title}</h1>
                </div>
                <div>
                    <h1>{props.post.id}-- {props.post.body}</h1>

                </div>
            </div>

        <div >
            <h1>{likes}</h1>
            <h1>{value}</h1>
            <input
                onChange={event => setValue(event.target.value)}
                type="text"
                value={value}
            />
            <button onClick={incremets}>increment</button>
            <button onClick={decrement}>increment</button>

        </div>
        </div>
    );
};

export default Counter;
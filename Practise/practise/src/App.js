import React, {Component} from 'react';
import UserComponent from "./components/User/UserComponent";
import {selectOptions} from "@testing-library/user-event/dist/select-options";
import Counter from "./components/User/Counter";


class App extends Component {
    users = [
        {name: 'Oleh', age: 21, userName: 'Honey'},
        {name: 'Misha', age: 22, userName: 'qwer'},
        {name: 'Nazar', age: 28, userName: 'ty'},
        {name: 'Vasya', age: 18, userName: 'theas'},
        {name: 'Iryna', age: 12, userName: 'swigy'},
        {name: 'Kateryna', age: 31, userName: 'Coollbok'},
        {name: 'Inna', age: 42, userName: 'Wolf'},
        {name: 'Olya', age: 15, userName: 'Bararbabar'}

    ]

    render() {
        return (
            <div>
                <Counter post={{id: 1  , title:"javascript", body:"description"}}/>

                <div>{

                    this.users.map((value, index) => {


                            <UserComponent item={value} key={index}/>


                        }
                    )

                }

                </div>
            </div>
        )
    }
}

export default App;

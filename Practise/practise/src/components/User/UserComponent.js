import React, {Component} from 'react';
import './User.css'

class UserComponent extends Component {
    render() {
        let {item, clsName}= this.props
        return (
            <div className={clsName}>{
                        <h3>
                            {item.name} - {item.age} - {item.userName}
                        </h3>
            }
            </div>
        );
    }
}

export default UserComponent;
import React, {Component} from 'react'
import Obs from './Obs'
import Descriptions from './Descriptions'

class Footer extends Component {
    render() {
        return (
            <div>
                <Obs/>
                <br/>
                <Descriptions/>
            </div>
        )
    }
}

export default Footer
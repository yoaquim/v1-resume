import React from 'react'
import Card from './Card'
import Message from './Message'

class Education extends React.Component {

    constructor() {
        super();
        this.state = {
            icon: 'graduation-cap'
        }
    }

    render() {
        return (
            <div className="tile is-vertical is-4 is-parent education">

                <Card icon={this.state.icon} title="Georgia Institute of Technology" classes="georgia-tech">
                    <h1 className="degree subtitle is-5"><strong>M.S. Computer Sciences</strong></h1>
                    <h1 className="date subtitle is-6">Aug 2017</h1>
                </Card>

                <Card icon={this.state.icon} title="University Of Puerto Rico at Mayagüez" classes="uprm">
                    <h1 className="degree subtitle is-5"><strong>B.S. Computer Engineering</strong></h1>
                    <h1 className="date subtitle is-6">Mar 2014</h1>
                </Card>

            </div>
        )
    }

}

export default Education;
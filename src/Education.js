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
                    <h1 className="degree subtitle is-5">M.S. Computer Science</h1>
                    <p className="sub-info subtitle is-6">Accepted</p>
                    <p className="date subtitle is-6">Aug 2017 - May 2019 (Expected)</p>
                </Card>

                <Card icon={this.state.icon} title="University Of Puerto Rico at Mayagüez" classes="uprm">
                    <h1 className="degree subtitle is-5">B.S. Computer Engineering</h1>
                    <p className="sub-info subtitle is-6">Specialization: Computer Science, Microprocessors</p>
                    <p className="date subtitle is-6">Mar 2014</p>
                </Card>

            </div>
        )
    }

}

export default Education;
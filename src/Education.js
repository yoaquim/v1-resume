import React from 'react'
import Card from './Card'

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
                    <p className="education-description"><strong>Accepted</strong>: MS in Computer Science</p>
                    <p className="education-description"><strong>StartDate</strong>: August 2017</p>
                </Card>

                <Card icon={this.state.icon} title="University Of Puerto Rico at Mayagüez" classes="uprm">
                    <p className="education-description">May 2014</p>
                    <p className="education-description">B.S. Computer Engineering</p>
                </Card>

            </div>
        )
    }

}

export default Education;
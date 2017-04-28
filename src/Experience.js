import React from 'react'
import Card from './Card'

class Experience extends React.Component {

    constructor() {
        super();
        this.state = {
            icon: 'briefcase'
        }
    }

    render() {
        return (
            <div className="tile is-vertical is-4 is-parent education">

                <Card icon={this.state.icon} title="IntentMedia" classes="intent">
                    <p className="education-description">Work here now</p>
                </Card>

                <Card icon={this.state.icon} title="Hackerati" classes="hack">
                    <p className="education-description">Worked here before</p>
                </Card>

                <Card icon={this.state.icon} title="Optivon" classes="optivon">
                    <p className="education-description">Worked here long ago</p>
                </Card>

            </div>
        )
    }

}

export default Experience;
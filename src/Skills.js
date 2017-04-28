import React from 'react'
import Card from './Card'

class Skills extends React.Component {

    constructor() {
        super();
        this.state = {
            icon: 'code'
        }
    }

    render() {
        return (
            <div className="tile is-vertical is-4 is-parent skills">
                <Card icon={this.state.icon} title="Skills" classes="skills">
                    <div className="skill">This is a skill</div>
                    <div className="skill">This is a skill</div>
                    <div className="skill">This is a skill</div>
                    <div className="skill">This is a skill</div>
                    <div className="skill">This is a skill</div>
                    <div className="skill">This is a skill</div>
                </Card>
            </div>
        )
    }

}

export default Skills;
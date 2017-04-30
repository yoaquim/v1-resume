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
            <div className="tile is-vertical is-4 is-parent experience">

                <Card icon={this.state.icon} title="IntentMedia" classes="intent">
                    <div className="role subtitle">Software Engineer, People Manager</div>
                    <div className="subtitle is-6 date">Mar 2015 – Now</div>
                </Card>

                <Card icon={this.state.icon} title="Hackerati" classes="hack">
                    <div className="role subtitle">Software Engineer</div>
                    <div className="subtitle is-6 date">Jan 2015 – Sep 2015</div>
                </Card>

                <Card icon={this.state.icon} title="Optivon" classes="optivon">
                    <div className="role subtitle">Software Engineer</div>
                    <div className="subtitle is-6 date">Oct 2013 – Dec 2014</div>
                </Card>

            </div>
        )
    }

}

export default Experience;
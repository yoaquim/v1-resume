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
                    <p className="experience-description">Work here now</p>
                </Card>

                <Card icon={this.state.icon} title="Hackerati" classes="hack">
                    <h1 className="role subtitle is-5"><strong>Software Engineer</strong></h1>
                    <h1 className="subtitle is-6 date">Jan 2015 – Sep 2015</h1>
                    <p className="experience-description">
                        Worked as a consultant that would be brought on to clients to
                        either lead new projects, or solve challenging software impediments. Focused mostly on building
                        front-end solutions that could scale, and augmenting existing teams in order to meet hard
                        deadlines. Aside from client work, lead internal projects and ideation around building public
                        facing products.
                    </p>
                </Card>

                <Card icon={this.state.icon} title="Optivon" classes="optivon">
                    <h1 className="role subtitle is-5"><strong>Software Engineer</strong></h1>
                    <h1 className="subtitle is-6 date">Oct 2013 – Dec 2014</h1>
                    <p className="experience-description">
                        Part of a small team dedicated to product development, design,
                        implementation and every other aspect of a law-enforcement software suite, consisting of both a
                        mobile app (SentiGuard) and a website control-center. Built the Android app and the web app,
                        both back-end and front-end.
                    </p>
                </Card>

            </div>
        )
    }

}

export default Experience;
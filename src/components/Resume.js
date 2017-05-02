import React from 'react'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'
import ExperienceModal from './ExperienceModal';

class Resume extends React.Component {

    constructor() {
        super();
        this.state = {
            modalStatus: 'OFF'
        };

        this.updateModalStatus = this.updateModalStatus.bind(this);
    }

    updateModalStatus(status) {
        this.setState({
            modalStatus: status
        });
    }

    render() {
        return (
            <section className="resume">
                <div className="container">
                    <div className="tile is-ancestor">
                        <Education/>
                        <Experience updateModalStatus={this.updateModalStatus}/>
                        <ExperienceModal updateModalStatus={this.updateModalStatus} status={this.state.modalStatus}/>
                        <Skills/>
                    </div>
                </div>
            </section>
        )
    }
}

export default Resume;

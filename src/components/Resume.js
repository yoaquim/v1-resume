import React from 'react'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'
import ExperienceModal from './ExperienceModal';

let toggleFreezeBody = (status) => {
    if (status === 'OFF') {
        document.body.classList.remove('freeze');
    } else {
        document.body.classList.add('freeze');
    }
}

class Resume extends React.Component {

    constructor() {
        super();
        this.state = {
            modalStatus: 'OFF'
        };

        this.updateModalStatus = this.updateModalStatus.bind(this);
    }

    updateModalStatus(status) {
        toggleFreezeBody(status);
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

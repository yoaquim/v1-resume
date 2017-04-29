import React from 'react'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'

class Resume extends React.Component {
    render() {
        return (
            <section className="resume">
                <div className="container">
                    <div className="tile is-ancestor">
                        <Education/>
                        <Experience/>
                        <Skills/>
                    </div>
                </div>
            </section>
        )
    }
}

export default Resume;

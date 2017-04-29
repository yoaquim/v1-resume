import React from 'react'
import Card from './Card'
import Skill from './Skill'

class Skills extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="tile is-vertical is-4 is-parent skills">
                <Card icon="keyboard-o" title="Skills" classes="skills">
                    <div className="columns">

                        <div id="skills-1" className="column is-half">
                            <Skill icon="cubes" name="AWS"/>
                            <Skill icon="sitemap" name="Terraform"/>
                            <Skill icon="server" name="Docker"/>
                            <Skill icon="check-circle" name="Testing"/>
                            <Skill icon="linux" name="Linux"/>
                            <Skill icon="terminal" name="CLI"/>
                            <Skill icon="android" name="Android"/>
                            <Skill icon="coffee" name="Java"/>
                            <Skill icon="diamond" name="Ruby"/>
                        </div>

                        <div id="skills-2" className="column is-half">
                            <Skill icon="first-order" name="NodeJS"/>
                            <Skill icon="code" name="Javascript"/>
                            <Skill icon="css3" name="CSS"/>
                            <Skill icon="ge" name="React"/>
                            <Skill icon="cube" name="Webpack"/>
                            <Skill icon="database" name="PostgreSQL"/>
                            <Skill icon="database" name="MySQL"/>
                            <Skill icon="code-fork" name="Git"/>

                            <div className="skill spanish">
                                <span className="icon"><h1 className="title is-5"><strong>ñ</strong></h1></span>
                                <span className="title is-6 name"><strong>Español</strong></span>
                            </div>

                        </div>

                    </div>
                </Card>
            </div>
        )
    }

}

export default Skills;
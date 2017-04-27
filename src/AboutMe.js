import React from 'react'

class AboutMe extends React.Component {
    render() {
        return (
            <section className="about-me">
                <div className="container">
                    <div className="columns">
                        <div className="column is-4 is-offset-4 has-text-right">
                            <h1 className="title is-1">Yoaquim Cintrón</h1>
                            <p className="description subtitle is-6">
                                I’m a <strong>resourceful</strong> software engineer with a <strong>love</strong> for learning,
                                and a <strong>passion</strong> for doing it with amazing people.
                            </p>
                        </div>
                        <div className="column is-4">
                            <figure className="image is-128x128">
                                <img className="me" src="./assets/me.jpg" alt="Yoaquim"/>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default AboutMe;

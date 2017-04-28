import React from 'react'

class AboutMe extends React.Component {

    render() {
        return (
            <section className="section about-me">
                <div className="container">

                    <div className="columns me-image-row">
                        <div className="column is-4 is-offset-4 me-image">
                            <figure className="image is-centered is-128x128">
                                <img className="me" src="./assets/me.jpg" alt="Me"/>
                            </figure>
                        </div>
                    </div>

                    <div className="columns description-row">
                        <div className="column is-4 is-offset-4 description">
                            <h1 className="title is-1 has-text-centered">
                                Yoaquim Cintrón
                            </h1>

                            <p className="title is-5 description">
                                I’m a <strong>resourceful</strong> software engineer with a <strong>talent</strong> for
                                learning, and a <strong>passion</strong> for doing it with amazing <strong>people</strong>.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}

export default AboutMe;

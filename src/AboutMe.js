import React from 'react'

class AboutMe extends React.Component {

    render() {
        return (
            <section className="section about-me">
                <div className="container level">

                    <div className="level-left">

                        <div className="level-item">
                            <div className="me-image">
                                <figure className="image is-centered is-128x128">
                                    <img className="me" src="./assets/me.jpg" alt="Me"/>
                                </figure>
                            </div>

                            <div className="me-info">
                                <h1 className="title is-1">Yoaquim Cintrón</h1>
                                <p className="title is-6 description">
                                    I’m a <strong>resourceful</strong> software engineer with a <strong>talent</strong>
                                    for learning, and a <strong>passion</strong> for doing it with amazing <strong>people</strong>.
                                </p>
                            </div>

                        </div>
                    </div>


                    <div className="level-right">
                        <ul className="contact">
                            <li className="contact-item">
                                <a>
                                    <span className="icon"><i className="fa fa-phone"></i></span>
                                    <div className="contact-item is-inline-block">347-510-8940</div>
                                </a>
                            </li>
                            <li className="contact-item">
                                <a>
                                    <span className="icon"><i className="fa fa-envelope"></i></span>
                                    <div className="contact-item is-inline-block">yoaquim@outlook.com</div>
                                </a>
                            </li>
                            <li className="contact-item">
                                <a>
                                    <span className="icon"><i className="fa fa-github"></i></span>
                                    <div className="contact-item is-inline-block">Github</div>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </section>
        )
    }
}

export default AboutMe;

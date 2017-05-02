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
                                <h1 className="title is-1 name">Yoaquim Cintrón</h1>
                                <p className="title is-6 description">
                                    I’m a <strong>resourceful</strong> software engineer with a <strong>talent</strong> &nbsp;
                                    for learning, and a <strong>passion</strong> for doing it with amazing <strong>people</strong>.
                                </p>
                            </div>

                        </div>
                    </div>


                    <div className="level-right">
                        <div className="contact">
                            <a className="panel-block contact-item" href="http://www.github.com/yoaquim" target="_blank">
                                <span className="panel-icon"><i className="fa fa-github"></i></span>
                                <span className="contact-item-text">Github</span>
                            </a>
                            <a className="panel-block contact-item" href="tel:+13475108940" target="_blank">
                                <span className="panel-icon"><i className="fa fa-phone"></i></span>
                                <span className="contact-item-text">347-510-8940</span>
                            </a>
                            <a className="panel-block contact-item" href="https://www.google.com/maps/place/New+York,+NY/@40.705311,-74.258188" target="_blank">
                                <span className="panel-icon"><i className="fa fa-map-marker"></i></span>
                                <span className="contact-item-text">New York, New York</span>
                            </a>
                            <a className="panel-block contact-item" href="mailto:yoaquim@outlook.com" target="_blank">
                                <span className="panel-icon"><i className="fa fa-envelope"></i></span>
                                <span className="contact-item-text">yoaquim@outlook.com</span>
                            </a>
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}

export default AboutMe;

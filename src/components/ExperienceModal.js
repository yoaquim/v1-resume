import React from 'react'
import Card from './Card'
import experience from '../data/experience'

let getClasses = (status) => {
    let baseClasses = 'experience-modal modal'
    let OFF = baseClasses;
    let ON = baseClasses + ' is-active';
    return status === 'OFF' ? OFF : ON;
}

let getExperienceCard = (status) => {

    if(status === 'OFF') {
        return;
    }

    let expToRender = experience[status];
    let highlights = expToRender.highlights.map((highlight) => {
        return <li className="highlight">{ highlight }</li>
    });

    return (
        <Card icon="briefcase" title={expToRender.title} classes="experience-modal-card">
            <p className="description">{expToRender.description}</p>
            <ul className="highlights">
                { highlights }
            </ul>
        </Card>
    )
}

class ExperienceModal extends React.Component {

    constructor(props) {
        super()
        this.state = {
            status: props.status,
            classes: getClasses(props.status)
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            status: nextProps.status,
            classes: getClasses(nextProps.status)
        })
    }

    render() {
        return (
            <div className={this.state.classes}>
                <div className="modal-background" onClick={() => {
                    return this.props.updateModalStatus('OFF')
                }}></div>

                <div className="modal-content">
                    { getExperienceCard(this.state.status) }
                </div>

                <button className="modal-close" onClick={() => {
                    return this.props.updateModalStatus('OFF')
                }}></button>
            </div>
        )
    }

}

export default ExperienceModal;
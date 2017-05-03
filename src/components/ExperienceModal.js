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

    if (status === 'OFF') {
        return;
    }
    'angle-double-right'
    let expToRender = experience[status];
    let highlights = expToRender.highlights.map((highlight) => {
        return (
            <div className="highlight">
                <span className="icon"><i className="fa  fa-angle-double-right"/></span>
                <span className="text">{ highlight }</span>
            </div>
        )
    });

    return (
        <Card icon="briefcase" title={expToRender.title} classes="experience-modal-card">
            <div className="description-section">
                <div className="title is-6">Description</div>
                <div className="description">{expToRender.description}</div>
            </div>
            <div className="highlights-section">
                <div className="title is-6">Highlights</div>
                <div className="highlights">
                    { highlights }
                </div>
            </div>
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
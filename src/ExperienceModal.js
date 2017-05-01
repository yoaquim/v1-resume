import React from 'react'
import Card from './Card'

let getClasses = (status) => {
    let baseClasses = 'experience-modal modal'
    let OFF = baseClasses;
    let ON = baseClasses + ' is-active';
    return status === 'OFF' ? OFF : ON;
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
                }}> </div>

                <div className="modal-content">
                    <Card icon="briefcase" title={this.state.status} classes="modal-card">
                        <p>I do a lot of cool shit at work</p>
                    </Card>
                </div>

                <button className="modal-close" onClick={() => {
                    return this.props.updateModalStatus('OFF')
                }}> </button>
            </div>
        )
    }

}

export default ExperienceModal;
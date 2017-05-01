import React from 'react'

let getClasses = (status) => {
    let OFF = 'modal';
    let ON = 'modal is-active';
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
                <div className="modal-background"></div>

                <div className="modal-content">
                    <p className="work-description">
                        I've done many interesting things.
                    </p>
                </div>

                <button className="modal-close" onClick={() => {
                    return this.props.updateModalStatus('OFF')
                }}></button>
            </div>
        )
    }

}

export default ExperienceModal;
import React from 'react'

class Skill extends React.Component {

    constructor(props) {
        super();
        this.state = {
            icon: 'fa fa-' + props.icon,
        }
    }

    render() {
        return (
            <div className="skill">
                <span className="icon"><i className={this.state.icon}/></span>
                <span className="title is-6 name"><strong>{this.props.name}</strong></span>
            </div>
        )
    }

}

export default Skill;
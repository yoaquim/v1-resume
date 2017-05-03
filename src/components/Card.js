import React from 'react'

class Card extends React.Component {

    constructor(props) {
        super();

        this.state = {
            icon: 'fa fa-' + props.icon,
            cardClass: 'card tile is-child ' + props.classes
        }
    }

    render() {
        return (
            <div className={this.state.cardClass} onClick={this.props.doAction}>
                <header className="card-header">
                    <a className="card-header-icon">
                        <span className="icon"><i className={this.state.icon}/></span>
                    </a>
                    <div className="card-header-title">
                        {this.props.title}
                    </div>
                </header>
                <div className="card-content">
                    <div className="content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }

}

export default Card;
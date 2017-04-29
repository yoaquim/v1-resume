import React from 'react'

class Message extends React.Component {

    constructor(props) {
        super();
        this.state = {
            icon: 'fa fa-' + props.icon,
            messageClass: 'message tile is-child ' + props.classes
        }
    }

    render() {
        return (
            <article className={this.state.messageClass}>
                <div className="message-header">
                    <span className="icon"><i className={this.state.icon}/></span>
                    <p className="message-title">
                        {this.props.title}
                    </p>
                </div>
                <div className="message-body">
                    {this.props.children}
                </div>
            </article>
        )
    }

}

export default Message;
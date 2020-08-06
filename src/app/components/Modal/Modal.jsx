import React from 'react';
import './Modal.css';

export default class Modal extends React.Component {
    state = {
        isOpen: false,
    };

    onOpenModal() {
        this.setState({ isOpen: true });
    }

    onCloseModal() {
        this.setState({ isOpen: false });
    }

    render() {
        return (
            <div>
                <button onClick={this.onOpenModal.bind(this)}>Open modal</button>

                {this.state.isOpen && (
                    <div className="modal">
                        <div className="modal-body">
                            <h1>Modal title</h1>
                            <p>I am awesome modal</p>
                            <button onClick={this.onCloseModal.bind(this)}>Close modal</button>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

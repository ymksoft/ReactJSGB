import React from 'react';

export default class Modal extends React.Component {
    render() {
      if (!this.props.isOpen) return null;
  
      return (
        <div>
          <div className="modal">{this.props.children}</div>
          <div className="bg" onClick={e => this.close(e)} />
        </div>
      );
    }
  
    close(e) {
      e.preventDefault();
  
      if (this.props.onClose) {
        this.props.onClose();
      }
    }
  }
  




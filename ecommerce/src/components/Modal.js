import React, { Component } from 'react';
import {FaClose } from 'react-icons/lib/fa'





class Modal extends Component {



  closeModal = (img) => {
    this.props.modal(false)
  }


  render(){



    return(

        <div className={(this.props.status) ? "modal-container2": "modal-container"}>
          <div className="modal">
            <img id="modal-img" src={this.props.photo} alt="img" />
            <div className="modal-close"
              onClick={this.closeModal}>
              <FaClose />
            </div>
          </div>
        </div>
    )
  }
}

export default Modal;

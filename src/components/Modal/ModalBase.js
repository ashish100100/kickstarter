import React, { Component } from 'react';
import {Modal, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
class ModalBase extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: this.props.show ? this.props.show : false,
      projectDetail: this.props.projectDetail ? this.props.projectDetail : {}
    };
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.show!==this.state.show){
      this.setState({show: nextProps.show});
    }
    if(nextProps.projectDetail!==this.state.projectDetail){
      this.setState({projectDetail: nextProps.projectDetail});
    }
  }
  
  handleClose = () => {
      this.setState({
        show: false
      });
  }

  handleShow = () => {
      this.setState({
        show: true
      });
  }

    render() {
        return (
            <React.Fragment>
                <Modal show={this.state.show} onHide={this.handleClose} animation={false}>
                <Modal.Header closeButton>
                <Modal.Title>{this.state.projectDetail.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="centerAlign">{this.state.projectDetail.by}</p> 
                    <div className="blurb">{this.state.projectDetail.blurb}</div>
                    <div className="summary">
                        <span className="left">Backers: {this.state.projectDetail['num.backers']}</span>
                        <span className="right">Amount Pledged: {this.state.projectDetail['amt.pledged']}</span>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={this.handleClose}>
                  Close
                  </Button>
                  <Button variant="primary">
                      <Link target='_blank' to={this.state.projectDetail.url ? this.state.projectDetail.url: '#'}>View Project</Link>
                  </Button>
                </Modal.Footer>
                </Modal>
            </React.Fragment>
        );
    }
 }

 export default ModalBase;
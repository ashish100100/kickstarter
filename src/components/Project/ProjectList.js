import React, { Component } from 'react';
import getProductList from '../../api/projectApi';
import {Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalBase from '../Modal/ModalBase';



class ProjectList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listArray: [],
            projectDetail: {},
            show: false
        }
    }

    componentDidMount(){
        getProductList().then((response)=>{
            this.setState({
                listArray: response
            });
        });
    }

    render() {
        return (
            <React.Fragment>
                <ModalBase projectDetail={this.state.projectDetail} show={this.state.show}/>
                <div className="tableWidth">
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>S. No.</th>
                        <th>Percentage Funded</th>
                        <th>Amount Pledged</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.listArray.map((project, index) => {
                            return (
                                <tr key={index} onClick={() => this.setState({projectDetail: project, show: true})}>
                                <td>{index}</td>
                                <td>{project['percentage.funded']}</td>
                                <td>{project['amt.pledged']}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
                </div>
            </React.Fragment>
        );
    }
 }

 export default ProjectList;
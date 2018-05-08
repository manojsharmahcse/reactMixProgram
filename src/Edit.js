import React from 'react';
import { Table, Grid, Row, Col, ButtonToolbar, ButtonGroup, Button, Glyphicon,Modal } from 'react-bootstrap';
export default class Add extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      employees: [
        {
           empCode: 1001,
           name: 'Mark',
           designation: 'Manager',
           salary: 25000,
           dob: '16-05-1987',
           doj: '16-05-2017',
           contact: 1234567890
        },
        {
           empCode: 1002,
           name: 'Jacob',
           designation: 'DGM',
           salary: 35000,
           dob: '16-05-1987',
           doj: '16-05-2017',
           contact: 1234567890
        },
        {
          empCode: 1002,
          name: 'Alex',
          designation: 'GM',
          salary: 45000,
          dob: '16-05-1987',
          doj: '16-05-2017',
          contact: 1234567890
        }
      ]
    }
  }

  onDelete = (key)=> {
    let { employees } = this.state;
    employees.splice(key, 1);

    this.setState({ employees });
  }

  render(){
    return(
      <div>

       <Grid>
        <Row className="show-grid">
        <Col xs={10} xsOffset={1}>
          <Button className="pull-right" bsStyle="primary">Add Employee</Button><h2>Employees Table</h2>


        
          <Table striped bordered condensed hover>
            <thead>
              <tr>
              <th>#</th>
                <th>Employee Code</th>
                <th>Employee Name</th>
                <th>Designation</th>
                <th>Gross Salary</th>
                <th>Date of Birth</th>
                <th>Date of Joining</th>
                <th>Contact No</th>
                <th colSpan="3" className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.length?this.state.employees.map((item, key) =><tr key={key}>
                <td>{key+1}</td>
                <td>{item.empCode}</td>
                <td>{item.name}</td>
                <td>{item.designation}</td>
                <td>Rs.{parseFloat(item.salary).toFixed(2)}</td>
                <td>{item.dob}</td>
                <td>{item.doj}</td>
                <td>{item.contact}</td>
                <td>
                  <ButtonToolbar>
                    <ButtonGroup>
                      <Button bsSize="small" className="btn-warning">
                        <Glyphicon glyph="edit" />
                      </Button>
                      <Button bsSize="small" className="btn-info">
                        <Glyphicon glyph="eye-open" />
                      </Button>
                      <Button bsSize="small" className="btn-danger" onClick={this.onDelete.bind(this, key)}>
                        <Glyphicon glyph="remove" />
                      </Button>
                    </ButtonGroup>
                  </ButtonToolbar>
                </td>
              </tr>):
              <tr>
                <td colSpan={9} className="text-center"><h4>No data found.</h4></td>
              </tr>
            }
            </tbody>
        </Table>
        </Col>
        </Row>
        </Grid>

      </div>
    )
  }
}
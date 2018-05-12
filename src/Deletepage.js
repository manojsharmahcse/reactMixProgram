import React from 'react';
import {Navbar,Nav, NavItem,NavDropdown,MenuItem,} from 'react-bootstrap';
import {Grid,Row,Checkbox,Table,Col,ButtonToolbar,ButtonGroup,Button,Glyphicon} from 'react-bootstrap';
import {ControlLabel,Popover, Tooltip, Modal, OverlayTrigger,FormGroup,FormControl,Form} from 'react-bootstrap';

export default class Header extends React.Component{
  constructor(props, context){
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    this.state = {
          show: false
        };



    this.state = {

  employees:[
    {
      empCode:1001,
       Name:'Robert Bullmore',
       Type:'Business Proprietor',
       Street:'113 Broadway',
       City:'New york City',
       State:'New York',
       Zip:10001,
       Country:'USA'
    },
    {
      empCode:1002,
      Name:'Charlies Hunter',
      Type:'Marketing Manager',
      Street:'145 Modaltown',
      City:'Los Vegas',
      State:'New York',
      Zip:88901,
      Country:'USA'
    },
    {
      empCode:1003,
      Name:'Charlies Cabin',
      Type:' Manager',
      Street:'145 Modaltown',
      City:'Los Vegas',
      State:'New York',
      Zip:88901,
      Country:'USA'
    },
    {
      empCode:1004,
      Name:'Tom Cruise',
      Type:' Manager',
      Street:'167c Modaltown',
      City:'Los Vegas',
      State:'New York',
      Zip:88901,
      Country:'USA'
    },
    {
      empCode:1005,
      Name:'johnny  deep',
      Type:'Marketing Manager',
      Street:'145 Modalstreet',
      City:'Los Vegas',
      State:'New York',
      Zip:88901,
      Country:'USA'
    },
    {
      empCode:1006,
      Name:'Charlies tomato',
      Type:'Marketing Manager',
      Street:'145 Modaltown',
      City:'Los Vegas',
      State:'New York',
      Zip:88901,
      Country:'USA'
    },
    {
      empCode:1007,
      Name:'Bancroft Anne',
      Type:'Production Manager',
      Street:'145 Modaltown',
      City:'California',
      State:'New York',
      Zip:88901,
      Country:'USA'
    },
    {
      empCode:1008,
      Name:'Bacevich Andrew',
      Type:'Sales Manager',
      Street:'145 Modaltown',
      City:'Los Vegas',
      State:'New York',
      Zip:88901,
      Country:'USA'

      }
    ]
  }
}
onDelete = key => {
let {employees} = this.state;
employees.splice(key,1);
this.setState({employees});
}

handleClose() {
   this.setState({ show: false });
 }

 handleShow() {
   this.setState({ show: true });
 }

  render(){

    const popover = (
          <Popover id="modal-popover" title="popover">
            very popover. such engagement
          </Popover>
        );
 const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;


    return(
      <div>


            <Navbar inverse collapseOnSelect >
                    <Navbar.Header>
                    <Navbar.Brand><a href="/">Home</a></Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                    <NavItem  href="/Blog">Blog</NavItem>
                    <NavItem  href="/About">About us</NavItem>


                    <NavDropdown eventKey={3} title="Contact us" id="basic-nav-dropdown">

                    <MenuItem eventKey={3.1}>Action</MenuItem>
                    <MenuItem eventKey={3.2}>Advantages</MenuItem>
                    <MenuItem eventKey={3.3}>Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={3.4}>Benefits</MenuItem>
                    </NavDropdown>
                    </Nav>
                    <Navbar.Collapse>
                    <Navbar.Form className="pull-right">
                    <FormGroup>
                    <FormControl type="text" placeholder="Search" />
                    </FormGroup>{' '}
                    <Button type="submit">Submit</Button>
                    </Navbar.Form>
                    </Navbar.Collapse>
            </Navbar>

            <Button className="pull-right" bsStyle="primary" bsSize="primary" onClick={this.handleShow}>
                      Add Employee
            </Button>


            <Modal show={this.state.show} onHide={this.handleClose}>
         <Modal.Header closeButton>
           <Modal.Title>Employee Details</Modal.Title>
         </Modal.Header>
         <Modal.Body>
         <section>


         <Form horizontal>
     <FormGroup controlId="formHorizontalFirst Name">
       <Col componentClass={ControlLabel} sm={2}>
         FirstName:
       </Col>
       <Col sm={10}>
         <FormControl type="text" placeholder="First Name" />
       </Col>
     </FormGroup>

     <FormGroup controlId="formHorizontalLast Name">
       <Col componentClass={ControlLabel} sm={2}>
         LastName:
       </Col>
       <Col sm={10}>
         <FormControl type="text" placeholder="Last Name" />
       </Col>
     </FormGroup>

     <FormGroup controlId="formHorizontalType">
       <Col componentClass={ControlLabel} sm={2}>
         Type:
       </Col>
       <Col sm={10}>
         <FormControl type="text" placeholder="Type" />
       </Col>
     </FormGroup>
   <FormGroup controlId="formHorizontalStreet">
       <Col componentClass={ControlLabel} sm={2}>
         Street:
       </Col>
       <Col sm={10}>
         <FormControl type="text" placeholder="Street" />
       </Col>
     </FormGroup>
   <FormGroup controlId="formHorizontalCity">
       <Col componentClass={ControlLabel} sm={2}>
         City/Town:
       </Col>
       <Col sm={10}>
         <FormControl type="text" placeholder="City/Town" />
       </Col>
     </FormGroup>

   <FormGroup controlId="formHorizontalState">
       <Col componentClass={ControlLabel} sm={2}>
         State:
       </Col>
       <Col sm={10}>
         <FormControl type="text" placeholder="State" />
       </Col>
     </FormGroup>
     <FormGroup controlId="formHorizontalCountry">
         <Col componentClass={ControlLabel} sm={2}>
           Country/Zip:
         </Col>
         <Col sm={10}>
           <FormControl type="text" placeholder="Country/Zip" />
         </Col>
       </FormGroup>
     <FormGroup controlId="formHorizontalEmail">
       <Col componentClass={ControlLabel} sm={2}>
         Email:
       </Col>
       <Col sm={10}>
         <FormControl type="Email" placeholder="Email" />
       </Col>
     </FormGroup>

     <FormGroup controlId="formHorizontalPassword">
       <Col componentClass={ControlLabel} sm={2}>
         Password:
       </Col>
       <Col sm={10}>
         <FormControl type="password" placeholder="Password" />
       </Col>
     </FormGroup>

     <FormGroup>
       <Col smOffset={2} sm={10}>
         <Checkbox>Remember me</Checkbox>
       </Col>
     </FormGroup>

     <FormGroup>
       <Col smOffset={2} sm={10}>
         <Button className="btn-primary"type="submit">Submit Details</Button>
       </Col>
     </FormGroup>
   </Form>;






</section>
         </Modal.Body>
         <Modal.Footer>
           <Button className="btn-primary" onClick={this.handleClose}>Close</Button>
         </Modal.Footer>
       </Modal>
















    <Table>
        <thead>
          <tr>
          <th>#</th>
            <th>Employee Code</th>
            <th>Name</th>
            <th>Type</th>
            <th>Street</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Country</th>
            <th colSpan="3" className="text-center">Action</th>
          </tr>
        </thead>


          <tbody>
          {this.state.employees.length?this.state.employees.map((item, key) =><tr key={key}>
            <td>{key+1}</td>
            <td>{item.empCode}</td>
            <td>{item.Name}</td>
            <td>{item.Type}</td>
            <td>Rs.{parseFloat(item.Street).toFixed(2)}</td>
            <td>{item.City}</td>
            <td>{item.State}</td>
            <td>{item.Zip}</td>
            <td>{item.Country}</td>
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
      </div>
)
  }
}
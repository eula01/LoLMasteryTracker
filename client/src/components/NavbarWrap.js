import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class NavbarWrap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'Search'
    }

    this.changeView = this.changeView.bind(this);
  }

  // Change view in Navbar and App
  changeView({ target }) {
    this.setState({
      view: target.name
    });

    this.props.changeViewApp(target.name);
  }

  render() {

    return(
      <Navbar expand="sm" bg="primary" variant="dark">
        <Navbar.Brand>LoL Mastery Tracker</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link name="Search" onClick={this.changeView}>Search!</Nav.Link>
            <Nav.Link name="MyChampPool" onClick={this.changeView}>My Champion Pool</Nav.Link>
            <Nav.Link name="Esports" onClick={this.changeView}>Pros</Nav.Link>
          </Nav>
      </Navbar>
    );
  }
}

export default NavbarWrap;
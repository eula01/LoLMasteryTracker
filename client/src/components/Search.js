/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import '../escape.css'
import s from '../search.svg';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Button from 'react-bootstrap/Button';

class SummonerSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      region: 'Select region'
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.regionChange = this.regionChange.bind(this);
  }

  regionChange({ target }) {
    this.setState({
      region: target.name
    })
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }



  handleSubmit(e) {
    e.preventDefault();
    // Validation check

    console.log('hello from the form submit handler !!! XDDDD');
  }

  render() {
    console.log('%c⧭', 'color: #00e600', this.state);
    return(
      <Container>
        <Form onSubmit={this.handleSubmit} className="searchBarWrapper">
          <InputGroup>

            <FormControl
              onChange={this.handleChange}
              value={this.state.query}
              name="query"
              type="text"
              placeholder="Search a summoner..."
            />
            <DropdownButton id="dropdown-basic-button" title={this.state.region}>
              <Dropdown.Item onClick={this.regionChange} name="NA">NA</Dropdown.Item>
              <Dropdown.Item onClick={this.regionChange} name="EUW">EUW</Dropdown.Item>
              <Dropdown.Item onClick={this.regionChange} name="EUNE">EUNE</Dropdown.Item>
              <Dropdown.Item onClick={this.regionChange} name="KR">KR</Dropdown.Item>
            </DropdownButton>
            <Button onClick={this.handleSubmit} variant="outline-secondary" ><img src={s}/></Button>
          </InputGroup>
        </Form>
      </Container>
    );
  }
}

export default SummonerSearch;
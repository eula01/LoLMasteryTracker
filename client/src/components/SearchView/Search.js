/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import axios from 'axios';

import '../../escape.css'
import s from '../../search.svg';

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
      searchQuery: '',
      region: 'Select region',
      summonerData: null
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.regionChange = this.regionChange.bind(this);
  }

  regionChange(ekey) {
    console.log(ekey);
    this.setState({
      region: ekey
    })
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('Search submitted!');

    axios.get('/api/search', { params: this.state })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    console.log('%c⧭', 'color: #00e600', this.state)
    return(
      <Container>
        <Form onSubmit={this.handleSubmit} className="searchBarWrapper">
          <InputGroup>

            <FormControl
              onChange={this.handleChange}
              value={this.state.searchQuery}
              name="searchQuery"
              type="text"
              placeholder="Search a summoner..."
            />
            <DropdownButton
            id="dropdown-basic-button"
            title={this.state.region === "EUN" ? "EUNE" : this.state.region}
            >
              <Dropdown.Item onSelect={this.regionChange} eventKey="NA" >NA</Dropdown.Item>
              <Dropdown.Item onSelect={this.regionChange} eventKey="EUW" >EUW</Dropdown.Item>
              <Dropdown.Item onSelect={this.regionChange} eventKey="EUN" >EUNE</Dropdown.Item>
              <Dropdown.Item onSelect={this.regionChange} eventKey="KR" >KR</Dropdown.Item>
            </DropdownButton>
            <Button onClick={this.handleSubmit} variant="outline-secondary" ><img src={s}/></Button>
          </InputGroup>
        </Form>
      </Container>
    );
  }
}

export default SummonerSearch;
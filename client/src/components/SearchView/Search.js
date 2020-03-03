/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import axios from 'axios';

import '../../escape.css'
import s from '../../search.svg';
import Results from './Results.js';

import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

class SummonerSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: '',
      region: 'Select region',
      isLoading: false,
      profileData: null
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.regionChange = this.regionChange.bind(this);
  }

  regionChange(ekey) {
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

    this.setState({ isLoading: !this.state.isLoading })

    axios.get('/api/search', { params: this.state })
      .then((res) => {
        console.log('summoner data from API: ', res.data);
        this.setState({
          isLoading: !this.state.isLoading,
          profileData: res.data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    // console.log('%c⧭', 'color: #fc432a', this.state)
    return(
      <div>
        <Form onSubmit={this.handleSubmit} className="topPad">
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

        {
          this.state.profileData ?
          <Results profileData={this.state.profileData} rg={this.state.region}/> :
          this.state.isLoading ?
          <div className="d-flex justify-content-center topPadding">
            <Spinner animation="border"/>
          </div>
          :
          <div></div>
        }
      </div>
    );
  }
}

export default SummonerSearch;
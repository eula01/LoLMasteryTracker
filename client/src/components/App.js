import React from 'react';

import Container from 'react-bootstrap/Container';
import NavbarWrap from './NavbarWrap.js';
import Search from './SearchView/Search.js';
import Esports from './Esports.js';
import MyChampPool from './MyChampPool.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'Search'
    }

    this.changeViewApp = this.changeViewApp.bind(this);
  }

  changeViewApp(view) {
    this.setState({
      view: view
    });
  }

  renderView() {
    return (
      this.state.view === 'Search' ? <Search /> :
      this.state.view === 'MyChampPool' ? <MyChampPool /> :
      this.state.view === 'Esports' ? <Esports /> :
      <div>Client error: invalid view</div>
    );
  }

  render() {
    return (
      <Container>
        <NavbarWrap changeViewApp={this.changeViewApp}/>

        {this.renderView()}
      </Container>
    );
  }
}

export default App;

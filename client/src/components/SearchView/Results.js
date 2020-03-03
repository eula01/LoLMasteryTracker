import React from 'react';

import Profile from './Profile.js';
import Champions from './Champions.js';

class Results extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      masteryData: null
    };
  }

  render() {
    // console.log('props in Results.js: ', this.props);
    return(
      <div>
        <Profile profileData={this.props.profileData} rg={this.props.rg}/>
        <Champions profileData={this.props.profileData} rg={this.props.rg}/>
      </div>
    );
  }
}

export default Results;
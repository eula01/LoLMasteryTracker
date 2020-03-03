import React from 'react';

import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      profileData: null,
      rg: null
    };
  }

  componentDidMount() {
    this.setState({
      profileData: this.props.profileData,
      rg: this.props.rg
    });
  }

  render() {
    console.log(this.state)
    return(
      <Container className="redBorder topPadXL">
        { !this.state.profileData ? <div></div> :

         <div>
            {/* <hr className="topPad"/> */}
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Champion</th>
                  <th>Mastery Points</th>
                  <th>Level</th>
                  <th>Progress To Next Level</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Akali <Image roundedCircle className="smImg" src="http://ddragon.leagueoflegends.com/cdn/10.4.1/img/champion/Akali.png" /></td>
                  <td className="gold">241,193</td>
                  <td>7 (Max)</td>
                  <td><ProgressBar now={100} label={`${100}%`}/></td>
                </tr>
                <tr>
                  <td>Twitch <Image roundedCircle className="smImg" src="http://ddragon.leagueoflegends.com/cdn/10.4.1/img/champion/Twitch.png" /></td>
                  <td className="gold">16,023</td>
                  <td>4</td>
                  <td><ProgressBar now={86} label={`${86}%`}/></td>
                </tr>
              </tbody>
            </Table>
          </div>
        }
      </Container>
    );
  }
}

export default Profile;
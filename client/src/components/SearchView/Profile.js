import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';

/*   BUGFIX:
 *
 *  - Move EUNE escaping to server side
 *
 *
 */

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
    let data = this.state.profileData;
    return(
      <Container className="redBorder">
        { !this.state.profileData ? <div></div> :

          <Col className="topPad">
            <Row className="d-flex flex-row border rounded innerPad">
              <div className="p-0 w-25">
                <Image roundedCircle src={`http://ddragon.leagueoflegends.com/cdn/10.4.1/img/profileicon/${data.iconId}.png`} className="iconImg"/>
              </div>

              <div class="d-flex flex-column bd-highlight mb-3">
                <div class="p-2 bd-highlight">{data.name}  <Badge variant="secondary">{this.state.rg}</Badge></div>
                <h5 class="p-2 bd-highlight">
                  <Badge className="rMar" variant="light">Level {data.lvl}</Badge>
                  <Badge variant="light">Total Mastery <span className="gold">{data.masteryTotal}</span></Badge>
                </h5>
              </div>
            </Row>
          </Col>
        }
      </Container>
    );
  }
}

export default Profile;
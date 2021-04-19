import React from 'react';
import FreelancerCard from './FreelancerCard.js';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';


class FreelancerList extends React.Component {
  render() {
    return (

      <Container fluid>
        <Row className ="justify-content-md-center" style={{display:'flex'}}>
            {
              this.props.freelancer_info.map(freelancer => (
                <FreelancerCard
                  key={freelancer.id}
                  freelancer={freelancer} />
              ))
            }
          </Row>
      </Container>      
    );
  }
}

FreelancerList.propTypes = {
  freelancer_info: PropTypes.arrayOf(PropTypes.object).isRequired
};

FreelancerList.defaultProps = {
  freelancer_info: []
};

export default FreelancerList;
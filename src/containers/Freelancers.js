import React from "react";
import { Container } from 'react-bootstrap';
import freelancer_info from "../data/freelancer_data";
import FreelancerList from '../containers/FreelancerList.js';
import FreelancerHeader from '../containers/FreelancerHeader.js';
import Footer from '../containers/Footer.js';
import SearchBar from '../containers/SearchBar.js';
import Filters from '../containers/FreelancerFilters.js';
import NavigationBar from '../containers/NavigationBar.js';
import { useState } from 'react';
import './Freelancers.css';


const filterFreelancers = (cards, query) => {
  if (!query) {
      return cards;
  }

  return cards.filter((card) => {
      const cardName = card.name.toLowerCase();
      const cardJob = card.job_title.toLowerCase();
      const cardSector = card.sector.toLowerCase();

      if(cardName.includes(query))
        return cardName.includes(query);
      else if(cardJob.includes(query))
        return cardJob.includes(query);
      else if(cardSector.includes(query))
        return cardSector.includes(query);
  });
};

  
function Freelancers() {
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filteredFreelancers = filterFreelancers(freelancer_info, searchQuery);
  
      return (
        <div className="blue-background">
        <NavigationBar />
        <Container className="content">
          
          <FreelancerHeader />
          <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
          />
          <Filters
              setSearchQuery={setSearchQuery}
          />
          <FreelancerList
            freelancer_info={filteredFreelancers} />
          <Footer />
        </Container>
        </div>
      );
}
  
export default Freelancers;
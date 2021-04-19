import React from 'react';
import Form from 'react-bootstrap/Form';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
    return (
        <Form bg="dark" action="/" method="get">
            <Form.Control
                value={searchQuery}
                onInput={(e) => setSearchQuery(e.target.value)}
                type="text"
                id="header-search"
                placeholder="Search Freelancers"
                name="s" 
            />
        </Form>
    );
    
};

export default SearchBar;
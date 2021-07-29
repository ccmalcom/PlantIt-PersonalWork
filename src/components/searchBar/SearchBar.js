import React from 'react';
import {useHistory} from 'react-router-dom';
import {Button, InputGroup, Input} from 'reactstrap';

const SearchBar = (props) => {
    const history = useHistory();
    const onSubmit = (e) => {
        history.push(`?s=${props.searchQuery}`);
        e.preventDefault();
    };

    return (
        <form action="/" method="get" autoComplete="off" onSubmit={props.fetchPlants}>
            <InputGroup>
            <Input type="text" value={props.searchQuery} onInput={(e) => props.setSearchQuery(e.target.value)} id="header-search" placeholder="Search Plants" name="s"/>
            <Button type="submit" id='start'>Submit</Button>
            </InputGroup> 
        </form>
    )
}


export default SearchBar;
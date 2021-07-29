import React, {useState} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import SearchBar from './SearchBar';
import { Table } from 'reactstrap';
import styled from 'styled-components';


const Search = () => {
    const Button1 = styled.button`
background-color: #CCCC00;
margin-right: 20px;
width: 100px;
`
const Button2 = styled.button`
background-color: rgb(65, 105, 65);
width: 100px;
`
    const [plants, setPlants] = useState([]);
    
    const fetchPlants = (e) => {
        e.preventDefault();
        fetch('https://wd85-plant-it2.herokuapp.com/plant/all', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
            })
        })
        .then((res) => res.json())
        .then((plantData) => {
            setPlants(plantData);
            console.log(plants, plantData);
        })
    }
    
    const filterPlants = (plants, query) => {
        if (!query) {
            return plants;
        }
        
        return plants.filter((plant) => {
            const plantName = plant.plantName.toLowerCase();
            return plantName.includes(query);
        });
    };
    

    const {search} = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filteredPlants = filterPlants(plants, searchQuery);
    
    const searchMapper = () => {
        return filteredPlants.map((plant, index) => {
            return(
                <tr key={index}>
                <th scope='row'>{plant.plantName}</th>
                <td>{plant.typeOfPlant}</td>
                <td>{plant.lightingNeeds}</td>
                <td>{plant.waterNeeds}</td>
                <td>{plant.fertilizerNeeds}</td>
                <td>
                    <Button1>MyGarden <b>+</b></Button1>
                    <Button2>View</Button2>
                </td>
            </tr>
            )
        })
    }

    return (
        <Router>
            <div className="Search">
                <SearchBar fetchPlants={fetchPlants} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
                {/* <div className="Search Results"> */}
                    {/* {filteredPlants.map((plants) =>
                    <a href="/ViewPlant" >
                        {plants.plantName}
                    </a> */}
                    {/* )} */}
                {/* </div> */}
                
            </div>
            <>
            <h2>Search Results</h2>
            <Table striped>
                <thead>
                    <tr>
                        <th>Plant</th>
                        <th>Type</th>
                        <th>Lighting Needs</th>
                        <th>Water Needs</th>
                        <th>Fertilizer Needs</th>
                    </tr>
                </thead>
                <tbody>
                    {searchMapper()}
                </tbody>
            </Table>
        </>
        </Router>
    )
}

export default Search;


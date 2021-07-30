import React, { useState, useEffect } from 'react';
import DisplayPlants from './plantTable/PlantTable';
import CreatePlant from './createPlant/CreatePlant';
import PlantView from './PlantView';
import AddToGarden from '../gardens/AddToGarden';
import { Container, } from 'reactstrap';
import DeletePlant from './DeletePlant';
import Search from '../searchBar/Search';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';

const Button1 = styled.button`
border: none;
height: auto;
width: 150px;
padding: 10px 10px;
border-radius: 15px;
background-color: rgb(65, 105, 65, 0.9);
font-family: 'Yeseva One';
font-size: 1em;
color: white;
&:hover{
    background-color: #6C757D;
    border-color: #6C757D;
    `

const FlexDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
    font-family: 'Yeseva One';
    text-align: center
`
const PlantsIndex = (props) => {

    const [plants, setPlants] = useState([]);
    const [viewActive, setViewActive] = useState(false);
    const [createActive, setCreateActive] = useState(false);
    const [plantToView, setPlantToView] = useState([]);
    const [gardenModalActive, setGardenModalActive] = useState(false);
    const [plantToGarden, setPlantToGarden] = useState([]);

    const [deleteModalActive, setDeleteModalActive] = useState(false);
    const [plantToDelete, setPlantToDelete] = useState([])
    const [loading, setLoading] = useState(false)
    console.log(plants);
    console.log('view active:', viewActive)
    const fetchPlants = () => {
        setLoading(true)
        fetch('https://wd85-plant-it2.herokuapp.com/plant/all', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
        })
            .then(res => res.json())
            .then((plantData) => {
                setPlants(plantData)
                console.log(plants, plantData);
            })
            .then(setLoading(false))
    }
    // view functions
    const viewPlant = (plant) => {
        setPlantToView(plant);
        console.log(plant);
    }
    const viewOn = () => {
        setViewActive(true)
    }
    const viewOff = () => {
        setViewActive(false)
    }
    // add to garden functions (ignore this for now)
    const addToGarden = (plant) => {
        setPlantToGarden(plant);
    }
    const gardenModalOn = () => {
        setGardenModalActive(true)
    }
    const gardenModalOff = () => {
        setGardenModalActive(false)
    }
    // create functions (plantIt)
    const createActiveOn = () => {
        setCreateActive(true);
    }
    const createActiveOff = () => {
        setCreateActive(false)
    }

    // delete functions
    const deleteThisPlant = (plant) => {
        setPlantToDelete(plant)
    }
    const deleteModalOn = () => {
        setDeleteModalActive(true)
    }
    const deleteModalOff = () => {
        setDeleteModalActive(false)
    }

    useEffect(() => {
        fetchPlants();
    }, [])

    plants.sort((a, b) => a.plantName.localeCompare(b.plantName));


    return (
        <Container>
            <div>
                <FlexDiv>
                    <h1>Plant Index</h1>
                    <p>If the plant exists in our database, you can find it below. <br /> If you can't find what you're looking for, add the plant to our database with the button!</p>
                    <Button1 onClick={createActiveOn}>PlantIt!</Button1>
                    <hr/>
                </FlexDiv>
                {loading ? <Loader type='Oval' color='rgb(65, 105, 65)' /> :
                    <DisplayPlants plants={plants} viewPlant={viewPlant} viewOn={viewOn} addToGarden={addToGarden} gardenModalOn={gardenModalOn} fetchPlants={fetchPlants} token={props.token} />
                }
                <Search />
            </div>

            <div>
                {viewActive ? <PlantView plantToView={plantToView} viewPlant={viewPlant} viewOff={viewOff} viewOn={viewOn} addToGarden={addToGarden} gardenModalOn={gardenModalOn} fetchPlants={fetchPlants} deleteModalOn={deleteModalOn} deleteThisPlant={deleteThisPlant} /> : null}

                {gardenModalActive ? <AddToGarden plantToGarden={plantToGarden} gardenModalOff={gardenModalOff} token={props.token} /> : null}

                {createActive ? <CreatePlant fetchPlants={fetchPlants} token={props.token} createActiveOff={createActiveOff} /> : null}

                {deleteModalActive ? <DeletePlant plantToDelete={plantToDelete} deleteModalOff={deleteModalOff} viewOff={viewOff} token={props.token} fetchPlants={fetchPlants} /> : null}
            </div>
        </Container>
    )

}
export default PlantsIndex;
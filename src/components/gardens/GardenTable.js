import React from 'react';
import { Table, Button } from 'reactstrap';
import styled from 'styled-components';
import ImageSearch from '../plants/plantTable/PlantImage';

const Button1 = styled.button`
background-color: rgb(65, 105, 65);
border-color: rgb(65, 105, 65);
margin-right: 20px;
width: 100px;
 `
const Button2 = styled.button`
background-color: red;
width: 100px;
 `

const GardenTable = (props) => {


    const deleteGarden = () => {
        
        fetch(`https://wd85-plant-it2.herokuapp.com/garden/${props.plantToDelete.plantName}`, {
            method: 'Delete',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
                .then(res => console.log(res))
                .then(() => props.fetchGarden())
        }


    const gardenMapper = () => {
        return props.plants.map((plant, index) => {
        return (
            <tr key={index}>
                <td>{plant.plantName}</td>
                <td><ImageSearch name={plant.plantName}/></td>
                <td>{plant.typeOfPlant}</td>
                <td>{plant.lightingNeeds}</td>
                <td>{plant.waterNeeds}</td>
                <td>{plant.fertilizerNeeds}</td>
                <td>
                    <Button1 onClick={() => {props.viewOn(); props.viewPlant(plant)}}>View</Button1>
                    <Button2 onClick={()=>{props.deletePlant(plant); deleteGarden()}}>Delete</Button2>
                </td>
            </tr>
        )
        })
    }
    return (
        <>
            <h2>MyGarden</h2>

            <Table striped>
                <thead>
                    <tr>
                        <th>Plant</th>
                        <th>Image</th>
                        <th>Type</th>
                        <th>Lighting Needs</th>
                        <th>Water Needs</th>
                        <th>Fertilizer Needs</th>

                    </tr>
                </thead>
                <tbody>
                    {gardenMapper()}
                </tbody>
            </ Table>

        </>
    )
}
export default GardenTable;
import React, {useState} from 'react';
import styled from 'styled-components';
import { Button, Table } from 'reactstrap'
// import './Plant.css'

const Button1 = styled.button`
background-color: #CCCC00;
margin-right: 20px;
width: 100px;
`
const Button2 = styled.button`
background-color: rgb(65, 105, 65);
width: 100px;
`

const DisplayPlants = (props) => {

    const plantMapper = () =>{
        return props.plants.map((plant, index) =>{
            return(
            <tr key={index}>
                <th scope='row'>{plant.plantName}</th>
                <td>{plant.typeOfPlant}</td>
                <td>{plant.lightingNeeds}</td>
                <td>{plant.waterNeeds}</td>
                <td>{plant.fertilizerNeeds}</td>
                <td>
                    <Button1 onClick={()=>{props.gardenModalOn(); props.addToGarden(plant)}}>MyGarden <b>+</b></Button1>
                    <Button2 onClick={() => {props.viewOn(); props.viewPlant(plant)}}>View</Button2>
                </td>
            </tr>
            )
        })
    }
    return (
        <>
            <h2>Plant Index</h2>
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
                    {plantMapper()}
                </tbody>
            </Table>
        </>
    )
};

export default DisplayPlants;
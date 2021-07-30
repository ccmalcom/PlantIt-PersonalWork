import React from 'react';
import { Image } from 'rebass';
import styled from 'styled-components';
import ImageSearch from './PlantImage';

const Button1 = styled.button`
background-color: #CCCC00;
margin-right: 20px;
width: 100px;
`
const Button2 = styled.button`
background-color: rgb(65, 105, 65);
width: 100px;
`
const PlantMapper = (props) =>{

    return props.currentTableData.map((plant, index) =>{
        return(
        <tr key={index}>
            <th scope='row'>{plant.plantName}</th>
            <td><ImageSearch name={plant.plantName}/></td>
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

export default PlantMapper;
// ! When you click 'view plant' this will toggle


import React, {useState} from 'react';
import { Modal } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import ImageSearch from './plantTable/PlantImage';
import styled from 'styled-components';

const ModalBody = styled.div`
    margin: auto;
    text-align: center
`
const ModalHeader = styled.div`
    display: flex;
    height: auto;
    width: 57%;
    justify-content: space-between;
    align-items: center
`
const ModalFooter = styled.div`
    display: flex;
    padding: 10px;
    justify-content: center
`

function PlantView(props) {
    const [editPlantName, setEditPlantName] = useState(props.plantToView.plantName)
    const [editTypeOfPlant, setEditTypeOfPlant] = useState(props.plantToView.typeOfPlant)
    const [editLightingNeeds, setEditLightingNeeds] = useState(props.plantToView.lightingNeeds)
    const [editWaterNeeds, setEditWaterNeeds] = useState(props.plantToView.waterNeeds)
    const [editFertilizerNeeds, setEditFertilizerNeeds] = useState(props.plantToView.fertilizerNeeds)
    const [editNotes, setEditNotes] = useState(props.plantToView.notes)
    const [editing, setEditing] = useState(false);

    const plantUpdate = (e) => {
        e.preventDefault();
        fetch(`http://wd85-plant-it2.herokuapp.com/plant/${props.plantToView.plantName}`, {
            method: 'PUT',
            body: JSON.stringify({plantName:editPlantName, typeOfPlant:editTypeOfPlant, lightingNeeds:editLightingNeeds, waterNeeds:editWaterNeeds, fertilizerNeeds:editFertilizerNeeds, notes:editNotes}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.token
            })
        })
        .then(res => console.log(res))
        .then(setEditing(false))
        .then(()=>{props.fetchPlants()})
        .then(props.viewOff())
    };


    return (
    <Modal isOpen={true}
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    >
        <ModalHeader>
        <button onClick={props.viewOff}><FontAwesomeIcon icon={faArrowAltCircleLeft} size="3x"/></button>
            <h1>Details</h1>
        </ModalHeader>
        <hr style={{margin: '0'}}/>
        <ModalBody>
            <dl>
                {editing ?
                <input type="text" value={editPlantName} onChange={(e) => setEditPlantName(e.target.value)}/> :
                <h3>{props.plantToView.plantName}</h3>
                }
                <ImageSearch name={props.plantToView.plantName}/>
                <br />
                <dt>Type of Plant:</dt>
                {editing?
                <input type="text" name="type" value={editTypeOfPlant} onChange={(e) => setEditTypeOfPlant(e.target.value)}/>
                : <dd>{props.plantToView.typeOfPlant}</dd>
                }
                <dt>Lighting Needs:</dt>
                    {editing ? 
                    <input type="text" value={editLightingNeeds} onChange={(e) => setEditLightingNeeds(e.target.value)} /> :
                    <dd>{props.plantToView.lightingNeeds}</dd>}
                <dt>Water Needs:</dt>
                    {editing ? 
                    <input type="text" value={editWaterNeeds} onChange={(e) => setEditWaterNeeds(e.target.value)}  /> :
                    <dd>{props.plantToView.waterNeeds}</dd>}
                <dt>Fertilizer Needs:</dt>
                    {editing ? 
                    <input type="text" value={editFertilizerNeeds} onChange={(e) => setEditFertilizerNeeds(e.target.value)}/> :
                    <dd>{props.plantToView.fertilizerNeeds}</dd>}
                <dt>Notes:</dt>
                    {editing ? 
                    <input type="text" value={editNotes} onChange={(e) => setEditNotes(e.target.value)}/> :
                    <dd>{props.plantToView.notes}</dd>}
            </dl>
            {editing ? 
            <button onClick={plantUpdate}>Submit changes</button>
            : null}
        </ModalBody>
        <hr style={{margin: '0'}}/>
        <ModalFooter>
            {/* {props.token.user.id === props.plantToView.creator ? console.log('yes!') : console.log('No!')} */}
        <button onClick={()=>{setEditing(true)}}>Edit Details</button>
        <button onClick={()=>{props.gardenModalOn(); props.addToGarden(props.plantToView); props.viewOff()}}>MyGarden <b>+</b></button>
        {localStorage.UUID == props.plantToView.creator ?
        <button onClick={()=>{props.deleteModalOn(); props.deleteThisPlant(props.plantToView); props.viewOff()}}>Delete</button>
        : null}
        </ModalFooter>
    </Modal>
    );
}

export default PlantView;
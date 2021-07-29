import React, {useState, useMemo} from 'react';
import styled from 'styled-components';
import { Button, Table } from 'reactstrap'
import Pagination from '../../../Pagination';
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
// hook to cause table to re-render when sort button pressed

const DisplayPlants = (props) => {
  
    let PageSize = 8;
    const [currentPage, setCurrentPage] = useState(1);
    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return props.plants.slice(firstPageIndex, lastPageIndex)    
    }, [currentPage, PageSize, props.plants])

    const plantMapper = () =>{
        return currentTableData.map((plant, index) =>{
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
            {/* <button onClick={props.sortByName}>Sort By Name</button> */}
            {/* <button onClick={props.sortByRecent}>Sort By Recent</button> */}
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
            <Pagination
                className='pagination-bar'
                currentPage={currentPage}
                totalCount={props.plants.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
            />
        </>
    )
};

export default DisplayPlants;
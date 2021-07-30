import React, {useState, useMemo} from 'react';
import styled from 'styled-components';
import { Table } from 'reactstrap'
import Pagination from '../../../Pagination';
import PlantMapper from './Plant';

// hook to cause table to re-render when sort button pressed

const DisplayPlants = (props) => {
  
    let PageSize = 8;
    const [currentPage, setCurrentPage] = useState(1);
    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return props.plants.slice(firstPageIndex, lastPageIndex)    
    }, [currentPage, PageSize, props.plants])

    return (
        <>
            {/* <button onClick={props.sortByName}>Sort By Name</button> */}
            {/* <button onClick={props.sortByRecent}>Sort By Recent</button> */}
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
                    <PlantMapper plants={props.plants} currentTableData={currentTableData} gardenModalOn={props.gardenModalOn} addToGarden={props.addToGarden} viewOn={props.viewOn} viewPlant={props.viewPlant}/>
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
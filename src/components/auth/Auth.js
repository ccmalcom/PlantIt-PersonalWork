import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Register from './Register';
import Login from './Login';
import styled from 'styled-components';

const Button1 = styled.button `
border: none;
height: 6vh;
border-radius: 15px;
background-color: rgb(65, 105, 65, 0.9);
font-family: 'Yeseva One';
font-size: 1.5em;
color: white;
&:hover{
    background-color: #6C757D;
    border-color: #6C757D;
`
const Button2 = styled.button `
border: none;
height: 6vh;
border-radius: 15px;
background-color: #6C757D;
font-family: 'Yeseva One';
font-size: 1.5em;
color: white;
&:hover{
    background-color: #51585E
    ;
    border-color: #51585E
    ;
`

const ModalDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center
`

const Auth = (props) => {
    const {
        className
    } = props;

    const [modal, setModal] = useState(false);
    const [nestedModal, setNestedModal] = useState(false);
    const [closeAll, setCloseAll] = useState(false);

    const toggle = () => setModal(!modal);
    const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
    }
    const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
    }

    return(

    <div className='Box'>
        
        <Button1 id='Start' onClick={toggle}>Start Planting!</Button1>
        
        <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalBody>
        <ModalDiv>
        <Login updateToken={props.updateToken} />
        <br />
        <Button2 onClick={toggleNested}>Register Now!</Button2>

        </ModalDiv>
        <Modal isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined}>
            <ModalHeader>Register now to start your garden!</ModalHeader>
            <ModalBody>
            <Register updateToken={props.updateToken} />
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={toggleNested}>Already have an account? Back to Login</Button>
            </ModalFooter>
            </Modal>
        </ModalBody>
        </Modal>
    </div>
    )
}

export default Auth;
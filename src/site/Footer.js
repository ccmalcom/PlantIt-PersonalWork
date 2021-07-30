import {Row} from 'reactstrap';
import styled from 'styled-components';

const FooterStyle = styled.footer`
    height: 50px;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Footer = () => {
    return(
        <FooterStyle>
            <Row>
                <p style={{margin: '0'}}>Chase Malcom &copy; 2021</p>
            </Row>
        </FooterStyle>
    );
};

export default Footer;
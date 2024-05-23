import React, { Text } from 'react';
import totoro from '../images/totoro.jpeg';
import { Link } from '@mui/material';
import { Col, Row, Container } from 'react-bootstrap';
import './Introduction.css';

class Introduction extends React.PureComponent {

    render() {
        
        return (
            <div>
                <div className="row1">
                    <img height={300} width={550} src={totoro} alt="Logo" />
                    <div className="intro_title">
                        Welcome to Mandy Liu's Website!
                    </div>
                </div>
                
                <div className="row2">
                    <div style={{margin: "20px"}}>
                        <p>
                            <Container style={{color: 'green', marginBottom:"20px"}} fluid="md">
                            
                                <Row className="intro">
                                    <Col xs lg="4">Hello,</Col>
                                    <Col>Congrats! You found me :)</Col>
                                </Row>
                            </Container>
                        </p>
                        <p style={{margin: "20px"}}>
                            
                            For those who doesn't know me, nice to meet you! I was born and raised in China, 
                            <a 
                                href="https://www.google.com/maps/place/Guangdong+Province,+China/@22.7023333,108.1969345,6z/data=!3m1!4b1!4m6!3m5!1s0x315285f132af5c3f:0x2ed41c6f09259f29!8m2!3d23.1317099!4d113.26627!16zL20vMGg5dmg?entry=ttu" 
                                target="_blank">
                                GuangDong
                            </a>. A wonder coastal province with bunch of fresh seafood. We even have our own dialog, Cantonese.
                        </p>
                        <p style={{margin: "20px"}}>
                            I received a Bachelor's degree in Computer Engineering at 
                            University of Illinois, Urbana Champaign, with a GPA of 3.92.
                            Throughout my 4 years of education, I learned and fell in love with python and coding. Have made lots of friends
                            who share the same interests with me. I also love to play badminton and do outdoor activities.
                            
                        </p>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Introduction;
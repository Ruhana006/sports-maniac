import { Button, Card } from 'react-bootstrap';
import React from 'react';
import { useHistory } from 'react-router';
import './Team.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Team = (props) => {
    const { strTeam, strSport, idTeam, strTeamBadge, } = props.team;
   
    const history = useHistory();
    const handleExploreBtn = (idTeam) => {
        const url = `/team/${idTeam}`;
        history.push(url)
    }
    return (
        <div className="col-md-6 col-sm-10 col-lg-4 mt-5" >
            
            <Card className="card mb-3" style={{ width: '300px' }}>
                <Card.Img variant="top" src={strTeamBadge} style={{height:'200px',width:'250px'}} />
                <Card.Body>
                    <Card.Title><h2>{strTeam}</h2></Card.Title>
                    <Card.Text>
                        <h6>Sport Type : {strSport}</h6>
                    </Card.Text>
                    <Button className="exploreBtn" onClick={()=>handleExploreBtn(idTeam)}>Explore More <FontAwesomeIcon icon={faArrowRight} /></Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Team;
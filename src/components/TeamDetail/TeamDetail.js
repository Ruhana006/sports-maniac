import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import "./TeamDetail.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faFlag, faFutbol, faMars } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import maleImg from '../../images/male.png'
import femaleImg from '../../images/female.png'


const TeamDetail = (props) => {
    const { idTeam } = useParams();
    const [team, setTeam] = useState({});

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeam(data.teams[0]))
    }, [idTeam])


    // function getImg(){
    //   let isMale = true;
    //   return isMale ? <img src={maleImg} alt=""/> : <img src={femaleImg} alt=""/>;
    // }
    return (
        <div className="detail-area">
            <img src={team.strTeamBanner} alt="" />
            <div className="container mt-5 ">
                <div className="row about-team">
                    <div className=" col-md-6">
                        <h1>{team.strTeam}</h1>
                        <h3><FontAwesomeIcon icon={faArrowRight} /> Founded : {team.intFormedYear}</h3>
                        <h3><FontAwesomeIcon icon={faFlag} /> Country : {team.strCountry}</h3>
                        <h3><FontAwesomeIcon icon={faFutbol} /> Sport Type : {team.strSport}</h3>
                        <h3><FontAwesomeIcon icon={faMars} /> Gender : {team.strGender}</h3>

                    </div>
                    <div className="col-md-6">
                        {
                         `${team.strGender}` === "Male" ? <img src={maleImg} alt=""/> : <img src={femaleImg} alt=""/>
                        }
                    </div>

                </div>
                <p><h2>Description : </h2>{team.strDescriptionEN}</p>
            </div>
            <div className="icons p-5">
                <a href="http://www.facebook.com" target="_blank"><FontAwesomeIcon className="fa-4x" icon={faFacebook} /></a>
                <a href="http://www.twitter.com" target="_blank"><FontAwesomeIcon className="fa-4x" icon={faTwitter} /></a>
                <a href="http://www.youtube.com" target="_blank"><FontAwesomeIcon className="fa-4x" icon={faYoutube} /></a>
            </div>
        </div>
    );
};

export default TeamDetail;
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import "./TeamDetail.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight,faFlag,faFutbol, faMars } from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons'
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

    }, [])
    return (
        <div className="detail-area">
            <img src={team.strTeamBanner} alt="" />
            <div className="container mt-5">
                <div className="row about-team">
                    <div className=" col-md-6">
                        <h1>{team.strTeam}</h1>
                        <h3><FontAwesomeIcon icon={faArrowRight} /> Founded : {team.intFormedYear}</h3>
                        <h3><FontAwesomeIcon icon={faFlag} /> Country : {team.strCountry}</h3>
                        <h3><FontAwesomeIcon icon={faFutbol} /> Sport Type : {team.strSport}</h3>
                        <h3><FontAwesomeIcon icon={faMars} /> Gender : {team.strGender}</h3>
                        
                    </div>
                    <div className="col-md-6">
                        <img src={maleImg}/>
                    </div>

                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatum iste eum quam deleniti? Tenetur natus maxime esse beatae corrupti consequuntur ipsa, obcaecati nihil, culpa commodi labore laborum id quam explicabo architecto quaerat et nesciunt voluptates ad tempora aspernatur in placeat nostrum cumque! Ea, quod. Officiis quia aspernatur voluptatibus et provident ducimus esse veritatis optio vero odit tenetur dicta placeat non consequatur, eum voluptate ad deleniti laborum voluptatum soluta voluptas vel in vitae. Saepe cumque, ipsa voluptatem quae maxime adipisci. Placeat nobis possimus nisi hic, pariatur dolore quibusdam sunt vel nostrum corporis, quis, aspernatur rerum itaque eligendi autem eum fuga doloremque officiis excepturi totam cumque. Tempora, quos aspernatur laudantium reprehenderit distinctio sapiente. Praesentium, aliquid rem? Omnis voluptas obcaecati et cupiditate dolorum molestiae. Adipisci quam, incidunt iure aliquam harum nobis culpa officiis consequatur est aspernatur eaque facilis maxime voluptatem nam minus cupiditate a odit iusto minima eos neque fugiat odio distinctio. Esse impedit expedita nisi deserunt illum voluptate itaque, sit vel delectus? Unde a nulla repellat eum quos! Veritatis labore, eligendi, officia doloribus quibusdam repudiandae distinctio atque provident deleniti ad nam possimus esse totam velit, pariatur mollitia. Enim nesciunt illo possimus id rem fuga unde repellendus tempore quos, dolorem nobis alias veniam ipsam vel perspiciatis harum incidunt. Deleniti ab magnam voluptate velit vel mollitia vitae explicabo totam eligendi dolore quos itaque soluta, adipisci illo corporis in earum eius voluptatem quisquam nam. Qui nobis sint eum, consequuntur maxime ut aliquid libero magni doloribus ratione quis perspiciatis vitae, labore et dignissimos beatae odio.</p>
            </div>
            <div className="icons p-5">
             <div><FontAwesomeIcon className="fa-4x" icon={faFacebook} /></div>
             <div><FontAwesomeIcon className="fa-4x" icon={faTwitter} /></div>
             <div><FontAwesomeIcon className="fa-4x" icon={faYoutube} /></div>
            </div>
        </div>
    );
};

export default TeamDetail;
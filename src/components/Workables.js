import React from "react";
import "./Workables.css";
import icon from "../images/icon.png"
import dignitas from "../images/dignitas.png"
import loop from "../images/loop.png"
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";

export default function Workables() {
    return (
        <div className="Workables">
            <Accordion>
                <Card style={{ backgroundColor: "#343a40" }}>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="dark" eventKey="0">
                            ImageToSpeech
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body><a href="https://devpost.com/software/imagetospeech" target="_blank">
                            <img src={icon} alt="ImageToSpeech"></img></a>
                            <p>This is ImageToSpeech, a Chrome extension using Javascript and the Google Vision API. Won the HackCWRU V Maker Award. </p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card style={{ backgroundColor: "#343a40" }}>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="dark" eventKey="1">
                            CSGO Theorycraft Articles
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body><a href="https://byrriceblog.wordpress.com/2017/12/26/repository-of-written-content/" target="_blank">
                            <img src={dignitas} alt="My Writing Portfolio for Dignitas"></img></a>
                            <p>This is my portfolio of CSGO articles for Team Dignitas. Links to Wordpress which has the full repository of written content.</p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card style={{ backgroundColor: "#343a40" }}>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="dark" eventKey="2">
                            Loop
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            <a href="https://cwru-eecs290.itch.io/loop" target="_blank">
                            <img src={loop} alt="Loop, a videogame."></img></a>
                            <p>This is Loop, a fairly simple platforming videogame written using Unity. Demo is fully playable above.</p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    );
}
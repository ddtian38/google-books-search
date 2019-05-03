import React from "react"
import {Row, Col} from "../Grid/index"
import Button from "../Buttons/index"
import "./style.css"



export function Card({title, author, secondButton, viewLink, imgLink, summary, secondButtonHandler}){


    return(<li>
        <div className = "card" >
            <Row>
                <Col size="s9">
                    <Row><h4>{title}</h4></Row>
                    <Row><h5>{(author) ? ("By: " + author) : ("No author is indicated.")}</h5></Row>
                </Col>
                <Col size="s3">
                    <a href={viewLink}><Button>View</Button></a>
                    <Button onClicked = {secondButtonHandler}>{secondButton}</Button>
                </Col>
            </Row>
            <Row>
                <Col size = "s3">
                    <img src={imgLink} alt="Book"/>
                </Col>
                <Col size="s9">
                    <p> {(summary) ? ("Summary: " + summary):("No summary exists")}</p>
                </Col>
            </Row>

        </div>

    </li>
    )
}
export function CardContainer(props){
    return( <div className = "card-container">
        <ul>
             {props.children}    
        </ul>   
    </div>
    )
}

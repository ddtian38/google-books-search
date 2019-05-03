import React, {Component} from "react"
import { CardContainer, Card } from "../Components/Cards";
import { Container } from "../Components/Grid";

class Saved extends Component{
    state = {
        books: []
    }

    
    
    render(){
        return(
            <Container>
                <CardContainer>
                    <h3>Saved</h3>
                    
                    <Card
                    key = {1}
                    title={"John Doe"}
                    author= {"John Doe"}
                    viewLink = {"John Doe"}
                    imgLink = {"https://via.placeholder.com/150"}
                    summary = {"John Doe"}
                    secondButton = {"Delete"}
                    onClicked ={"hi"} />
                </CardContainer>
            </Container>
        )
    }
}

export default Saved
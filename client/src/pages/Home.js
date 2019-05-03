import React, {Component} from "react"
import {Container} from "../Components/Grid/index";
import Form from "../Components/Form/index"
import { CardContainer, Card } from "../Components/Cards";
import API from "../utils/API"


class Home extends Component{

    state = {
        search: "",
        results: []
    }

    onChangeHandler = (event)=>{
            let {name, value} = event.target
            console.log(value)
            this.setState({[name]: value})


    }

    searchHandler = (event)=>{
        event.preventDefault();
        console.log(this.state.search)
        API.search(this.state.search)
            .then((res) => {console.log(res)})
            .catch((err)=> {console.log(err)})
    }
    render(){

        return(
            <Container>
                <Form
                onChange = {this.onChangeHandler}
                value = {this.state.search}
                onClicked = {this.searchHandler}
                />
                <CardContainer>
                    <h3>Results</h3>
                    <Card/>
                    <Card/>
                    <Card/>
                </CardContainer>
            </Container>
        )


    }

}

export default Home;
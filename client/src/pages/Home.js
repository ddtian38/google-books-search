import React, {Component} from "react"
import {Container} from "../Components/Grid/index";
import Form from "../Components/Form/index"
import { CardContainer, Card } from "../Components/Cards";
import API from "../utils/API"


class Home extends Component{

    //Setting initial states
    state = {
        search: "",
        results: []
    }

    onChangeHandler = (event)=>{
            let {name, value} = event.target
            this.setState({[name]: value})

    }

    searchHandler = (event)=>{
        event.preventDefault();
        API.search(this.state.search)
            .then((res) => {
                console.log(res)
                this.setState({results: res.data.items})
            })
            .catch((err)=> {console.log(err)})
    }

    saveBook = (bookObj) => {
           
            console.log("xxxx")
            // console.log(bookObj)
            API.saveBook(bookObj)
    }

    render(){
        console.log(this.state.results)
        return(
            <Container>
                <Form
                onChange = {this.onChangeHandler}
                value = {this.state.search}
                onClicked = {this.searchHandler}
                />
                <h3>Results</h3>
                <CardContainer>
                   {(this.state.results.length === 0) ? (<h4>No Results found!</h4>) :
                     (this.state.results.map( ({volumeInfo}, index) => {
                        console.log(volumeInfo.imageLinks)
                         return  <Card
                         key = {index}
                         title={volumeInfo.title}
                         author= {
                             volumeInfo.authors.join(", ")
                        }
                         viewLink = {volumeInfo.infoLink}
                         imgLink = {(volumeInfo.imageLinks) ? (volumeInfo.imageLinks.thumbnail): ("https://via.placeholder.com/150")}
                         summary = {volumeInfo.description}
                         secondButton = {"Save"}
                         secondButtonHandler ={()=>{
                            let image;
                            (volumeInfo.imageLinks) ? (image = volumeInfo.imageLinks.thumbnail): (image = "https://via.placeholder.com/150")
                            this.saveBook(
                            
                            {
                                title: volumeInfo.title,
                                author: volumeInfo.authors.join(", "),
                                synposis: volumeInfo.description,
                                viewLink: volumeInfo.infoLink,
                                imageLink: image,
                            } 

                         )}}
                         />
                        }
                        )
                        )
                    }
                </CardContainer>
            </Container>
        )


    }

}

export default Home;
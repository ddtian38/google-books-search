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

    componentDidMount(){
        API.search("Band of Brothers")
        .then((res) => {
            this.setState({results: res.data.items})   
        })
        .catch((err)=> {console.log(err)})
    }

    onChangeHandler = (event)=>{
            let {name, value} = event.target
            this.setState({[name]: value})

    }

    searchHandler = (event)=>{
        event.preventDefault();
        API.search(this.state.search)
        .then((res) => {
            console.log(res.data)
            console.log(res.data.totalItems)
            if (res.data.totalItems > 0){
                return this.setState({results: res.data.items})
            }
            return this.setState({results: []}) 
        })
            .catch((err)=> {console.log(err)})
    }

    saveBook = (bookObj) => {
            API.saveBook(bookObj)
    }

    render(){
        console.log(this.state.results.length)
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
                         return  <Card
                         key = {index}
                         title={volumeInfo.title}
                         author= {
                             (volumeInfo.authors) ? volumeInfo.authors.join(", ") : ("No author indicated")
                        }
                         viewLink = {volumeInfo.infoLink}
                         imgLink = {(volumeInfo.imageLinks) ? (volumeInfo.imageLinks.thumbnail): ("https://via.placeholder.com/150")}
                         summary = {volumeInfo.description}
                         secondButton = {"Save"}
                         secondButtonHandler ={()=>{

                            let image, author = volumeInfo.authors;

                            if(author){
                                author = author.join(", ")
                            }else{
                                author = "No author indicated"
                            }
                            (volumeInfo.imageLinks) ? (image = volumeInfo.imageLinks.thumbnail): (image = "https://via.placeholder.com/150")

                            this.saveBook({
                                title: volumeInfo.title,
                                author: author,
                                synopsis: volumeInfo.description,
                                viewLink: volumeInfo.infoLink,
                                imageLink: image,
                            } 
                         )
                       }}
                         />
                        })
                        )
                    }
                </CardContainer>
            </Container>
        )


    }

}

export default Home;
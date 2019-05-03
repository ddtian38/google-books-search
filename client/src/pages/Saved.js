import React, {Component} from "react"
import { CardContainer, Card } from "../Components/Cards";
import { Container } from "../Components/Grid";
import API from "../utils/API"

class Saved extends Component{
    state = {
        books: []
    }

    componentDidMount(){
        this.getSavedBooks()
    }

    getSavedBooks = () => {
        API.getBooks()
        .then(({data}) => {
            this.setState({books: data})
        })
    }

    deleteSavedBooks = (id) => {
        console.log(id)
        API.deleteBook(id)        
        .then(({data}) => {
            this.getSavedBooks()
        })
    }
    
    
    render(){
        console.log(this.state.books.length)
        return(
            <Container>
                <CardContainer>
                    <h3>Saved</h3>
                    {
                    
                    (this.state.books.length === 0) ? (<h4>You have not saved any books yet!</h4>) :
                     (this.state.books.map( (book) => {
                         return  <Card
                         key = {book._id}
                         title={book.title}
                         author= {book.author}
                         viewLink = {book.viewLink}
                         imgLink = {book.imageLink}
                         summary = {book.synopsis}
                         secondButton = {"Delete"}
                         secondButtonHandler ={()=>{this.deleteSavedBooks(book._id)}}
                         />
                        })
                        )
                    }

                </CardContainer>
            </Container>
        )
    }
}

export default Saved
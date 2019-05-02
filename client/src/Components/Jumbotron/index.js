import React from "react"

const Jumbotron = ({children}) =>{
    const style = {
        height: "300px",
        textAlign: "center",
        backgroundColor: "lightgray",
        margin: "10px auto",
        padding: "10px"
    }
    return <div className="jumbotron" style={style}>

            <h3>(React) Google Book Search</h3>
            <h4>Search for and Save Books of Interest</h4>

    </div>
}

export default Jumbotron
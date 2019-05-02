import React from "react"

const Input = (props) => {

    return (<div class="input-field col s6">
        <input {...props} class="validate"/>
        <label for="search">Search</label>
        </div>)
    

}

export default Input
import React from "react"

const Button = (props) => {
    return(
        <button class="btn waves-effect waves-light" {...props}>{props.children}
        <i class="material-icons right">send</i>
      </button>
    )
}

export default Button;
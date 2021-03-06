import React from "react"

const Button = ({onClicked, children}) => {
    return(
        <button className="btn waves-effect waves-dark" onClick = {onClicked}>{children}</button>
    )
}

export default Button;
import React from "react";

class Pokemon extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>{this.props.name}</div>
        )
    }
}

export default Pokemon
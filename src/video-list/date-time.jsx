import React from "react";

class DateTime extends React.Component {
    render() {
        return (
            <p className="date">{this.props.date}</p>
        )
    }
}

export default DateTime;
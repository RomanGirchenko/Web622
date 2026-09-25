import React from "react";

class Form extends React.Component {
    state = {
        firstName: "",
        email: ""
    }

    update1 = (event) => {
        this.setState({ firstName: event.target.value })
    }

    update2 = (event) => {
        this.setState({ email: event.target.value })
    }

    render() {
        return (
            <>
                <hr />
                <form action="">
                    <input value={this.state.firstName} onChange={this.update1} />
                    <input value={this.state.email} onChange={this.update2} />
                </form>
                <hr />
                <p>{this.state.firstName}</p>
                <p>{this.state.email}</p>
            </>
        )
    }
}

export default Form;
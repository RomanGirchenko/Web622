import React from "react";

class Test extends React.Component {

    buttonHandler = () => {
        console.log("work");
    }

    render() {
        console.log("render 1");
        return (
            <>
                {
                    console.log("return 1")
                }
                <div>
                    <button onClick={this.buttonHandler}>Push</button>
                </div>
            </>
        )
    }
}

export default Test;
import React from "react";

class Profile extends React.Component {

    constructor(props){
        super(props);

        //Create State
        this.state={
            count: 0,
            count2: 11
        }
    }

    componentDidMount() {
        //Best place to make an API Call
        console.log("componentDidMount");
    }

  render() {
    const {count} = this.state;

    return (
      <>
        <h1>Profile Class Component</h1>
        <h2>Name : {this.props.name}</h2>
        {/* <h3>Count: {this.state.count} </h3> */}
        <h3>Count: {count}</h3>
        <button onClick={() => {
            //we do not mutate state directly
            //Never do this.state=something directly
            this.setState({
                count: 1
            });
        }}>setState</button>
      </>
    );
  }
}

export default Profile;

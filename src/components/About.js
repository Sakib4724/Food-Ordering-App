import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileComponent from "./ProfileClass";
import React from "react";
import UserContext from "../utils/UserContext";

// const About = () => {
//     return(
//         <>

//         <h1>About Us Page</h1>
//         <p>Hello, Good Morning !</p>

//         {/* <Outlet /> */}
//         <Profile name={"Sakib"}/>
//         <ProfileComponent name={"Shaikh"}/>

//         </>
//     )
// };

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy name",
        location: "Dummy location",
      },
    };
  }

  async componentDidMount() {
    //bestplacetomakeanapicall

    const data = await fetch("https://api.github.com/users/sakibshaikh24");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {}

  render() {
    return (
      <>
        {/* <UserContext.Consumer>
          {
            ({user}) => (
              <h4 className="font-bold text-xl p-10">{user.name} - {user.email}</h4>
            )             
          }
        </UserContext.Consumer> */}

        {/* <Outlet /> */}

        {/* <Profile name={"Sakib"} />
        <ProfileComponent name={"Shaikh"} /> */}

        <div className="p-10 font-pop2">
          <h1 className="font-bold text-2xl text-center bg-yellow-100 text-red-900 p-2 border border-r-2 rounded-lg">
            About Us - Barakat
          </h1>
          <p>
            Welcome to Barakat, your ultimate destination for delicious meals
            delivered right to your doorstep. At Barakat, we're passionate about
            food and committed to bringing you a seamless and delightful dining
            experience.
          </p>
        </div>

        <div className="p-10 font-pop2">
          <h1 className="font-bold text-2xl text-center bg-yellow-100 text-red-900 p-2 border border-r-2 rounded-lg">
            Our Story
          </h1>
          <p>
            Barakat started with a simple idea: to connect food lovers with the
            best restaurants in town. Founded in 2024, we've quickly grown to
            become one of the leading food delivery platforms, serving hungry
            customers across all over the India. Our journey began with a vision
            to revolutionize the way people order food, making it easier,
            faster, and more convenient than ever before.
          </p>
        </div>

        <div className="p-10 font-pop2">
          <h1 className="font-bold text-2xl text-center bg-yellow-100 text-red-900 p-2 border border-r-2 rounded-lg">
            Our Mission
          </h1>
          <p>
            At Barakat, our mission is to satisfy your cravings and exceed your
            expectations with every bite. We're on a mission to deliver not just
            meals, but moments of joy and satisfaction to your doorstep. Whether
            you're craving comfort food, exploring new cuisines, or looking for
            healthy options, we've got you covered.
          </p>
        </div>
      </>
    );
  }
}

export default About;

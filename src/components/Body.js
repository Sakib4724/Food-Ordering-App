import { restrauntList } from "../constants";
import { RestrauntCard } from "./RestrauntCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import React from "react";

const Body = () => {
  // console.log("Body comp");
  const [searchInput, setSearchInput] = useState("");
  const [allRestraunts, setAllRestraunts] = useState([]);
  const [filteredRestraunts, setFilteredRestraunts] = useState([]);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    // console.log("use-Effect");

    //API Call
    getRestraunts();
  }, []);

  async function getRestraunts() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1211588&lng=72.8979674&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

    setAllRestraunts(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestraunts(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  // console.log("render");

  // const offline = false;
  // const isOnline = useOnline();

  // if(!isOnline) {
  //   return <h2>Offline, please check your internet connection!!</h2>
  // }

  //Not render component (Earyly return)
  if (!allRestraunts) return null;

  // if(filteredRestraunts?.length === 0)
  //   return <h1>No Restaurant match your filter!!</h1>

  return allRestraunts?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-2 bg-yellow-50 my-3 mx-auto max-w-lg w-80">
        <input
          type="text"
          className="search-input focus:bg-green-50 p-2 m-2"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="search-btn p-2 m-2 bg-red-900 hover:bg-gray-700 text-white rounded-lg font-pop2 font-normal"
          onClick={() => {
            //need to filter the data
            //update the state of the restraunts
            const data = filterData(searchInput, allRestraunts);
            setFilteredRestraunts(data);
          }}
        >
          Search
        </button>

        {/* ************************************* */}

        {/* <input
          value={user.name}
          onChange={(e) =>
            setUser({
              ...user,
              name: e.target.value,
            })
          }
        />

        <input
          value={user.email}
          onChange={(e) =>
            setUser({
              ...user,
              email: e.target.value,
            })
          }
        /> */}
      </div>

      <div className="restraunt-list flex flex-wrap">
        {/* {filteredRestraunts.map((restraunt) => {
          return <RestrauntCard {...restraunt.info} key={restraunt.info.id} />;
        })} */}

        {filteredRestraunts.map((restraunt) => {
          return (
            <Link
              to={"/restaurant/" + restraunt.info.id}
              key={restraunt.info.id}
            >
              <RestrauntCard {...restraunt.info} />
            </Link>
          );
        })}

        {/* <RestrauntCard {...restrauntList[0].info} />
        <RestrauntCard {...restrauntList[1].info} />
        <RestrauntCard {...restrauntList[2].info} />
        <RestrauntCard {...restrauntList[3].info} />
        <RestrauntCard {...restrauntList[4].info} />
        <RestrauntCard {...restrauntList[5].info} />
        <RestrauntCard {...restrauntList[6].info} />
        <RestrauntCard {...restrauntList[7].info} /> */}

        {/* <RestrauntCard restraunt={restrauntList[0]} />
        <RestrauntCard restraunt={restrauntList[1]} />
        <RestrauntCard restraunt={restrauntList[2]} />
        <RestrauntCard restraunt={restrauntList[3]} />
        <RestrauntCard restraunt={restrauntList[4]} />
        <RestrauntCard restraunt={restrauntList[5]} />
        <RestrauntCard restraunt={restrauntList[6]}/>
        <RestrauntCard restraunt={restrauntList[7]}/> */}
      </div>
    </>
  );
};

export default Body;

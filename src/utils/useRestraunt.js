import { useState, useEffect } from "react"
import { FETCH_MENU_URL } from "../constants"

const useRestraunt = (id) => {
    const [restraunt, setRestraunt] = useState(null);
    const [menu, setMenu] = useState([]);

    //Get Data from API
    useEffect(() => {
        getRestrauntInfo();
      }, []);
    
      async function getRestrauntInfo() {
        const data = await fetch( FETCH_MENU_URL + id );
        const json = await data.json();
        // console.log(json.data);
        setRestraunt(json.data?.cards[2]?.card?.card?.info);
        setMenu(json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel)
      }

    //return restraunt data
    return {
        restraunt,
        menu
    };
}

export default useRestraunt;
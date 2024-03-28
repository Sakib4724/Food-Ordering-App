import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  // const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="border border-black p-2 m-2">
      <h3 className="font-bold text-xl">{title}</h3>
      <button
        onClick={() => setIsVisible()}
        className="cursor-pointer underline"
      >
        {isVisible ? "Hide" : "Show"}
      </button>

      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  //   const [sectionConfig, setSectionConfig] = useState({
  //     showAbout: false,
  //     showTeam: false,
  //     showCareers: false,
  //     showProduct: false,
  //     showDetails: false
  //   });

  const [visibleSection, setVisibleSection] = useState("about");

  const [authorized, setAuthorized] = useState(true);

  const navigate = useNavigate();

  // useEffect(() => {
  //   const checkAuthorization = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:4000/api", {
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //       });

  //       setAuthorized(true);
  //     } catch (error) {
  //       setAuthorized(false);
  //     }
  //   };

  //   checkAuthorization();
  // }, []);

  useEffect(() => {
    const checkAuthorization = async () => {
      try {
        const response = await fetch("http://localhost:4000/instamart", {
          method: "POST",
          headers: {
            authorization: JSON.parse(localStorage.getItem("token")),
          },
        });

        const result = await response.json();

        if (result.error) {
          setAuthorized(false);
        } else {
          setAuthorized(true);
        }
      } catch (error) {
        console.log(error);
      }
    };

    checkAuthorization();
  }, []);

  return (
    <>
      {authorized ? (
        <>
          <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>

          <Section
            title={"About Instamart"}
            description={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque quas repellat minima, quia architecto sequi consequatur fugiat aliquam nihil explicabo impedit quisquam est, inventore ab accusamus vitae veritatis! Ratione pariatur delectus repudiandae officia dicta quasi sunt hic cupiditate, quos, at illo adipisci quas harum? Consectetur rerum, odit harum fuga quae autem culpa et, repellat quo assumenda optio cumque ut unde. Atque ipsum iure recusandae aspernatur. Tenetur magni voluptatibus possimus expedita perspiciatis, eveniet a deserunt sed! Ducimus eos enim ipsa expedita sequi amet libero cum quo sapiente rerum laboriosam iure soluta exercitationem voluptate, et totam illo explicabo officia repellendus eligendi. Molestiae."
            }
            isVisible={visibleSection === "about"}
            setIsVisible={() => setVisibleSection("about")}
          />

          <Section
            title={"Team Instamart"}
            description={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque quas repellat minima, quia architecto sequi consequatur fugiat aliquam nihil explicabo impedit quisquam est, inventore ab accusamus vitae veritatis! Ratione pariatur delectus repudiandae officia dicta quasi sunt hic cupiditate, quos, at illo adipisci quas harum? Consectetur rerum, odit harum fuga quae autem culpa et, repellat quo assumenda optio cumque ut unde. Atque ipsum iure recusandae aspernatur. Tenetur magni voluptatibus possimus expedita perspiciatis, eveniet a deserunt sed! Ducimus eos enim ipsa expedita sequi amet libero cum quo sapiente rerum laboriosam iure soluta exercitationem voluptate, et totam illo explicabo officia repellendus eligendi. Molestiae."
            }
            isVisible={visibleSection === "team"}
            setIsVisible={() => setVisibleSection("team")}
          />

          <Section
            title={"Careers Instamart"}
            description={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque quas repellat minima, quia architecto sequi consequatur fugiat aliquam nihil explicabo impedit quisquam est, inventore ab accusamus vitae veritatis! Ratione pariatur delectus repudiandae officia dicta quasi sunt hic cupiditate, quos, at illo adipisci quas harum? Consectetur rerum, odit harum fuga quae autem culpa et, repellat quo assumenda optio cumque ut unde. Atque ipsum iure recusandae aspernatur. Tenetur magni voluptatibus possimus expedita perspiciatis, eveniet a deserunt sed! Ducimus eos enim ipsa expedita sequi amet libero cum quo sapiente rerum laboriosam iure soluta exercitationem voluptate, et totam illo explicabo officia repellendus eligendi. Molestiae."
            }
            isVisible={visibleSection === "career"}
            setIsVisible={() => setVisibleSection("career")}
          />
        </>
      ) : (
        <h1 className="font-pop2 font-bold text-2xl text-center flex items-center justify-center h-screen">
          Please Log-in to access this Page !
        </h1>
      )}

      {/* <AboutInstamart />
        <DetailsofInstamart />
        <TeamInstamart />
        <Product />
        <Careers /> */}

      {/* {
          authorized ? (
            <h1>Protected Component..!!</h1>
          ) : (
            <h1>Unauthorized..!!</h1>
          )
        } */}
    </>
  );
};

export default Instamart;

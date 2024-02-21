import React from "react";

const Shimmer = () => {
    return(

        <>
            <div className="restraunt-list flex flex-wrap">
                {/* <div className="shimmer-card"></div> */}
                {
                    Array(21).fill("").map((e, index) => <div className="shimmer-card w-[200px] h-[200px] bg-gray-200 m-2" key={index}> </div>)
                }
            </div>
        </>
        
    );
};

export default Shimmer;
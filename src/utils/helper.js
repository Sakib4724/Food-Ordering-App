export function filterData(searchInput, restraunts){
    const filterData = restraunts.filter((restraunt) => 
      // const resName = restraunt.info.name.toUpperCase();
      // const searchText = searchInput.toUpperCase();
      // restraunt.info.name.includes(searchInput);
      restraunt?.info?.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    // console.log("fun...");
    return filterData;
  }
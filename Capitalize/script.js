function capitalize(name) {

    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
  
    return capitalizedName;
  }
  

  const nam = "hello";
  const letter = nam[0];
  
  
  const result =  nam[0] == nam[0].toUpperCase ? capitalize(nam) : nam;
  console.log("Name is: " +result);
  
 
  
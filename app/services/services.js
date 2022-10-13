export const getData = async (param) => {
    try {
      const data = await fetch(`https://stranger-project-server.onrender.com`);
      const dataJSON = await data.json();
      return dataJSON;
    } catch (error) {
      console.log("Error:", error);
    }
  };
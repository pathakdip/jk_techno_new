export default function API(){
const getDataUsingGet = (username,password) => {
    //GET request
    var data=`http://jk-techno.com/login?contact=${username}&password=${password}`;
    console.log(data);
    fetch(data, {
      method: 'GET',
      //Request Type
    })
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {
        //Success
        alert(JSON.stringify(responseJson));
        console.log(responseJson);
      })
      //If response is not in json then in error
      .catch((error) => {
        //Error
        alert(JSON.stringify(error));
        console.error(error);
      });
  };
}
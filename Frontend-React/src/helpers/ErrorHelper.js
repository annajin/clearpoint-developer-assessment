export default class ErrorHelper {
   static showError(error){
    const status =  error.response ? error.response.status : "";
    const message = error.response ? error.response.data : error;
    alert("Error " + status + ": " + message)
  }
}
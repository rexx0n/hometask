import '../css/style.css'
import locations from "./store/locations";

locations.init().then((res) => {
  console.log(res);
  console.log(locations);
  
});

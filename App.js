import {NavigationContainer} from "@react-navigation/native"
import axios from "axios";
import { Navigation } from "./src/navigation/Navigation.jsx";

axios.defaults.baseURL="https://api.themoviedb.org/3/movie"
axios.defaults.params={
  api_key:"ef60bf68e4f4268b541645ee8793ba6c",
  lenguage:"es-ES"
}


export default function App() {
  return (
    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>
  );
}


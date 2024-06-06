import React from "react"; 
import { WowDataDisplay } from "./Output";
import background from "./img/ssc-tk.jpg";
import './App.css';

/* import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client"; */

function App() {

  return (

    <div className="app" style={{ backgroundImage: `url(${background})` }}>
      <WowDataDisplay />
    </div>
  );

 // const { loading, error, data } = useQuery(EXAMPLE_QUERY); 


  /* if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
      <div className="App">
      <h1>data from Warcaraftlogs api:</h1>
      {JSON.stringify(data)}
      </div>
  ); */

}

export default App;
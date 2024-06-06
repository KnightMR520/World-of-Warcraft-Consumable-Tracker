import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

import { setContext } from '@apollo/client/link/context';

const CLIENT_ID = '959c6407-10f2-43f4-becb-071e17689849'
const CLIENT_SECRET = 'I5GjaJNy0icymkG6sdLEbTeDd4Vx0dT6NawF99kK'

const httpLink = createHttpLink({
  uri: 'https://classic.warcraftlogs.com/api/v2/client',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NTdkMGRjZC04ODE1LTQzOWUtYThhYi1mOWE0MjU1NzFmYWQiLCJqdGkiOiJhMDc5NGJlNzBlNmU3YTUxZjUyMWIyZmE1ZTU5YjI2N2YyYWQ2ZjhiMzFjMDVlODI2MmMyYzRmOTNhZWU5YjE5ZThmMGM3YmQzMDQ5MTRmOSIsImlhdCI6MTY0ODQzMDEzMy41OTE2ODYsIm5iZiI6MTY0ODQzMDEzMy41OTE2OSwiZXhwIjoxNjU4Nzk4MTMzLjU4Mzc4Niwic3ViIjoiIiwic2NvcGVzIjpbInZpZXctdXNlci1wcm9maWxlIiwidmlldy1wcml2YXRlLXJlcG9ydHMiXX0.daNqCXMoPeK8CoxeUIYV8gD5iTaWamHSwV7fV9thpFEaOpTpJY_v2KYnXwxJfC8Zapg7MPi0BEVkW5zw9mY4U2h2anxzDCnrDH4EzHfQb4kDBIZV2nZEN1wJgVMrL9D-jgJ8-VCPLNrGXsAVIkQx8o_Gea5TJfahxt0O3PZG-1WLyma8v7-X5ZGbo6P2NSHqQ6ThfmRWiieVYw2Sv0eEGKVA1z7Fonu8xDm6iiJDUQp_x0PvB2fzaptS6-TthUFVETKgW1tjxvHLhxjcW5OzxFao8ZAQeQEsEqp1Hi4ZWzfrfVW4nC2nD0UffQR7WUUxl3smjaVaVdBoQ_V7H-eUyjcdhsx4-hubfyX3-SbQ8Fb9yhNa3l3MjLkLB_O17wMiR0ueD8izwGdQp8lGjog9u4b864FjGUpOPhvg9CYwND5ZFya8plVV7gv3qIeLXa6dw-6sRvZGzM0zVzsZG7xmSted-aGqHIbg5nbr2nTT8pZU_rCZh0jY_m7Hqqfzuy5rWCihCkPP8yKLgT4NVUO9vTbLBRxwSAfN9c3bZzoRQdvC_mwAJuIx89ArT3aPHbUvIAgS-pI4IF21wYRL20oMySrXwwvnV-tjY0G2S721MlvqmoYdED2AL0OSbM2YxPju27tPWNrIvKo0yaPAyNaKZIeQWQxh20him-xguUV3NQE'
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

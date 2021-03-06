const React = require("react");

const { setContext } = require("apollo-link-context");
const netlifyIdentity = require("netlify-identity-widget");
const {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache
} = require("@apollo/client");
const wrapRootElement = require("./wrap-root-element");

const authLink = setContext((_, { headers }) => {
    const user = netlifyIdentity.currentUser();
    const token = user.token.access_token;
    console.log(token)
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : ""
      }
    };
  });
  
  const httpLink = new HttpLink({
    uri:
      "https://dazzling-feynman-41a653.netlify.app/.netlify/functions/graphql"
  });
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink)
  });

exports.wrapRootElement = ({ element }) => {
  return (
    <ApolloProvider client={client}>
      {wrapRootElement({ element })}
    </ApolloProvider>
  );
};
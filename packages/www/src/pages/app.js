import React, { useContext } from 'react'
import { IdentityContext } from '../../identity-context'
import { Router, Link } from "@reach/router";
import { Container, Flex, Heading, Button, NavLink } from "theme-ui";
import Dash from '../components/dashboard'


let DashLoggedOut = props => {
    const { user, identity: netlifyIdentity } = useContext(IdentityContext);
    console.log(netlifyIdentity)
    return (
      <Flex sx={{ flexDirection: "column", padding: 3 }}>
        <Heading as="h1">Get Stuff Done</Heading>
        <Button
          sx={{ marginTop: 2 ,color:'black'}}
          onClick={() => {
            netlifyIdentity.open();
          }}
        >
          Log In
        </Button>
      </Flex>
    );
  };
  
  export default props => {
    const { user } = useContext(IdentityContext);
    console.log(user)
    if (!user) {
      return (
        <Router>
          <DashLoggedOut path="/app" />
        </Router>
      );
    }
    return (
      <Router>
        <Dash path="/app" />
      </Router>
    );
  };
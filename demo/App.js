import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Login from "./componenet/Login";

import createAccount from "./componenet/createAccount";
import Navigator from "./routes/navigatorstack";

export default class App extends Component {
  render() {
    return <Navigator />;
    {
      /*redirect to "./routes/navigatorstack"*/
    }
  }
}

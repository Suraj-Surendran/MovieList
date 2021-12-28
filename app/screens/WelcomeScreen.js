/* eslint-disable react-native/no-inline-styles */
import React, { Component } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { LocalColors } from "../colors/Colors";

class WelcomeScreen extends Component {
  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}
      >
        {/* Logo background */}
        <ImageBackground
          style={styles.background}
          source={require("../assets/clapboard.png")}
        />
        {/* Login content */}
        <View style={styles.logoContainer}>
          <View style={{ padding: 20 }}>
            <View style={styles.login}>
              {/* Email */}
              <TextInput
                style={styles.inputField}
                placeholder="Email"
                keyboardType="email-address"
              />
              {/* Password */}
              <TextInput
                style={styles.inputField}
                placeholder="Password"
                keyboardType="default"
                secureTextEntry={true}
              />
              <View style={{ marginTop: 20 }}>
                {/* Login button */}
                <TouchableOpacity
                  style={styles.buttonStyle}
                  activeOpacity={0.5}
                  onPress={() =>
                    this.props.navigation.navigate("DashboardScreen")
                  }
                >
                  <Text style={styles.buttonTextStyle}>LOGIN</Text>
                </TouchableOpacity>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text>Don't have an account?</Text>
                </View>
                {/* SignUp button */}
                <TouchableOpacity
                  style={styles.buttonStyle}
                  activeOpacity={0.5}
                  onPress={() => this.props.navigation.navigate("SignUpScreen")}
                >
                  <Text style={styles.buttonTextStyle}>SIGN UP</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: LocalColors.backgroundGrey,
  },
  logoContainer: {
    flex: 1.5,
  },
  logo: {
    width: "120%",
    height: "50%",
  },
  background: {
    height: Dimensions.get("screen").height / 2.5,
    top: 20,
  },
  login: {
    height: "100%",
  },
  inputField: {
    padding: 10,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "black",
    backgroundColor: LocalColors.backgroundGrey,
  },
  buttonView: {
    margin: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginVertical: 20,
  },

  buttonStyle: {
    backgroundColor: LocalColors.storyBoardBlack,
    borderWidth: 0,
    color: LocalColors.white,
    borderColor: LocalColors.storyBoardBlack,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 10,
    marginBottom: 15,
  },
  buttonTextStyle: {
    color: LocalColors.white,
  },
});
export default WelcomeScreen;

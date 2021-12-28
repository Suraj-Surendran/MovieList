/* eslint-disable react-native/no-inline-styles */
import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import SelectDropdown from "react-native-select-dropdown";
import DatePicker from "react-native-date-picker";
import { LocalColors } from "../colors/Colors";
class SignUpScreen extends Component {
  state = { date: new Date(), open: false };
  onFocus = () => {
    this.setState({ open: true });
  };
  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}
      >
        {/* Logo background */}
        <View style={styles.row}>
          <View style={styles.image}>
            <Image
              style={styles.logo}
              source={require("../assets/clapboard.png")}
            />
          </View>
          <View style={{ width: "60%" }}>
            <View style={styles.column}>
              <View>
                {/* First Name */}
                <TextInput
                  style={styles.inputField}
                  placeholder="First Name"
                  keyboardType="default"
                />
                {/* Last Name */}
                <TextInput
                  style={styles.inputField}
                  placeholder="Last Name"
                  keyboardType="default"
                />
              </View>
            </View>
          </View>
        </View>
        {/* Login content */}
        <View style={styles.logoContainer}>
          <View style={styles.fieldContainer}>
            <View style={styles.login}>
              {/* Gender */}
              <SelectDropdown
                data={gender}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                defaultButtonText={"Gender"}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
                buttonStyle={styles.dropdown1BtnStyle}
                buttonTextStyle={styles.dropdown1BtnTxtStyle}
                renderDropdownIcon={(isOpened) => {
                  return (
                    <FontAwesome
                      name={isOpened ? "angle-up" : "angle-down"}
                      color={"#444"}
                      size={18}
                    />
                  );
                }}
                dropdownIconPosition={"right"}
                dropdownStyle={styles.dropdown1DropdownStyle}
                rowStyle={styles.dropdown1RowStyle}
                rowTextStyle={styles.dropdown1RowTxtStyle}
              />
              {/* Date of Birth */}
              <DatePicker
                modal
                open={this.state.open}
                date={this.state.date}
                mode="date"
                onConfirm={(date) => this.setState({ date, open: false })}
                onCancel={() => this.setState({ open: false })}
                androidVariant="nativeAndroid"
              />
              <TextInput
                pointerEvents="none"
                showSoftInputOnFocus={false}
                onTouchStart={this.onFocus}
                style={styles.inputField}
                value={this.state.date.toLocaleDateString()}
                placeholder="Date of Birth"
              />
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
              {/* Username */}
              <TextInput
                style={styles.inputField}
                placeholder="Username"
                keyboardType="default"
              />
              <View style={{ marginTop: 20 }}>
                <TouchableOpacity
                  style={styles.buttonStyle}
                  activeOpacity={0.5}
                >
                  <Text style={styles.buttonTextStyle}>SIGN UP</Text>
                </TouchableOpacity>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text>Already have an account</Text>
                </View>
                <TouchableOpacity
                  style={styles.buttonStyle}
                  activeOpacity={0.5}
                  onPress={() =>
                    this.props.navigation.navigate("WelcomeScreen")
                  }
                >
                  <Text style={styles.buttonTextStyle}>LOGIN</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const gender = ["Male", "Female"];
const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: LocalColors.backgroundGrey,
  },
  logoContainer: {
    flex: 1.5,
  },
  fieldContainer: {
    paddingBottom: 20,
    paddingRight: 20,
    paddingLeft: 20,
  },
  logo: {
    alignContent: "flex-end",
    height: Dimensions.get("screen").height / 5.5,
    width: "100%",
    resizeMode: "stretch",
  },
  image: {
    justifyContent: "space-evenly",
    width: "40%",
  },
  row: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    top: 20,
  },
  column: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    paddingRight: 20,
    paddingBottom: 20,
  },
  background: {
    flex: 0.5,
    justifyContent: "flex-start",
    alignItems: "baseline",
    height: Dimensions.get("screen").height / 8.5,
    width: "100%",
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

  dropdown1BtnStyle: {
    width: "93.5%",
    padding: 10,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: LocalColors.black,
    backgroundColor: LocalColors.backgroundGrey,
  },
  dropdown1BtnTxtStyle: {
    color: LocalColors.grey,
    textAlign: "left",
  },
  dropdown1DropdownStyle: {
    backgroundColor: LocalColors.white,
  },
  dropdown1RowStyle: {
    backgroundColor: LocalColors.white,
    borderBottomColor: "#C5C5C5",
  },
  dropdown1RowTxtStyle: {
    color: LocalColors.black,
    textAlign: "left",
  },
});
export default SignUpScreen;

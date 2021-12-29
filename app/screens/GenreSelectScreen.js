import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LocalColors } from "../colors/Colors";
import SelectableChips from "react-native-chip/SelectableChips";
import FontAwesome from "react-native-vector-icons/FontAwesome";
class GenreSelectScreen extends Component {
  state = { isGenreSelected: false };
  render() {
    return (
      <View style={styles.backgroundContainer}>
        <View style={styles.backgroundView}>
          <Text style={styles.heading}>What'd you like to watch?</Text>
          <SelectableChips
            initialChips={genre}
            onChangeChips={(chips) => console.log(chips)}
            alertRequired={false}
            chipStyle={styles.chipStyle}
            chipStyleSelected={styles.selectedChipStyle}
            valueStyle={styles.chipText}
            valueStyleSelected={styles.chipTextSelected}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={() => this.props.navigation.navigate("DashboardScreen")}
          >
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.buttonTextStyle}>Continue</Text>
              <FontAwesome
                name="angle-right"
                color={LocalColors.white}
                size={20}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const genre = [
  "Action",
  "Adventure",
  "Crime",
  "Animation",
  "Comedy",
  "War",
  "Drama",
  "Family",
  "Fantasy",
  "History",
  "Horror",
  "Music",
  "Mystery",
  "Western",
  "Thriller",
  "Romance",
  "Documentary",
  "Science Fiction",
];

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: LocalColors.backgroundGrey,
  },
  backgroundView: {
    margin: 20,
  },
  heading: {
    fontSize: 35,
    color: LocalColors.black,
    fontWeight: "bold",
    marginBottom: 10,
  },
  chipStyle: {
    backgroundColor: LocalColors.white,
    borderColor: LocalColors.white,
  },
  selectedChipStyle: {
    backgroundColor: LocalColors.storyBoardBlack,
    borderColor: LocalColors.storyBoardBlack,
  },
  chipText: {
    color: LocalColors.black,
  },
  chipTextSelected: {
    color: LocalColors.white,
  },
  buttonContainer: {
    position: "absolute",
    marginBottom: 20,
    bottom: 0,
    right: 0,
    width: 200,
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
    marginRight: 10,
  },
});
export default GenreSelectScreen;

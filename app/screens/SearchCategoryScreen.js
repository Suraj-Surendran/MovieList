import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { LocalColors } from "../colors/Colors";
import SelectDropdown from "react-native-select-dropdown";
import FontAwesome from "react-native-vector-icons/FontAwesome";
class SearchCategoryScreen extends Component {
  render() {
    return (
      <View style={styles.backgroundContainer}>
        <View>
          <SelectDropdown
            data={genre}
            onSelect={(selectedItem, index) => {}}
            defaultButtonText={"Category"}
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
                  style={{ marginLeft: 10 }}
                  name="search"
                  color={"#444"}
                  size={16}
                />
              );
            }}
            dropdownIconPosition={"left"}
            dropdownStyle={styles.dropdown1DropdownStyle}
            rowStyle={styles.dropdown1RowStyle}
            rowTextStyle={styles.dropdown1RowTxtStyle}
          />
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.backgroundContainer}
        >
          <View>
            <TouchableOpacity style={styles.card}>
              <View style={styles.row}>
                <Image
                  style={styles.cardImage}
                  source={require("../assets/after.jpg")}
                />
                <View style={styles.column}>
                  <View>
                    <Text style={styles.heading}>After</Text>
                    <Text style={styles.subHeading}>2018 | En</Text>
                    <Text style={styles.subHeading}>Action, Thriller</Text>
                  </View>
                  <View style={{ flexDirection: "row", marginBottom: 10 }}>
                    <Image
                      style={styles.imdbLogo}
                      source={require("../assets/imdb.png")}
                    />
                    <Text style={styles.rating}> 6.9</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
              <View style={styles.row}>
                <Image
                  style={styles.cardImage}
                  source={require("../assets/warewolf.jpg")}
                />
                <View style={styles.column}>
                  <View>
                    <Text style={styles.heading}>Warewolf</Text>
                    <Text style={styles.subHeading}>2020 | En</Text>
                    <Text style={styles.subHeading}>Action, Thriller</Text>
                  </View>
                  <View style={{ flexDirection: "row", marginBottom: 10 }}>
                    <Image
                      style={styles.imdbLogo}
                      source={require("../assets/imdb.png")}
                    />
                    <Text style={styles.rating}> 7.8</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
              <View style={styles.row}>
                <Image
                  style={styles.cardImage}
                  source={require("../assets/the_astronaut.jpg")}
                />
                <View style={styles.column}>
                  <View>
                    <Text style={styles.heading}>
                      The Astronaut : New Edition
                    </Text>
                    <Text style={styles.subHeading}>2018 | En</Text>
                    <Text style={styles.subHeading}>Action, Thriller</Text>
                  </View>
                  <View style={{ flexDirection: "row", marginBottom: 10 }}>
                    <Image
                      style={styles.imdbLogo}
                      source={require("../assets/imdb.png")}
                    />
                    <Text style={styles.rating}> 8.7</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const genre = [
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "History",
  "Horror",
  "Music",
  "Mystery",
  "Romance",
  "Science Fiction",
  "Thriller",
  "War",
  "Western",
];
const styles = StyleSheet.create({
  searchContainer: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    fontSize: 18,
    borderRadius: 10,
    elevation: 1,
  },
  backgroundContainer: {
    flex: 1,
    backgroundColor: LocalColors.backgroundGrey,
  },
  card: {
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 20,
    height: 170,
    borderRadius: 10,
    backgroundColor: LocalColors.white,
  },
  cardImage: {
    width: 125,
    height: 170,
    resizeMode: "cover",
    borderRadius: 10,
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  column: {
    width: "50%",
    flexDirection: "column",
    marginLeft: 10,
    marginRight: 20,
    marginTop: 10,
    justifyContent: "space-between",
  },
  heading: {
    fontSize: 20,
    color: LocalColors.black,
    fontWeight: "bold",
  },
  subHeading: {
    fontSize: 12,
  },
  rating: {
    fontSize: 15,
    color: LocalColors.black,
    fontWeight: "bold",
  },
  imdbLogo: {
    width: 40,
    height: 20,

    resizeMode: "cover",
    borderRadius: 5,
  },
  dropdown1BtnStyle: {
    width: "89%",
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 1,
    backgroundColor: LocalColors.white,
  },
  dropdown1BtnTxtStyle: {
    color: LocalColors.grey,
    textAlign: "left",
    marginLeft: 20,
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

export default SearchCategoryScreen;

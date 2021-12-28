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
class MovieListScreen extends Component {
  render() {
    return (
      <View style={styles.backgroundContainer}>
        <View>
          <Searchbar style={styles.searchContainer} placeholder="Search" />
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
                  source={require("../assets/the_astronaut.jpg")}
                />
                <View style={styles.column}>
                  <View>
                    <Text style={styles.heading}>The Astronaut</Text>
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
          </View>
        </ScrollView>
      </View>
    );
  }
}

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
});

export default MovieListScreen;

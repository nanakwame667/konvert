import { Text, View, StyleSheet, Image } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Konvert</Text>
        <Text style={styles.p}>Convert your currency now!</Text>
      </View>
      <Image
        source={require("../assets/images/pitch.png")}
        style={styles.image}
      />
      <Text style={styles.p}>
        Convert your currency into more than 130+ countries currency. Convert
        now!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    gap: 48,
  },
  headingContainer: {
    textAlign: "center",
    gap: 8,
  },
  heading: {
    fontSize: 32,
    fontFamily: "bold",
    textAlign: "center",
  },
  p: {
    fontSize: 16,
    fontFamily: "regular",
    color: "#5A5A5A",
    textAlign: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
});

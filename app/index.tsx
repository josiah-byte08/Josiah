import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

function GetStarted() {
  return (
    <Pressable style={styles.button} onPress={() => router.push("/home")}>
      <Text style={styles.buttonText}>
        Get Started
      </Text>
    </Pressable>
  );
}

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>College Calendar</Text>
      <Text style={styles.subtitle}>
        Your college life, organized.
      </Text>
    <View style={styles.buttonContainer}><GetStarted/></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },

  subtitle: {
    fontSize: 18,
    marginTop: 8,
  },

  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  button: {
   
  },

  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

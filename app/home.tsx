import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View, } from "react-native";

function AddClassButton() {
  return(
    <Pressable style={styles.button} onPress={() => router.push("/add-class")}>
      <Text style={styles.buttonText}>+ Add Class</Text>
      </Pressable>
  );
}
export default function HomeScreen() {

  const today = new Date();
  
  return(
    <View>
    <Text>Home Screen</Text>
    <Text>{today.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    })}, </Text>

    <Text style={styles.todayTitle}>TODAY</Text>

    <AddClassButton />
    </View>
  );
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
    },

    title: {
      fontSize: 30,
      fontWeight: "bold",
    },

    date: {
      fontSize: 18,
      marginTop: 8,
    },

    todayTitle: {
      fontSize: 20,
      fontWeight: "bold",
      marginTop: 40,
    },

    button: {
      marginTop: 20,
      padding: 15,
      borderRadius: 10,
      alignItems: "center",
    },

    buttonText: {
      fontSize: 18,
      fontWeight: "bold",
    }
  });

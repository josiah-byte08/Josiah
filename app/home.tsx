import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View, } from "react-native";
import { useClasses } from "./context/ClassContext";

function AddClassButton() {
  return(
    <Pressable style={styles.button} onPress={() => router.push("/add-class")}>
      <Text style={styles.buttonText}>+ Add Class</Text>
      </Pressable>
  );
}

export default function HomeScreen() {

  const today = new Date();
  const { classes } = useClasses();
  
  return(
    <View style={styles.container}>
    <Text style={styles.title}>Home Screen</Text>
    <Text style={styles.date}>{today.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    })}, </Text>

    <Text style={styles.todayTitle}>TODAY</Text>

    {classes.map((classItem) => {
      if(classItem.selectedDays.includes(today.getDay())) {
      return (
        <Text key={classItem.className}>
          {classItem.startTime} - {classItem.endTime}
          {"\n"}{classItem.className}
          {"\n"}{classItem.room}
        </Text>
      );
    }

    return null;
    })}

    <Text style={styles.upcomingTitle}>UPCOMING</Text>

    {classes.map((classItem) => {
      const futureDays = classItem.selectedDays.filter(
        (day) => day > today.getDay()
      );

      if (futureDays.length > 0) {
      const upcomingDay = Math.min(...futureDays);

      const daysUntil = upcomingDay - today.getDay();

      const upcomingDate = new Date(today);

      upcomingDate.setDate(
        today.getDate() + daysUntil
      );

      return (
        <Text key={classItem.className}>
          {upcomingDate.toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
          })}
          {"\n"}
          {classItem.startTime} - {classItem.endTime}
          {"\n"}{classItem.className}
          {"\n"}{classItem.room}
        </Text>
      );
    }

    return null;
    })}

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

    upcomingTitle: {
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

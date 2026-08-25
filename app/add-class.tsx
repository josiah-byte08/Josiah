import { useState, } from "react";
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View, } from "react-native";


type Class = {
    className: string;
    professor: string;
    room: string;
    startTime: string;
    endTime: string;
    selectedDays: number[];
};


export default function AddClass() {
    const [className, setClassName, ] = useState("");
    const [professor, setProfessor, ] = useState("");
    const [room, setRoom, ] = useState("");
    const [startTime, setStartTime, ] = useState("");
    const [endTime, setEndTime, ] = useState("");
    const [selectedDays, setSelectedDays, ] = useState<number[]>([]);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
    const [classes, setClasses] = useState<Class[]>([]);

    return (
        <ScrollView style={styles.container}>
        <Text style={styles.title}>Add Class </Text>

        <Text style={styles.label}>Class Name</Text>
        <TextInput style={styles.input}
        onChangeText={(text) => setClassName(text)}/>

        <Text>{className}</Text>

        <Text style={styles.label}>Professor</Text>
        <TextInput style={styles.input}
        onChangeText={(text) => setProfessor(text)}/>

        <Text>{professor}</Text>

        <Text style={styles.label}>Room</Text>
        <TextInput style={styles.input}
        onChangeText={(text) => setRoom(text)}/>

        <Text>{room}</Text>

        <Text style={styles.label}>Start Time</Text>
        <TextInput style={styles.input}
        onChangeText={(text) => setStartTime(text)}/>

        <Text>{startTime}</Text>

        <Text style={styles.label}>End Time</Text>
        <TextInput style={styles.input}
        onChangeText={(text) => setEndTime(text)}/>

        <Text>{endTime}</Text>
        <Text>Selected days: {selectedDays.join(", ")}</Text>

    <View style={styles.daysContainer}>
        {days.map((day, index) => {

            const isSelected = selectedDays.includes(index);
            return (
            <Pressable key={index}
                style={[styles.button, isSelected && styles.selectedButton]}
                onPress={() => {
                    if (isSelected) {
                        setSelectedDays(selectedDays.filter((dayIndex) => dayIndex !== index));
                    } else {
                        setSelectedDays([...selectedDays, index]);
                    }
                }}>
                <Text>{day}</Text>
            </Pressable>
        );
        })}
    </View>

    <Pressable
        style={styles.addButton}
        onPress={() => {
            const newClass = {
                className: className,
                professor: professor,
                room: room,
                startTime: startTime,
                endTime: endTime,
                selectedDays: selectedDays,
            }

            setClasses([...classes, newClass]);

            console.log(newClass);
        }}
        >
            <Text style={styles.addButtonText}>Add Class</Text>
    </Pressable>

    {classes.map((classItem) => {
               return (
                <Text key={classItem.className}>
                    {classItem.className},
                    {"\n"}Professor: {classItem.professor}
                    {"\n"}Room: {classItem.room}
                    {"\n"}Start: {classItem.startTime}
                    {"\n"}End: {classItem.endTime}
                    {"\n"}Days: {classItem.selectedDays.map((dayIndex) => {
                        return days[dayIndex]
                    }).join(", ")}
                </Text>
               ); 
            })}
        </ScrollView>
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
            marginBottom: 30,
        },

        label: {
            fontSize: 16,
            fontWeight: "bold",
            marginTop: 15,
            marginBottom: 8,
        },

        input: {
            borderWidth: 1,
            borderRadius: 8,
            padding: 12,
            fontSize: 16,
        },

        button: {
            width: 40,
            height: 40,
            borderWidth: 1,
            alignItems: "center",
            justifyContent: "center"
        },

        daysContainer: {
            flexDirection: "row",
            gap: 10
        },

        selectedButton: {
            backgroundColor: "green",
        },

        addButton: {
            marginTop: 25,
            padding: 15,
            backgroundColor: "green",
            alignItems: "center",
            borderRadius: 8,
        },

        addButtonText: {
            color: "white",
            fontWeight: "bold",
        }
    });


//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';

// create a component
const TaskHeader = () => {
    const tasks = useSelector(state => state.todo)
    const undoneTasks = tasks.filter((t) => t.done === false);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.box}>
                <Text> Tâches à faire: {undoneTasks.length}</Text>
            </View>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    box: {
        borderWidth: 1,
        padding:'5%',
        margin:'5%'
    }
});

//make this component available to the app
export default TaskHeader;

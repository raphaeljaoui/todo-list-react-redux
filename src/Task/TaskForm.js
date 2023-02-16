//import liraries
import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux';

// create a component
const TaskForm = () => {
    const [task, setTask] = useState("");
    const dispatch = useDispatch();

    return (
        <View>
             <TextInput
            style={styles.input}
            value={task}
            onChangeText={(text) => {setTask(text)}}
            placeholder="useless placeholder"
        />
        <Button title="add Task" onPress={() => {
            dispatch(addTask(task));
            setTask("");    
        }}/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: '5%',
        borderWidth: 1,
        padding: 10,
      },
});

//make this component available to the app
export default TaskForm;

//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

// create a component
const TaskItem = ({
    task,
    toggleTask,
    deleteTask
}) => {
    return(
        <View style={{marginTop: '5%'}}>
            <Text>{task.text}</Text>
            <View style={{flexDirection: 'row'}}>
                <Button title={"check"} onPress={() => toggleTask(task.id)}/>
                <Button title={"delete"} onPress={() => deleteTask(task.id)}/>
            </View>
        </View>
    )
}

const TaskList = ({tasks, toggleTask, deleteTask}) => {
    return (
        <View style={styles.container}>
            {tasks.map(t => {
                return(

                    <TaskItem 
                    key={t.id}
                    task={t}
                    toggleTask={toggleTask}
                    deleteTask={deleteTask}
                    />
                    )
                })}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // alignItems: 'center',
        borderWidth: 1,
        padding:'5%',
        margin: '5%'
    },
});

//make this component available to the app
export default TaskList;

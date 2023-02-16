//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, toggleTask } from '../../redux';

// create a component
const TaskItem = ({task}) => {
    const dispatch = useDispatch();

    return(
        <View style={{marginTop: '5%'}}>
            <Text>{task.text}</Text>
            <View style={{flexDirection: 'row'}}>
                <Button title={"check"} onPress={() => dispatch(toggleTask(task.id))}/>
                <Button title={"delete"} onPress={() =>dispatch(deleteTask(task.id)) }/>
            </View>
        </View>
    )
}

const TaskList = () => {
    const tasks = useSelector(state => state.todo)

    return (
        <View style={styles.container}>
            {tasks.map(t => {
                return(
                    <TaskItem 
                    key={t.id}
                    task={t}
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

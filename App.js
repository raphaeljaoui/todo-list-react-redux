import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { TaskForm, TaskHeader, TaskList } from './src/Task';

export default function App() {
  const [task, setTask]  = useState([
    {id: 1, text:"Courses", done: false},
    {id: 2, text:"Ménages", done: false},
  ])

  const addTask = (text) => {
    const newTask = {
      text,
      id: Date.now(),
      done: false,
    };

    setTask([...task, newTask]);
  }
 
  const deleteTask = (id) => {
    const filterTasks = task.filter((t) => t.id !== id)
    setTask(filterTasks);
  }

  const toggleTask = (id) => {
    const realTask = task.find((t) => t.id === id);
    const index = task.findIndex((t) => t.id === id);
    const taskCopy = {...realTask};
    const taskListCopy = [...task];

    taskCopy.done = !taskCopy.done;
    taskListCopy[index] = taskCopy;
    setTask(taskListCopy); 
  }

  return (
    <View style={styles.container}>
      <TaskHeader tasks={task}/>
      <TaskList
      tasks={task}
      toggleTask={toggleTask}
      deleteTask={deleteTask}
      />
      <TaskForm addTask={addTask}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});

import { useState, useReducer } from 'react';
import { ScrollView, View } from 'react-native';
import { styles } from './styles';
import Logo from '@Assets/logo.svg';
import { PlusButton } from '@Components/PlusButton';
import { Input } from '@Components/Input';
import Task from '@Components/Task';
import { Label } from '@Components/Label';
import { EmptyList } from '@Components/EmptyList';
import uuid from 'react-native-uuid';

interface ITask {
  id: number;
  description: string;
  done: boolean;
}

const reducer = (state: ITask[], action: any) => {
  switch (action.type) {
    case 'ADD_TASK': {
      return [...state, action.payload];
    }
    case 'DELETE_TASK': {
      return state.filter((task) => task.id !== action.payload);
    }
    case 'TASK_DONE': {
      return [
        ...state.filter((task) => task.id !== action.payload.id),
        { ...action.payload, done: !action.payload.done },
      ];
    }
  }
};

export function Home() {
  const [taskDescription, setTaskDescription] = useState('');
  const [state, dispatch] = useReducer(reducer, []);

  const taskDoneAmount = () => {
    return state.reduce((acc, cur) => (cur.done ? acc + 1 : acc), 0);
  };

  const createTask = (description: string) => {
    return {
      id: uuid.v4(),
      description,
      done: false,
    };
  };

  const handleAddTask = () => {
    if (!taskDescription.trim()) return setTaskDescription('');

    dispatch({
      type: 'ADD_TASK',
      payload: createTask(taskDescription),
    });

    setTaskDescription('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo />
      </View>
      <View style={styles.body}>
        <View style={styles.taskInput}>
          <Input
            style={{ marginRight: 4 }}
            onChangeText={setTaskDescription}
            value={taskDescription}
          />
          <PlusButton onPress={handleAddTask} />
        </View>
        <View style={styles.labels}>
          <Label count={state.length} title="Criadas" />
          <Label
            count={taskDoneAmount()}
            title="Concluídas"
            color="secondary"
          />
        </View>
        {state.length ? (
          <ScrollView showsVerticalScrollIndicator={false}>
            {state.map((task) => (
              <Task
                description={task.description}
                onDeleteTask={() =>
                  dispatch({ type: 'DELETE_TASK', payload: task.id })
                }
                onTaskDone={() =>
                  dispatch({ type: 'TASK_DONE', payload: task })
                }
                done={task.done}
                key={task.id}
              />
            ))}
          </ScrollView>
        ) : (
          <EmptyList />
        )}
      </View>
    </View>
  );
}

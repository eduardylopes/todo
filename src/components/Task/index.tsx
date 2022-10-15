import { CheckBox } from '@Components/CheckBox';
import { DeleteButton } from '@Components/DeleteButton';
import theme from '@Styles/theme.style';
import { useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

interface TaskProps {
  description: string;
  done: boolean;
  onTaskDone: (value: any) => void;
  onDeleteTask: (value: any) => void;
}

export default function Task({
  description,
  onDeleteTask,
  onTaskDone,
  done,
}: TaskProps) {
  return (
    <View style={styles.container}>
      <CheckBox
        value={done}
        onValueChange={onTaskDone}
        color={theme.PURPLE_DARK}
      />
      <Text style={[styles.description, done && styles.lineThrough]}>
        {description}
      </Text>
      <DeleteButton onPress={onDeleteTask} />
    </View>
  );
}

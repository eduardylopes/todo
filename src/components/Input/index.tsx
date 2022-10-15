import theme from '@Styles/theme.style';
import { useState } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { styles } from './styles';

export function Input(props: TextInputProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <TextInput
      {...props}
      style={[
        props.style,
        isActive ? [styles.input, styles.inputActive] : styles.input,
      ]}
      placeholder="Adicione uma nova tarefa"
      placeholderTextColor={theme.GRAY_300}
      onFocus={() => setIsActive(true)}
    ></TextInput>
  );
}

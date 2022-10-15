import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import Delete from '@Assets/trash.svg';
import { styles } from './styles';
import { useState } from 'react';
import theme from '@Styles/theme.style';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export function DeleteButton(props: TouchableOpacityProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <TouchableOpacity
      {...props}
      style={isActive ? [styles.button, styles.buttonActive] : styles.button}
      onPressIn={() => setIsActive(true)}
      onPressOut={() => setIsActive(false)}
    >
      <FontAwesome
        name="trash"
        color={isActive ? theme.DANGER : theme.GRAY_300}
        size={24}
      />
    </TouchableOpacity>
  );
}

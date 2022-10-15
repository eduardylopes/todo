import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import theme from '@Styles/theme.style';

export function PlusButton(props: TouchableOpacityProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <TouchableOpacity
      {...props}
      style={isActive ? [styles.button, styles.buttonActive] : styles.button}
      onPressIn={() => setIsActive(true)}
      onPressOut={() => setIsActive(false)}
    >
      <FontAwesome name="plus" color={theme.GRAY_100} size={24} />
    </TouchableOpacity>
  );
}

import { StyleSheet } from 'react-native';
import theme from '@Styles/theme.style';

export const styles = StyleSheet.create({
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    width: 54,
    height: 54,
    borderRadius: 6,

    backgroundColor: theme.BLUE_DARK,
  },
  buttonActive: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    width: 54,
    height: 54,
    borderRadius: 6,

    backgroundColor: theme.BLUE,
  },
});

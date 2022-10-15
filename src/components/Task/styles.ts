import theme from '@Styles/theme.style';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    width: '100%',
    minHeight: 64,
    padding: 12,
    marginBottom: 8,

    backgroundColor: theme.GRAY_500,

    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.GRAY_400,
  },
  description: {
    flex: 1,
    marginHorizontal: 10,
    color: theme.GRAY_100,
  },
  lineThrough: {
    textDecorationLine: 'line-through',
    color: theme.GRAY_300,
  },
});

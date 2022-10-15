import { StyleSheet } from 'react-native';
import theme from '@Styles/theme.style';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.GRAY_400,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: '100%',
    height: 175,
    backgroundColor: theme.GRAY_700,
  },
  body: {
    display: 'flex',
    flexDirection: 'column',

    flex: 1,
    width: '100%',
    paddingHorizontal: 24,

    backgroundColor: theme.GRAY_600,
  },
  taskInput: {
    display: 'flex',
    flexDirection: 'row',
    gap: 4,

    width: '100%',
    marginBottom: 32,
    marginTop: -27,
  },
  labels: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',

    width: '100%',
    marginBottom: 20,
  },
  taskList: {
    flex: 1,
  },
});

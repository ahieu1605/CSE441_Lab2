import { StyleSheet } from 'react-native';

//test gpt//

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  display: {
    fontSize: 40,
    backgroundColor: '#000',
    color: '#fff',
    padding: 20,
    width: '100%',
    textAlign: 'right',
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#ddd',
    padding: 20,
    margin: 5,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 30,
    color: '#000',
  },
  operatorButton: {
    backgroundColor: '#f39c12',
  },
});

export default styles;

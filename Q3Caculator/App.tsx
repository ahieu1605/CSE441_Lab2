import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style'; 

//test gpt//


const App = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [firstValue, setFirstValue] = useState('');

  // Function to handle number inputs
  const handleNumberInput = (num) => {
    if (displayValue === '0') {
      setDisplayValue(num.toString());
    } else {
      setDisplayValue(displayValue + num);
    }
  };

  // Function to handle operator inputs
  const handleOperatorInput = (operatorInput) => {
    setOperator(operatorInput);
    setFirstValue(displayValue);
    setDisplayValue('0');
  };

  // Function to handle the equal button
  const handleEqual = () => {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(displayValue);

    if (operator === '+') {
      setDisplayValue((num1 + num2).toString());
    } else if (operator === '-') {
      setDisplayValue((num1 - num2).toString());
    } else if (operator === '*') {
      setDisplayValue((num1 * num2).toString());
    } else if (operator === '/') {
      setDisplayValue((num1 / num2).toString());
    }

    setOperator(null);
    setFirstValue('');
  };

  // Function to clear the display
  const handleClear = () => {
    setDisplayValue('0');
    setOperator(null);
    setFirstValue('');
  };

  // Render the calculator UI
  return (
    <View style={styles.container}>
      <Text style={styles.display}>{displayValue}</Text>
      
      {/* Number buttons */}
      <View style={styles.buttonRow}>
        {['1', '2', '3'].map(num => (
          <TouchableOpacity key={num} onPress={() => handleNumberInput(num)} style={styles.button}>
            <Text style={styles.buttonText}>{num}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.buttonRow}>
        {['4', '5', '6'].map(num => (
          <TouchableOpacity key={num} onPress={() => handleNumberInput(num)} style={styles.button}>
            <Text style={styles.buttonText}>{num}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.buttonRow}>
        {['7', '8', '9'].map(num => (
          <TouchableOpacity key={num} onPress={() => handleNumberInput(num)} style={styles.button}>
            <Text style={styles.buttonText}>{num}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity onPress={handleClear} style={styles.button}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNumberInput('0')} style={styles.button}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleEqual} style={styles.button}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
      </View>

      {/* Operator buttons */}
      <View style={styles.buttonRow}>
        {['+', '-', '*', '/'].map(op => (
          <TouchableOpacity key={op} onPress={() => handleOperatorInput(op)} style={[styles.button, styles.operatorButton]}>
            <Text style={styles.buttonText}>{op}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default App;

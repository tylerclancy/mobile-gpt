import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import SubmitCall from './components/submit-call';

export default function HomePage() {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => console.log("Hamburger menu pressed")}>
          <Ionicons name="menu-outline" size={30} color="#000" style={{ marginLeft: 15 }} />
        </TouchableOpacity>
        <Text style={styles.logo}>LOGO</Text>
      </View>
      <View style={styles.centered}>
        <Text style={styles.centeredText}>Welcome to My App!</Text>
      </View>
      {/* <View style={styles.formContainer}>
        <TextInput placeholder="Enter text here" style={styles.textInput} />
        <TouchableOpacity style={styles.submitButton} onPress={() => console.log("Submit button pressed")}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View> */}
      <View style={styles.textInput}>
        <SubmitCall />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 15,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  formContainer: {
    alignItems: 'center',
    marginVertical: 30,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '80%',
    height: 50,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

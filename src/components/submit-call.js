import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const SubmitCall = () => {

  const [text, setText] = useState('');
  // We'll use this state to store the response from the API call.
  const [response, setResponse] = useState('');

  const handlePress = () => {
    // Make API call to OpenAI API.
    fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer my-token'
      },
      // model, messages, max_tokens, n, stop: paremeters for the API call.
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{'role': 'user', 'content': text}],
        max_tokens: 2048,
        n: 1,
        stop: '\n',
      })
    })
    .then(response => response.json())
    .then(data => {
      // console.log(data);
      console.log(data.choices[0].message.content);
      // Update response state with the response from the API.
      setResponse(data.choices[0].message.content);
    })
    .catch(err => console.log(err));
  }

  return (
    <View>
      <TextInput value={text} onChangeText={setText} />
      <Button title='Submit' onPress={handlePress} />
      <Text>{response}</Text>
    </View>
  );

}

export default SubmitCall;
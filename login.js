import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';

// Initialize the state for the user's name
const [userName, setUserName] = useState(''); // You can set an initial value here

// ...


  style={stylessendButton}
  onPress={async () => {
    console.log(phoneNumber + ' Button was pressed');
  }

    const sendTextResponse = await fetch(
      'https://dev.stedi.me/twofactorlogin/' + phoneNumber,
      {
        method: 'POST',
        headers: {
          'content-type': 'application/text'
        }
      }
    );
    const sendTextResponseData = await sendTextResponse.text();
    if (sendTextResponse.status !== 200) {
      // Invalid phone number, send them to the signup page
      await Alert.alert("Did you type your number correctly? " + phoneNumber);
    } else {
      // Update the user's name and show a welcome message
      setUserName('John'); // Replace 'Jarwee' with the actual user's name
      setLoggedInState(loggedInStates.LOGGING_IN);
    }
  }}

  <Text style={{ color: 'white' }}>Send</Text>
</TouchableOpacity>

// Display the message
<Text style={{ color: 'black' }}>Hello {userName}</Text>

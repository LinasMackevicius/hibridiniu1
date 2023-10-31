import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const YourApp = () => {
 
  let initialColor = 'white';

  // Create a function to handle button clicks and manage state
  
  const createButtonHandler = (initialColor, alternateColor) => {
    
    const [boxColor, setBoxColor] = useState(initialColor);
    
    const [clickCount, setClickCount] = useState(0);

    const handleClick = () => {

      if (clickCount === 0 || clickCount % 2 === 0) {
        setBoxColor(alternateColor);
      } else {
        setBoxColor(initialColor);
      }
      setClickCount(clickCount + 1);

    };

    return { boxColor, handleClick };
  };

  const button1Data = createButtonHandler(initialColor, 'blue');
  const button2Data = createButtonHandler(initialColor, 'green');
  const button3Data = createButtonHandler(initialColor, 'violet');
  const button4Data = createButtonHandler(initialColor, 'black');

  return (
    <View
      style={[
        styles.myStyle,
        {
          flexDirection: 'row',
        },
      ]}
    >
      <View style={{ flex: 1, backgroundColor: 'yellow', padding: 15, gap: 50 }}>
        <Button title="Button1" onPress={button1Data.handleClick} />
        <Button title="Button2" onPress={button2Data.handleClick} />
        <Button title="Button3" onPress={button3Data.handleClick} />
        <Button title="Button4" onPress={button4Data.handleClick} />

      </View>

      <View style={{ flex: 1, backgroundColor: 'blue', padding: 15, gap: 45 }}>
        <Text style={[styles.headline, { backgroundColor: button1Data.boxColor }]}>
          box1
        </Text>
        <Text style={[styles.headline, { backgroundColor: button2Data.boxColor }]}>
          box2
        </Text>

        <Text style={[styles.headline, { backgroundColor: button3Data.boxColor }]}>
          box3
        </Text>

        <Text style={[styles.headline, { backgroundColor: button4Data.boxColor }]}>
          box4
        </Text>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  myStyle: {
    flex: 1,
    padding: 20,
  },
  headline: {
    textAlign: 'center',
    fontSize: 20,
    borderColor: 'yellow',
    borderWidth: 7,
  },
});

export default YourApp;

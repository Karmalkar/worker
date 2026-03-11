import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  useWindowDimensions,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import { typography } from './src/style/typography';
import { useThemeColors } from './src/hooks/useThemeColors';
import XButton from './src/components/Xbutton';
import { ArrowRight } from './src/assets/svg/ArrowRight';

function App(): React.JSX.Element {
  const window = useWindowDimensions();
  const isDarkMode = useColorScheme() === 'dark';
  const { colors } = useThemeColors();
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Image
            source={require('./src/assets/icons/Home.jpg')}
            style={{ width: window.width, height: window.height / 1.4 }}
          />
          <Text style={{ ...typography.h1, textAlign: 'center', justifyContent: 'center', fontWeight: 'bold', paddingHorizontal: 20, color: colors.text }}>Task Management &
            To-Do List:</Text>
          <Text style={{ ...typography.caption, textAlign: 'center', justifyContent: 'center', color: colors.textSecondary, paddingHorizontal: 30, marginTop: 10 }}>
            This productive tool is designed to help
            you better manage your task
            project-wise conveniently!
          </Text>
          <XButton title="Lets Start" onPress={() => { }} style={{ width: '80%', alignSelf: 'center', marginTop: 20, backgroundColor: colors.main, borderRadius: 8 }} EndIcon={<ArrowRight />} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;

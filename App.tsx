/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  useWindowDimensions,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Icons } from './src';
import { typography } from './src/style/typography';
import { FONTS } from './src/style/fonts';
import { useThemeColors } from './src/hooks/useThemeColors';
import XButton from './src/components/Xbutton';
import { ArrowRight } from './src/assets/svg/ArrowRight';

type SectionProps = PropsWithChildren<{
  title: string;
}>;


function App(): React.JSX.Element {
  const window = useWindowDimensions();
  const isDarkMode = useColorScheme() === 'dark';
  const { colors, isDark } = useThemeColors()
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
        {/* <Header /> */}
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Image
            source={require('../worker/src/assets/icons/Home.jpg')}
            style={{ width: window.width, height: window.height / 1.4 }}
          />
          <Text style={{ ...typography.h1, textAlign: 'center', justifyContent: 'center', fontWeight: 'bold', paddingHorizontal: 20, color: colors.text }}>Task Management &
            To-Do List:</Text>
          <Text style={{...typography.caption ,textAlign: 'center', justifyContent: 'center', color: colors.textSecondary, paddingHorizontal: 30, marginTop: 10}}>
            This productive tool is designed to help
            you better manage your task
            project-wise conveniently!
          </Text>
          <XButton title='Lets Start' onPress={() => {}} style={{ width: '80%', alignSelf: 'center', marginTop: 20 , backgroundColor:colors.main , borderRadius: 8}} EndIcon={<ArrowRight/>} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// const ArrowRight = () => (
//   <View style={{ marginLeft: 10, justifyContent: 'center', alignItems: 'center' }}>
//     <Image source={require('./src/assets/icons/ArrowRight.jpg')} width={20} height={20} />
//   </View>
// );

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

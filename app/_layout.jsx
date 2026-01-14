import { Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';

const RootLayout = () => {
    return (
        <Stack screenOptions={{headerShown: false}}/>
    );
}

const styles = StyleSheet.create({})

export default RootLayout;

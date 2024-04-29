import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, backgroundColor: themeColors.bg }}>
            <View style={{ flex: 1, justifyContent: 'space-around', marginVertical: 16 }}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 32, textAlign: 'center' }}>
                    Let's Get Started!
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Image source={require("../assets/images/u.png")} style={{ width: 350, height: 350 }} />
                </View>
                <View style={{ marginTop: 20 }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignUp')}
                        style={{
                            backgroundColor: themeColors.slv,
                            padding: 10,
                            borderRadius: 5,
                            marginHorizontal: 7,
                        }}
                    >
                        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: 'gray' }}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Already have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={{ color: themeColors.slv, fontWeight: 'bold' }}> Log In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

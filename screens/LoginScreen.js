import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Image,
    TextInput,
} from 'react-native';
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, backgroundColor: themeColors.bg }}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Image
                        source={require('../assets/images/u.png')}
                        style={{ width: 200, height: 200 }}
                    />
                </View>
            </SafeAreaView>
            <View style={{ borderTopLeftRadius: 5, borderTopRightRadius: 5, flex: 1, backgroundColor: 'white', paddingHorizontal: 8, paddingTop: 8 }}>
                <View style={{ marginBottom: 20 }}>
                    <Text style={{ color: 'gray', marginLeft: 10 }}>Email Address</Text>
                    <TextInput
                        style={{ padding: 10, backgroundColor: '#f0f0f0', color: 'gray', marginBottom: 10 }}
                        placeholder="email"
                        value=""
                    />
                    <Text style={{ color: 'gray', marginLeft: 10 }}>Password</Text>
                    <TextInput
                        style={{ padding: 10, backgroundColor: '#f0f0f0', color: 'gray', marginBottom: 10 }}
                        secureTextEntry={true}
                        placeholder="password"
                        value=""
                    />
                    <TouchableOpacity style={{ alignItems: 'flex-end' }}>
                        <Text style={{ color: themeColors.bg, marginBottom: 5 }}>Forgot Password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ backgroundColor: themeColors.bg, padding: 10, borderRadius: 5, marginTop: 20 }}
                        onPress={() => navigation.navigate('Home')}
                    >
                        <Text style={{ color: themeColors.slv, fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: 'gray' }}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 7 }}>
                    <Text style={{ color: 'gray', fontWeight: 'bold' }}>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                        <Text style={{ color: themeColors.bg ,fontWeight:"bold"}}> Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

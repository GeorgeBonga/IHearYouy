import React, { useState } from 'react';
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

export default function SignUpScreenTwo() {
    const navigation = useNavigation();

    const [userType, setUserType] = useState([]);

    const handleUserTypeChange = (type) => {
        if (userType.includes(type)) {
            setUserType(userType.filter((item) => item !== type));
        } else {
            setUserType([...userType, type]);
        }
    };

    return (
        <View style={{ flex: 1, backgroundColor: themeColors.bg }}>
            <View style={{ flex: 1, marginTop: 5 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Image
                        source={require('../assets/images/u.png')}
                        style={{ width: 165, height: 100 }}
                    />
                </View>
            </View>
            <View style={{ flex: 4, backgroundColor: 'white', paddingHorizontal: 6, paddingTop: 3, borderTopLeftRadius: 5, borderTopRightRadius: 5 }}>
                <View style={{ marginBottom: 20 }}>
                    <Text style={{ color: 'gray', marginLeft: 10 }}>Username</Text>
                    <TextInput
                        style={{ padding: 10, backgroundColor: '#f0f0f0', color: 'gray', marginBottom: 10 }}
                        placeholder="Enter Username"
                    />
                    <Text style={{ color: 'gray', marginLeft: 10 }}>Date of Birth</Text>
                    <TextInput
                        style={{ padding: 10, backgroundColor: '#f0f0f0', color: 'gray', marginBottom: 10 }}
                        placeholder="Enter Date of birth"
                    />
                    <Text style={{ color: 'gray', marginLeft: 10 }}>Country</Text>
                    <TextInput
                        style={{ padding: 10, backgroundColor: '#f0f0f0', color: 'gray', marginBottom: 10 }}
                        placeholder="Enter Country"
                    />
                    <Text style={{ color: 'gray', marginLeft: 10 }}>Confirm Password</Text>
                    <TextInput
                        style={{ padding: 10, backgroundColor: '#f0f0f0', color: 'gray', marginBottom: 10 }}
                        secureTextEntry={true}
                        placeholder="Enter Password"
                    />
                    <TouchableOpacity
                        onPress={() => console.log("Selected User Types:", userType) || navigation.navigate("HomeMain")}
                        style={{
                            backgroundColor: themeColors.bg,
                            padding: 10,
                            borderRadius: 5,
                            marginTop: 20,
                            alignItems: 'center'
                        }}>
                        <Text style={{ color: themeColors.slv, fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                    <Text style={{ color: themeColors.slv, fontWeight: 'bold' }}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                        <Text style={{ color: themeColors.bg, fontWeight: 'bold' }}> Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

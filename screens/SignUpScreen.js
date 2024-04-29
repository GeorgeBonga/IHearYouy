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
import { Checkbox } from 'react-native-paper';

export default function SignUpScreen() {
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
        <View style={{ flex:1, backgroundColor: themeColors.bg }}>
            <View style={{ flex: 1, marginTop: 5 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Image
                        source={require('../assets/images/u.png')}
                        style={{ width: 165, height: 100 }}
                    />
                </View>
            </View>
            <View style={{ flex: 4, backgroundColor: 'white', paddingHorizontal: 6, paddingTop: 6, borderTopLeftRadius: 5, borderTopRightRadius: 5 }}>
                <View style={{ marginBottom: 20 }}>
                    <Text style={{ color: 'gray', marginLeft: 10 }}>Full Name</Text>
                    <TextInput
                        style={{ padding: 10, backgroundColor: '#f0f0f0', color: 'gray', marginBottom: 10 }}
                        placeholder="Enter Name"
                    />
                    <Text style={{ color: 'gray', marginLeft: 10 }}>Email Address</Text>
                    <TextInput
                        style={{ padding: 10, backgroundColor: '#f0f0f0', color: 'gray', marginBottom: 10 }}
                        placeholder="Enter Email"
                    />
                    <Text style={{ color: 'gray', marginLeft: 10 }}>Password</Text>
                    <TextInput
                        style={{ padding: 10, backgroundColor: '#f0f0f0', color: 'gray', marginBottom: 10 }}
                        secureTextEntry={true}
                        placeholder="Enter Password"
                    />
                    <View>
                        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>Which are you?</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                            <View style={{ width: '45%' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
                                    <Checkbox.Android
                                        status={userType.includes('Music Artist') ? 'checked' : 'unchecked'}
                                        onPress={() => handleUserTypeChange('Music Artist')}
                                        color={themeColors.bg}
                                    />
                                    <Text style={{ marginLeft: 8 }}>Music Artist</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
                                    <Checkbox.Android
                                        status={userType.includes('Producer') ? 'checked' : 'unchecked'}
                                        onPress={() => handleUserTypeChange('Producer')}
                                        color={themeColors.bg}
                                    />
                                    <Text style={{ marginLeft: 8 }}>Producer</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
                                    <Checkbox.Android
                                        status={userType.includes('Engineer') ? 'checked' : 'unchecked'}
                                        onPress={() => handleUserTypeChange('Engineer')}
                                        color={themeColors.bg}
                                    />
                                    <Text style={{ marginLeft: 8 }}>Engineer</Text>
                                </View>
                            </View>
                            <View style={{ width: '45%' }}>
                                <Text style={{ fontSize: 17, fontWeight: 'bold', marginLeft: 8 }}>Visual Media</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
                                    <Checkbox.Android
                                        status={userType.includes('Videographer') ? 'checked' : 'unchecked'}
                                        onPress={() => handleUserTypeChange('Videographer')}
                                        color={themeColors.bg}
                                    />
                                    <Text style={{ marginLeft: 8 }}>Videographer</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
                                    <Checkbox.Android
                                        status={userType.includes('Photographer') ? 'checked' : 'unchecked'}
                                        onPress={() => handleUserTypeChange('Photographer')}
                                        color={themeColors.bg}
                                    />
                                    <Text style={{ marginLeft: 8 }}>Photographer</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
                                    <Checkbox.Android
                                        status={userType.includes('Graphic artist') ? 'checked' : 'unchecked'}
                                        onPress={() => handleUserTypeChange('Graphic artist')}
                                        color={themeColors.bg}
                                    />
                                    <Text style={{ marginLeft: 8 }}>Graphic artist</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={() => console.log("Selected User Types:", userType) || navigation.navigate("SignUpTwo")}
                        style={{ backgroundColor: themeColors.bg, padding: 10, borderRadius: 5, marginTop: 20 }}>
                        <Text style={{ color: themeColors.slv, fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Continue</Text>
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

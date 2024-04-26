import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../constants/Colors';
import { Ionicons,MaterialCommunityIcons } from 'react-native-vector-icons';

const Button = (props) => {
    const [pressed, setPressed] = useState(false);
    const { name, icon, onPress } = props;

    const handlePress = () => {
        if (name === 'Like') {
            setPressed(!pressed);
            if (!pressed) {
                onPress('Like');
            } else {
                onPress('Dislike');
            }
        }
    };

    return (
        <TouchableOpacity onPress={handlePress} style={styles.buttonItem}>
            <MaterialCommunityIcons name={icon} size={16} color={pressed ? colors.liked : colors.like} />
            <Text style={[styles.text, { color: pressed ? colors.liked : colors.like }]}>{name}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        height: 36,
        borderBottomWidth: StyleSheet.hairlineWidth
    },

    buttonItem: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        backgroundColor: 'transparent',
        fontSize: 14,
        fontWeight: '700',
        marginLeft: 8,
    }
});

export default Button;

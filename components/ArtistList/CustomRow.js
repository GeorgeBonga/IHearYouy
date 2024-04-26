import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { themeColors } from '../../theme';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        marginLeft:16,
        marginRight:16,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 2,
    },
    title: {
        fontSize: 16,
        color: '#000',
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center',
    },
    container_button:{
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 3,


    },
    button:{
        backgroundColor: themeColors.bg,
        alignItems:'center',
        borderRadius :5,
        margin :6,
        padding: 4,
        color : 'red'
    
    },
    description: {
        fontSize: 11,
        fontStyle: 'italic',
        margin :5,
    },
    photo: {
        height: 50,
        width: 50,
    },
});

const CustomRow = ({ title,job, description, image_url }) => (
    <View style={styles.container}>
        <Image source={ image_url } style={styles.photo} />
   
        <View style={styles.container_text}>
            <Text style={styles.title}>
                {title}
            </Text>
            <Text style={[styles.title,{color: themeColors.bg}]}>
                {job}
            </Text>
            <Text style={styles.description}>
                {description}
            </Text>
        </View>
        <View style={styles.container_button}>
            <TouchableOpacity style={styles.button}>
                <Text style={{color:'silver'}}>Connect</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={{color:'silver'}} >Follow</Text>
            </TouchableOpacity>
        </View>

    </View>
);

export default CustomRow;
import React from 'react';
import { TextInput } from 'react-native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Login() {
    return (
        <View style={styles.container}>
            <View style={styles.divLogin}>
                <Text style={{fontSize: '25px', fontWeight: 'bold'}}>FIRST-APP</Text>
                <View>
                    <label>UserName</label>
                    <TextInput style={styles.input} />
                </View>
                <View>
                    <label>Password</label>
                    <TextInput style={styles.input} />
                </View>
                <TouchableOpacity>
                    <Text>
                        Logar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },

    divLogin: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '400px',
        width: '80%',
        backgroundColor: '#009a00',
        borderRadius: '30px',
        boxShadow: '4px 4px 8px #333',
        padding: '10px',
    },

    input: {
        height: '30px',
        width: '250px',
        backgroundColor: '#fff',
        border: '1px solid black',
        borderRadius: '5px'
    }

});


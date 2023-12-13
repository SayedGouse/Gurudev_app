import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import {
    Text,
    View,
    SafeAreaView,
    StyleSheet,
    Button,
    StatusBar,
    Image,
    TextInput,
    Modal,
    Pressable,
    TouchableOpacity
} from 'react-native';

const Phonenumber = ({ navigation }) => {


    const [countryCode, setCountryCode] = useState('+91');
    const [isCountryCodeModalVisible, setCountryCodeModalVisible] = useState(false);
    const [number, setNumber] = React.useState('');

    const handleNext = () => {
        // You can perform any validation or checks here before navigating
        // For simplicity, let's assume any non-empty number is valid
        if (number.trim() !== '') {
            // Navigate to the 'Otp' screen and pass the 'number' as a parameter
            navigation.navigate('Otp', { phoneNumber: number });
        } else {
            // Handle the case where the number is empty (you can show an error message)
        }
    };

    useEffect(() => {
        numberCall()
    }, [number])

    const numberCall = () => {
        console.warn(countryCode + number);
    };

    const toggleCountryCodeModal = () => {
        setCountryCodeModalVisible(!isCountryCodeModalVisible);
    };

    const countryCodes = [
        '+91', '+1', '+44', '+81', '+86', '+33', '+49', '+7', '+52', '+55', '+61', '+64', '+971', // Add more as needed
    ];

    const selectCountryCode = (code) => {
        setCountryCode(code);
        toggleCountryCodeModal();
    };
    return (
        <SafeAreaView>
            <StatusBar
                hidden={true}
            />
            <View style={style.container}>
                <View style={style.sideContainer}>

                    <Image
                        source={require('../assets/logo.png')}
                        style={style.image}
                    />
                </View>
                <View style={{ paddingLeft: 10, paddingTop: 5 }}>

                    <Text style={style.text}>GuruDev</Text>
                    <Text style={{ color: 'white' }}>E-Learning</Text>
                </View>
            </View>

            <View>
                <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: '30%' }}>Sign Up</Text>
                <View style={{ paddingLeft: '10%', paddingTop: '10%' }}>

                    <Text style={{ fontWeight: 'bold',marginTop:'10%' }}>Mobile Number</Text>

                </View>

                <View style={{ flexDirection: 'row' }}>
                    <View style={{ marginLeft: "10%", marginTop: '3%' }} >

                        <Pressable onPress={toggleCountryCodeModal}>
                            <Text style={style.countryCode}>{countryCode}</Text>
                        </Pressable>
                    </View>
                    <View style={{ marginLeft: "2%" }}>

                        <TextInput
                            placeholder='Enter your phone number'
                            onChangeText={(text) => setNumber(text)}
                            style={style.textinput1}
                            keyboardType='numeric'
                        />
                    </View>
                </View>

            </View>

            <Modal

                animationType='slide'
                transparent={true}
                visible={isCountryCodeModalVisible}
                onRequestClose={toggleCountryCodeModal}>
                <View style={style.modalContainer}>
                    <View style={style.modalContent}>
                        <FlatList
                            data={countryCodes}
                            keyExtractor={(item) => item}
                            renderItem={({ item }) => (
                                <Pressable onPress={() => selectCountryCode(item)}>
                                    <Text>{item}</Text>

                                </Pressable>
                            )}

                        />
                    </View>
                </View>
            </Modal>
            <TouchableOpacity style={style.next} onPress={handleNext}>
                <Text>Next</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    container: {
        backgroundColor: '#2B41B4',
        height: 150,
        width: '100%',
        position: 'relative',
        zIndex: 2,
        borderBottomRightRadius: 180,
        borderBottomLeftRadius: 130

    },


    countryCode: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        height: 39,
        borderWidth: 1,
        borderColor: 'black',
        paddingTop: '20%'
    },

    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },

    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },

    next: {
        marginLeft:'12%',
        marginTop:"5%"
    },

    textinput: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1, // Border width
        height: 40,
        borderRadius: 10,
        borderColor: 'black',
        paddingHorizontal: 10, // Adjust the padding as needed
        marginTop: 10, // Adjust the margin as needed
    },

    textinput1: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1, // Border width
        height: 40,
        width: 250,
        borderRadius: 10,
        borderColor: 'black',
        paddingHorizontal: 10, // Adjust the padding as needed
        marginTop: 10, // Adjust the margin as needed
    },

    text: {
        color: 'white',
        fontSize: 50,
        fontWeight: 'bold'

    },
    sideContainer: {
        backgroundColor: '#FCD85A',
        height: '110%',
        width: '40%',
        padding: '8%',
        position: 'absolute',
        alignSelf: 'flex-end',
        borderBottomLeftRadius: 180,
        borderTopLeftRadius: 180,


    },
    image: {
        width: 120,
        height: 120,

        marginLeft: '5%',
        resizeMode: 'cover', // You can adjust the resizeMode based on your requirements
    },

})

export default Phonenumber;

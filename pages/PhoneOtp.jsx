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
    TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PhoneOtp = (props) => {
    const [timer, setTimer] = useState(60);

    const navigation =useNavigation()


    // const handleOtp=()=>{
    //     const NewOtp=[...otp];
    //     NewOtp[index]=value;
    //     setOtp(NewOtp)

    //     if(index < 3 && value !== ''){
    //         refs[index + 1].focus()
    //     }
    // };

    // const refs=Array(4)
    // .fill()
    // .map((_, index)=>React.createRef())



    useEffect(() => {
        let interval;
        if (timer > 0) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        }
        return () => {
            clearInterval(interval);
        };
    }, [timer]);




    const handleResend = () => {
        // Add your logic to resend the OTP here
        setTimer(60); // Reset the timer
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

            </View>

            <View style={{ paddingLeft: '10%', paddingTop: '10%' }}>

                <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: '12%', marginBottom: '5%' }}>Enter Otp</Text>

            </View>

            

            <View style={{ flexDirection: 'row', marginLeft: '20%' }}>

                <TextInput maxLength={1} style={style.textinput} keyboardType='numeric' />
                <TextInput maxLength={1} style={style.textinput} keyboardType='numeric' />
                <TextInput maxLength={1} style={style.textinput} keyboardType='numeric' />
                <TextInput maxLength={1} style={style.textinput} keyboardType='numeric' />

                
            </View>

            

            <View style={style.next}>
                {timer > 0 ? (
                    <Text>Resend OTP in {timer} seconds</Text>
                ) : (
                    <TouchableOpacity onPress={handleResend}>
                        <Text>Resend</Text>
                    </TouchableOpacity>
                )}
            </View>

            <View style={style.next}>
                <TouchableOpacity  onPress={() => navigation.navigate('Catogery')}>
                    <Text>Next</Text>
                </TouchableOpacity>
            </View>

            

            



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






    textinput: {

        alignItems: 'center',
        borderWidth: 1, // Border width
        height: 40,
        borderRadius: 10,
        borderColor: 'black',
        paddingHorizontal: 10, // Adjust the padding as needed
        margin: 5,
        textAlign: 'center',
        fontSize: 18
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

    next: {
        // justifyContent: 'space-around',
        flexDirection: 'row',
        // flex: 1,
        marginLeft: '20%',
        marginTop:10
    },


})

export default PhoneOtp;

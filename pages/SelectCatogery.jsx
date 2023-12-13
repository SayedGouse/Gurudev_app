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
    TouchableOpacity,
    ScrollView
} from 'react-native';

const SelectCatogery = ({ navigation }) => {

    const Listdata = [

        {
            id: 1,
            img: require('../assets/bank.png'),
            title: 'KPSC',
            info: 'FDA | SDA | Group C'
        },
        {
            id: 2,
            img: require('../assets/image_a.png'),
            title: 'KPSC',
            info: 'FDA | SDA | Group C'
        },
        {
            id: 3,
            img: require('../assets/image.png'),
            title: 'KPSC',
            info: 'FDA | SDA | Group C'
        },
        {
            id: 4,
            img: require('../assets/UPSC.png'),
            title: 'KPSC',
            info: 'FDA | SDA | Group C'
        },
        {
            id: 5,
            img: require('../assets/logo.png'),
            title: 'KPSC',
            info: 'FDA | SDA | Group C'
        },
        {
            id: 6,
            img: require('../assets/bank.png'),
            title: 'KPSC',
            info: 'FDA | SDA | Group C'
        },
        {
            id: 7,
            img: require('../assets/bank.png'),
            title: 'KPSC',
            info: 'FDA | SDA | Group C'
        },
        {
            id: 8,
            img: require('../assets/bank.png'),
            title: 'KPSC',
            info: 'FDA | SDA | Group C'
        },
        {
            id: 9,
            img: require('../assets/bank.png'),
            title: 'KPSC',
            info: 'FDA | SDA | Group C'
        },


    ]

    const handle = (props) => {
        console.warn(props);
    }


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
                <Text style={{ fontSize: 25, fontWeight: 'bold', marginLeft: 60, marginTop: 40 }}>Select your course</Text>
                <Text style={{ marginLeft: 60, color: '#636389' }}>Choose the course you </Text>
                <Text style={{ marginLeft: 60, color: '#636389' }}>would like to continue with </Text>
            </View>
            
            

                    <FlatList
                    style={{maxHeight:1000, height:1000}}
                        data={Listdata}

                        keyExtractor={(item) => item.id}
                       
                        renderItem={({ item }) => (
                           
                            <TouchableOpacity onPress={() => handle(item.id)} style={style.catogery}>
                                <View style={style.logoimg}>

                                    <Image
                                        source={item.img}
                                        style={style.logo}
                                    />


                                </View>
                                <View style={style.logoinfo}>

                                    <Text style={{ fontWeight: "bold", color: '#1F1F39' }}>{item.title}</Text>
                                    <View>
                                        <Text style={{ color: '#636389' }}>{item.info}</Text>
                                    </View>
                                </View>

                            </TouchableOpacity>

                        



                        )}
                    />


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

    logo: {
        width: 30,
        height: 30,
        margin: 10
    },
    logoinfo: {
        margin: 13
    },
    logoimg: {
        backgroundColor: '#FBE8A4',
        width: 50,
        height: 50,
        borderRadius: 50,
        margin: 8,



    },
    catogery: {
        width: '80%',
        height: 70,
        borderWidth: 1,
        borderColor: '#9696BB',
        marginLeft: '10%',
        borderRadius: 20,
        flexDirection: 'row',
        margin: 5,
        flexGrow:1

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

export default SelectCatogery;

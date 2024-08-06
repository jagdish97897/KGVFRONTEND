import React, { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView, Text, TextInput, StyleSheet, View, Image, TouchableOpacity, Keyboard, Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default ({ navigation }) => {
    const [keyboardVisible, setKeyboardVisible] = useState(false);
    const [formData, setFormData] = useState({
        dlno: '',
        uploadphoto: '',
        selectkit: '',
        addons: '',
        waveamount: '',
    
    });

    const handleChange = (name, value) => {
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleRegister = async () => {
        try {
            const response = await fetch('http://192.168.1.6:8000/api/v1/visitor/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (response.ok) {
                Alert.alert('Success', 'Registration successful');
                navigation.navigate('Landing');
            } else {
                Alert.alert('Error', result.message || 'Registration failed');
            }
        } catch (error) {
            Alert.alert('Error', `Error: ${error.message}`);
        }
    };

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardVisible(true);
        });
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardVisible(false);
        });

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);
    // hi

    return (
        <LinearGradient colors={['#06264D', "#FFF"]} style={{ flex: 1 }} >
            <SafeAreaView style={{ flex: 1, padding: 40 }} >
                <KeyboardAwareScrollView
                    resetScrollToCoords={{ x: 0, y: 0 }}
                    contentContainerStyle={styles.container}
                    scrollEnabled={true}
                    enableAutomaticScroll={true}
                    enableOnAndroid={true}
                    extraScrollHeight={100}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                >
                    <Image
                        source={require("../assets/images/kgv.png")}
                        style={styles.logo}
                    />
                    <Text style={styles.registerText}>Book Vehicle</Text>
                    <TextInput
                        placeholder='Driving License'
                        style={styles.input}
                        placeholderTextColor="#000"
                        onChangeText={(text) => handleChange('dlno', text)}
                        value={formData.dlno}
                    />
                    <TextInput
                        placeholder='Upload Photos'
                        style={styles.input}
                        placeholderTextColor="#000"
                        onChangeText={(text) => handleChange('uploadphoto', text)}
                        value={formData.uploadphoto}
                      
                    />
                    <TextInput
                        placeholder='Select Kit'
                        style={styles.input}
                        placeholderTextColor="#000"
                        onChangeText={(text) => handleChange('selectkit', text)}
                        value={formData.selectkit}
                    />
                    <TextInput
                        placeholder='Add ons'
                        style={styles.input}
                        placeholderTextColor="#000"
                        onChangeText={(text) => handleChange('addons', text)}
                        value={formData.addons}
                       
                    />
                    <TextInput
                        placeholder='Wave Amount'
                        style={styles.input}
                        placeholderTextColor="#000"
                        onChangeText={(text) => handleChange('waveamount', text)}
                        value={formData.waveamount}
                    />
                    <TouchableOpacity 
                        style={styles.button} 
                        onPress={handleRegister}
                    >
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>

                </KeyboardAwareScrollView>
                
                {!keyboardVisible && (
                    <View style={styles.footer}>
                        <Image
                            source={require("../assets/images/mantra.jpg")}
                            style={styles.footerImage}
                        />
                        <View style={styles.footerTextContainer}>
                            <Text style={styles.footerText}>Made in</Text>
                            <Image
                                source={require("../assets/images/image 10.png")}
                                style={styles.footerFlag}
                            />
                        </View>
                        <Image
                            source={require("../assets/images/make-in-India-logo.jpg")}
                            style={styles.footerLogo}
                        />
                    </View>
                )}
            </SafeAreaView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 201,
        height: 181,
        alignSelf: 'center',
        marginBottom: 20
    },
    input: {
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        borderStyle: 'solid',
        padding: 10,
        width: '80%',
        marginTop: 10
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        width: '100%',
        marginTop: 20,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    registerText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 20
    },
    loginLink: {
        marginTop: 20,
    },
    loginText: {
        color: '#007BFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 16,
    },
    footerImage: {
        width: 60,
        height: 60,
    },
    footerTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    footerText: {
        color: '#000',
        paddingLeft: 2,
    },
    footerFlag: {
        width: 40,
        height: 20,
    },
    footerLogo: {
        width: 80,
        height: 60,
    }
});



// import {LinearGradient} from 'expo-linear-gradient';
// import { SafeAreaView, Text, TextInput, StyleSheet, View, Button, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import Logo from '../assets/images/logo.svg';
// import Ind from '../assets/images/ind.svg';
// import { AntDesign } from '@expo/vector-icons';

// // import Button from '../components/Buttons/Button';

// export default ({navigation}) => {
//     return (
//         <LinearGradient colors={['#06264D', "#FFF"]} style={{flex: 1}}>
//             <View className="mt-[50px] ml-[20px] flex-row">       
//             <AntDesign name="arrowleft" size={44} color="black" />
//             <Text className="text-3xl ml-[40px]">KYC Verification</Text>
//             </View> 
//             <SafeAreaView style={{flex: 1, padding: 10}}>
//             <KeyboardAvoidingView
//         style={{flex: 1}}
//         behavior={Platform.OS === "ios" ? "padding" : null}
//         keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0} // Adjust this value based on your needs
//       >
//         <ScrollView contentContainerStyle={styles.container}>
//           <TextInput placeholder='Aadhar Number' style={styles.input} placeholderTextColor="#000" />
//           <TextInput placeholder='PAN Number' style={styles.input} placeholderTextColor="#000" />
//           <TextInput placeholder='CIN Number' style={styles.input} placeholderTextColor="#000" />
//           <View className="flex-row"><Text className="p-2 m-2 ml-0">Terms and Conditions</Text>
//           <TouchableOpacity onPress={()=>{navigation.navigate('KycTC')}}><Text className="bg-white p-2 m-2">Verify</Text></TouchableOpacity>
//           </View>
//           {/* <TextInput placeholder='Permissible Item' style={styles.input} placeholderTextColor="#000" />
//           <TextInput placeholder='Website' style={styles.input} placeholderTextColor="#000" /> */}
//         </ScrollView>
//       </KeyboardAvoidingView>
            
//             <TouchableOpacity onPress={() => navigation.navigate('Kyc2')}>
//             <View className="flex-row" >
//                 <Text className="ml-[250px] mr-[10px] text-xl ">Next</Text>
//                 <AntDesign className="ml-[280px]" name="right" size={27} color="black" />
//             </View>
//             </TouchableOpacity>
//             </SafeAreaView>
//         </LinearGradient>
//     );
// };

// const styles = new StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//     input: {
//         borderBottomWidth: 2,
//         borderBottomColor: 'black',
//         borderStyle: 'solid',
//         padding: 10,
//         width: '80%',
//         marginTop: 10
//     }
// })

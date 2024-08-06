import React from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import LottieView from 'lottie-react-native';

export default ({ navigation }) => {
  return (
    <LinearGradient colors={['#06264D', '#FFF']} style={styles.gradientBackground}>
      <SafeAreaView style={styles.container}>
        <View style={styles.contentContainer}>
          <Image
            source={require("../assets/images/kgv.png")}
            style={styles.logo}
          />
          <LottieView
            source={require('../assets/images/animation1.json')} // Make sure to update the path to your Lottie JSON file
            autoPlay
            loop
            style={styles.backgroundAnimation}
          />
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>Welcome to KGV</Text>
          </View>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('RegisterCons')}>
            <LinearGradient 
              start={{ x: 0, y: 0 }} 
              end={{ x: 1, y: 0 }} 
              colors={['#A9CBF4', '#06264D']} 
              style={styles.button}
            >
              <Text style={styles.buttonText}>
                Visit App
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  backgroundAnimation: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 100, // Position the animation from the top
    zIndex: -1, // Ensure the animation stays behind other content
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingHorizontal: 20, // Added padding for better spacing on smaller devices
    zIndex: 1,
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 360, // Adjusted margin below the logo
  },
  welcomeContainer: {
    marginBottom: 20, // Space between the welcome text and the button
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  buttonContainer: {
    marginTop: 20, // Adjusted margin for spacing
  },
  button: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 20,
    height: 38,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center', // Center the text inside the button
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'transparent',
  },
});


// import React from 'react';
// import { SafeAreaView, Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import LottieView from 'lottie-react-native';
// import { LinearGradient } from 'expo-linear-gradient';

// export default ({ navigation }) => {
//   return (
//     <LinearGradient colors={['#06264D', '#FFF']} style={styles.gradientBackground}>
//     <SafeAreaView style={styles.container}>
//       <View style={styles.contentContainer}>
//         <Image
//           source={require("../assets/images/kgv.png")}
//           style={styles.logo}
//         />
//         <LottieView
//           source={require('../assets/images/animation1.json')} // Make sure to update the path to your Lottie JSON file
//           autoPlay
//           loop
//           style={styles.backgroundAnimation}
//         />
//         <View style={styles.welcomeContainer}>
//           <Text style={styles.welcomeText}>Welcome to KGV</Text>
//         </View>
//         <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('RegisterCons')}>
//           <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#A9CBF4', '#06264D']} style={styles.button}>
//             <Text style={styles.buttonText}>
//              Visit App
//             </Text>
//           </LinearGradient>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   gradientBackground: {
//     flex: 1,
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '100%',
//     height: '100%',
//     backgroundColor: '#fff', // Added background color to ensure visibility
//   },
//   backgroundAnimation: {
//     position: 'absolute',
//     width: '100%',
//     height: '100%',
//     top: 100, // Position the animation from the top
//     zIndex: -1, // Ensure the animation stays behind other content
//   },
//   contentContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '100%',
//     height: '100%',
//     paddingHorizontal: 20, // Added padding for better spacing on smaller devices
//     zIndex: 1,
//   },
//   logo: {
//     width: 180,
//     height: 180,
//     marginBottom: 360, // Adjusted margin below the logo
//   },
//   welcomeContainer: {
//     marginBottom: 20, // Space between the welcome text and the button
//   },
//   welcomeText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   buttonContainer: {
//     marginTop: 20, // Adjusted margin for spacing
//   },
//   button: {
//     paddingLeft: 15,
//     paddingRight: 15,
//     borderRadius: 20,
//     height: 38,
//     width: 200,
//     justifyContent: 'center',
//     alignItems: 'center', // Center the text inside the button
//   },
//   buttonText: {
//     fontSize: 18,
//     textAlign: 'center',
//     color: 'white',
//     backgroundColor: 'transparent',
//   },
// });


// import React from 'react';
// import { SafeAreaView, Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import LottieView from 'lottie-react-native';

// export default ({ navigation }) => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.contentContainer}>
//         <Image
//           source={require("../assets/images/kgv.png")}
//           style={styles.logo}
//         />
//         <LottieView
//           source={require('../assets/images/animation1.json')} // Make sure to update the path to your Lottie JSON file
//           autoPlay
//           loop
//           style={styles.backgroundAnimation}
//         />
//         <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('RegisterCons')}>
//           <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#A9CBF4', '#06264D']} style={styles.button}>
//             <Text style={styles.buttonText}>
//               Continue
//             </Text>
//           </LinearGradient>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '100%',
//     height: '100%',
//     backgroundColor: '#fff', // Added background color to ensure visibility
//   },
//   backgroundAnimation: {
//     position: 'absolute',
//     width: '100%',
//     height: '100%',
//     top: 100, // Position the animation from the top
//     zIndex: -1, // Ensure the animation stays behind other content
//   },
//   contentContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '100%',
//     height: '100%',
//     paddingHorizontal: 20, // Added padding for better spacing on smaller devices
//     zIndex: 1,
//   },
//   logo: {
//     width: 180,
//     height: 140,
//     marginBottom: 360, // Added margin below the logo
//   },
//   buttonContainer: {
//     marginTop: 20, // Adjusted margin for spacing
//   },
//   button: {
//     paddingLeft: 15,
//     paddingRight: 15,
//     borderRadius: 20,
//     height: 38,
//     width: 200,
//     justifyContent: 'center',
//     alignItems: 'center', // Center the text inside the button
//   },
//   buttonText: {
//     fontSize: 18,
//     textAlign: 'center',
//     color: 'white',
//     backgroundColor: 'transparent',
//   },
// });

// import React from 'react';
// import { SafeAreaView, Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import LottieView from 'lottie-react-native';

// export default ({ navigation }) => {
//   return (
//     <SafeAreaView style={styles.container}>

//       <View style={styles.contentContainer}>
//         <Image
//           source={require("../assets/images/kgv.png")}
//           style={styles.logo}
//         />
//           <LottieView
//         source={require('../assets/images/animation1.json')} // Make sure to update the path to your Lottie JSON file
//         autoPlay
//         loop
//         style={styles.backgroundAnimation}
//       />
//         <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('RegisterCons')}>
//           <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#A9CBF4', '#06264D']} style={styles.button}>
//             <Text style={styles.buttonText}>
//               Order Form
//             </Text>
//           </LinearGradient>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '100%',
//     height: '100%',
   
//   },
//   backgroundAnimation: {
//     position: 'absolute',
//     width: '100%',
//     height: '80%',
//     marginTop: 90,
//   },
//   contentContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '100%',
//     marginTop: 90,
//   },
//   logo: {
//     alignSelf: 'center',
//     width: 180,
//     height: 140,
//   },
//   buttonContainer: {
//     marginTop: 120,
//     alignSelf: 'center',
//   },
//   button: {
//     paddingLeft: 15,
//     paddingRight: 15,
//     borderRadius: 20,
//     height: 38,
//     width: 200,
//     justifyContent: 'center',
//   },
//   buttonText: {
//     fontSize: 18,
//     textAlign: 'center',
//     color: 'white',
//     backgroundColor: 'transparent',
//   },
// });

// import React from 'react';
// import { SafeAreaView, Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';


// export default function App({ navigation }) {
//   return (
//     <SafeAreaView className="flex-1 justify-center items-center w-full">
//       <View className="mb-16">
     
//         <Image
//           source={require("../assets/images/logo-removebg-preview 1.png")}
//          className="mt-20 self-center w-[201px] h-[181px]"
//         />


//         <TouchableOpacity className="mt-4 self-center" onPress={() => navigation.navigate('RegisterCons')}>
//           <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#A9CBF4', '#06264D']} className="px-4 rounded-full h-[38px] w-[200px] flex justify-center"
//           >
//             <Text className="text-lg text-center text-white bg-transparent">
//               Order Form
//             </Text>
//           </LinearGradient>
//         </TouchableOpacity>



//       </View>

//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   linearGradient: {
//     paddingLeft: 15,
//     paddingRight: 15,
//     borderRadius: 20,
//     height: 38,
//     width: 200,
//     justifyContent: 'center',
//   },

// });


// import { SafeAreaView, Text, View, Button, Image } from "react-native";
// import { LinearGradient } from 'expo-linear-gradient';
// import { TouchableOpacity, StyleSheet } from 'react-native';
// import Logo from '../assets/images/logo.svg';
// import Ind from '../assets/images/ind.svg'
// // import Button from "../components/Buttons/Button";

// export default ({ navigation }) => {
//   return (
//     <>
//       {/* <Logo /> */}
//       <Image
//         className="mt-[80px] ml-[110px]"
//         source={require("../assets/images/logo-removebg-preview 1.png")}
//         style={{ width: 201, height: 181 }}
//       />
//       <TouchableOpacity className="ml-[100px] my-8 mt-[60%]" onPress={() => navigation.navigate('FlowSelect')}>
//         <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#A9CBF4', '#06264D']} style={styles.linearGradient}>
//           <Text style={styles.buttonText}>
//             Login
//           </Text>
//         </LinearGradient>
//       </TouchableOpacity >
//       <TouchableOpacity className="ml-[100px]" onPress={() => navigation.navigate('Marketplace')}>
//         <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#A9CBF4', '#06264D']} style={styles.linearGradient}>
//           <Text style={styles.buttonText}>
//             SignUp
//           </Text>
//         </LinearGradient>
//       </TouchableOpacity>

//       <View className="flex-1 flex-row mt-[50%] ml-[35%]">
//         <Text className="">Made in</Text>
//         <Image
//           className=" ml-2"
//           source={require("../assets/images/image 10.png")}
//           style={{ width: 40, height: 22 }}
//         />
//       </View>
//     </>
//   )
// }


// var styles = StyleSheet.create({
//   linearGradient: {
//     paddingLeft: 15,
//     paddingRight: 15,
//     borderRadius: 20,
//     height: 38,
//     width: 200
//   },
//   buttonText: {
//     fontSize: 18,
//     textAlign: 'center',
//     margin: 5,
//     color: '#ffffff',
//     backgroundColor: 'transparent',
//   },
// });
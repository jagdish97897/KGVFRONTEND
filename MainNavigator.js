// import { createStackNavigator } from '@react-navigation/stack';
import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landing from './screens/Landing';
import FlowSelect from './screens/FlowSelect';
import LoginCons from './screens/LoginCons';
import Home from './screens/Home';
import LoginVsp from './screens/LoginVsp';
import Marketplace from './screens/Marketplace';
import About from './screens/About'; 
import Profile from './screens/Profile';
import Test from './screens/Test';
import Dashboard1 from './screens/Dashboard1';
import Trips from './screens/Trips';
import Settings from './screens/Settings';
import Legal from './screens/Legal';
import Login from './features/auth/components/Login';
import Splash1 from './screens/Splash1';
import Splash2 from './screens/Splash2';
import Kyc1 from './screens/Kyc1';
import Kyc2 from './screens/Kyc2';
import KycTC from './screens/KycTC';
import MarketPlaceBeforeBooking from './screens/MarketPlaceBeforeBooking';
import BookingForm from './screens/BookingForm';
import ConfirmationUi from './screens/ConfirmationUi';
import Preview from './screens/Preview';
import MarketplaceAfterBooking from './screens/MarketplaceAfterBooking';
import MarketplaceAfterRebid from './screens/MarketplaceAfterRebid';
import HomePreKyc from './screens/HomePreKyc';
import tripStatus from './screens/tripStatus';
import InsufficientFunds from './screens/InsufficientFunds';
import RebidPrice from './screens/RebidPrice';
import Wallet from './screens/Wallet';
import VspSignup from './vspscreens/VspSignup'
import VspSignup1 from './vspscreens/VspSignup1'
import VspDashboard from './vspscreens/VspDashboard'
import VspPreDashboard from './vspscreens/VspPreDashboard'
import VspDocumentation from './vspscreens/VspDocumentation'
import VspKycVerification from './vspscreens/VspKycVerification'
import VspDriverDetails from './vspscreens/VspDriverDetails'
import VspVechileDimensions from './vspscreens/VspVechileDimensions'
import VspCompleteRegistration from './vspscreens/VspCompleteRegistration'
import VspCompleteRegistration1 from './vspscreens/VspCompleteRegistration1'
import VspProfile from './vspscreens/VspProfile'
import VspProfiled from './vspscreens/VspProfiled'
import VspTrips from './vspscreens/VspTrips'
import VspMarketPlace1 from './vspscreens/VspMarketPlace1'
import VspMarketPlace2 from './vspscreens/VspMarketPlace2'
import VspMarketPlaceNegotiating from './vspscreens/VspMarketPlaceNegotiating'
import VspMarketPlaceNegotiating1 from './vspscreens/VspMarketPlaceNegotiating1'
import VspMarketPlaceNegotiating2 from './vspscreens/VspMarketPlaceNegotiating2'
import VspMarketPlaceNegotiating3 from './vspscreens/VspMarketPlaceNegotiating3'
import VspSettings from './vspscreens/VspSettings'
import VspLegal from './vspscreens/VspLegal'
import VspHelp from './vspscreens/VspHelp'
import VspAbout from './vspscreens/VspAbout'
import TrackDriver from './screens/TrackDriver';
import FlowSelectregistation from './screens/FlowSelectregistation';
import RegisterCons from './screens/RegisterCons';
import RegisterVsp from './screens/RegisterVsp';
import Loginvisitor from './screens/Loginvisitor';
import BikeCart from './screens/BikeCart';


// const Stack = createStackNavigator();
const Stack = createNativeStackNavigator();

export default () => {

   const [splash1Visible, setSplash1Visible] = useState(true);
  const [splash2Visible, setSplash2Visible] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setSplash1Visible(false);
      setSplash2Visible(true);
    }, 2000); // Set duration for Splash1 (in milliseconds)

    const timer2 = setTimeout(() => {
      setSplash2Visible(false);
    }, 4000); // Set duration for Splash2 (in milliseconds)

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

   return (
      <>
      {/* {splash1Visible && <Splash1 />}
      {splash2Visible && <Splash2 />}
      {!splash1Visible && !splash2Visible && ( */}
   <Stack.Navigator initialRouteName='Landing' screenOptions={{ headerShown: false }}>
   <Stack.Screen name="Landing" component={Landing} />
   <Stack.Screen name="bikecart" component={BikeCart} />
   <Stack.Screen name="FlowSelect" component={FlowSelect} />
   <Stack.Screen name="FlowSelectregistation" component={FlowSelectregistation} />
   <Stack.Screen name="LoginCons" component={LoginCons} />
   <Stack.Screen name="RegisterCons" component={RegisterCons} />
   <Stack.Screen name="Home" component={Home} />
   <Stack.Screen name="LoginVsp" component={LoginVsp} />
   <Stack.Screen name="RegisterVsp" component={RegisterVsp} />
   <Stack.Screen name="Marketplace" component={Marketplace} />
   <Stack.Screen name="About" component={About} />
   <Stack.Screen name="Profile" component={Profile} />
   <Stack.Screen name="Test" component={Test} />
   <Stack.Screen name="Dashboard1" component={Dashboard1} />
   <Stack.Screen name="Trips" component={Trips} />
   <Stack.Screen name="Settings" component={Settings} />
   <Stack.Screen name="Legal" component={Legal} />
   <Stack.Screen name="Login" component={Login} />
   <Stack.Screen name="Loginvisitor" component={Loginvisitor} />
   <Stack.Screen name="Splash1" component={Splash1} />
   <Stack.Screen name="Splash2" component={Splash2} />
   <Stack.Screen name="Kyc1" component={Kyc1} />
   <Stack.Screen name="Kyc2" component={Kyc2} />
   <Stack.Screen name="KycTC" component={KycTC} />
   <Stack.Screen name="MarketPlaceBeforeBooking" component={MarketPlaceBeforeBooking} />
   <Stack.Screen name="BookingForm" component={BookingForm} />
   <Stack.Screen name="ConfirmationUi" component={ConfirmationUi} />
   <Stack.Screen name="Preview" component={Preview} />
   <Stack.Screen name="MarketplaceAfterBooking" component={MarketplaceAfterBooking} />
   <Stack.Screen name="MarketplaceAfterRebid" component={MarketplaceAfterRebid} />
   <Stack.Screen name="HomePreKyc" component={HomePreKyc} />
   <Stack.Screen name="tripStatus" component={tripStatus} />
   <Stack.Screen name="InsufficientFunds" component={InsufficientFunds} />
   <Stack.Screen name="RebidPrice" component={RebidPrice} />
   <Stack.Screen name="Wallet" component={Wallet} />
   <Stack.Screen name="VspSignup" component={VspSignup} />
   <Stack.Screen name="VspSignup1" component={VspSignup1} />
   <Stack.Screen name="VspDashboard" component={VspDashboard} />
   <Stack.Screen name="VspPreDashboard" component={VspPreDashboard} />
   <Stack.Screen name="VspDocumentation" component={VspDocumentation} />
   <Stack.Screen name="VspDriverDetails" component={VspDriverDetails} />
   <Stack.Screen name="VspKycVerification" component={VspKycVerification} />
   <Stack.Screen name="VspVechileDimensions" component={VspVechileDimensions} />
   <Stack.Screen name="VspCompleteRegistration" component={VspCompleteRegistration} />
   <Stack.Screen name="VspCompleteRegistration1" component={VspCompleteRegistration1} />
   <Stack.Screen name="VspProfile" component={VspProfile} />
   <Stack.Screen name="VspProfiled" component={VspProfiled} />
   <Stack.Screen name="VspTrips" component={VspTrips} />
   <Stack.Screen name="VspMarketPlace1" component={VspMarketPlace1} />
   <Stack.Screen name="VspMarketPlace2" component={VspMarketPlace2} />
   <Stack.Screen name="VspMarketPlaceNegotiating" component={VspMarketPlaceNegotiating} />
   <Stack.Screen name="VspMarketPlaceNegotiating1" component={VspMarketPlaceNegotiating1} />
   <Stack.Screen name="VspMarketPlaceNegotiating2" component={VspMarketPlaceNegotiating2} />
   <Stack.Screen name="VspMarketPlaceNegotiating3" component={VspMarketPlaceNegotiating3} />
   <Stack.Screen name="VspSettings" component={VspSettings} />
   <Stack.Screen name="VspLegal" component={VspLegal} />
   <Stack.Screen name="VspHelp" component={VspHelp} />
   <Stack.Screen name="VspAbout" component={VspAbout} />
   {/* <Stack.Screen name="TrackDriver" component={TrackDriver} /> */}
</Stack.Navigator>
  {/* )}  */}
 </>
);

}
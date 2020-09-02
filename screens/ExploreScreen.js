import React, { useEffect } from 'react';
import { View, Text, BackHandler, SafeAreaView, Dimensions } from 'react-native';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import EventPoster from '../Components/EventPoster';
import EventPopularPoster from '../Components/EventPopularPoster';
import PeopleCard from '../Components/PeopleCard';
import { EventScreenHeader } from '../Components/Headers';
import { EventScreenFilters } from '../Components/Filters';
import CarouselEventScreen from '../Components/CarouselEventScreen';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from 'react-native-underline-tabbar';

import StairwayToHeaven from '../assets/Heaven.png';
import SailorMoon from '../assets/sailormoon.png';
import DaftPunk from '../assets/daftpunk.jpg';
import City from '../assets/city.png';
import Lofi from '../assets/lofi.jpg';
import Arcade from '../assets/Arcade.jpg';
import Cool from '../assets/cool.jpg';
import Pepsi from '../assets/pepsi.jpg';
import PeopleCardTwo from '../Components/PeopleCardTwo';

const {width, height} = Dimensions.get("screen");

const EventScreen = ({label}) => (
    <View>
    <ScrollView>
        <CarouselEventScreen
            images={[
                'https://picsum.photos/id/334/2304/1536',
                'https://picsum.photos/id/249/3000/2000',
                'https://picsum.photos/id/39/3456/2304',
                'https://picsum.photos/id/460/4476/2984'
            ]} 
        />
        <View
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <EventScreenFilters />
        </View>
        <GestureRecognizer
            style={{ 
                flex: 1,
            }}
        >

            <View style={{ backgroundColor: 'rgba(231, 90, 124, 0.15)' }}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}
                >
                    <Text
                        style={{
                            top: height*0.03,
                            left: width*0.04,
                            fontFamily: 'Regular',
                            fontSize: 18,
                            color: 'rgba(44, 54, 63, 0.834)'
                        }}
                    >
                        Popular
                    </Text>
                    <Text 
                        style={{
                            top: height*0.03,
                            left: -56,
                            fontFamily: 'SemiBold',
                            fontSize: 18,
                            color: 'rgba(44, 54, 63, 0.834)'
                        }}
                    >
                        Events
                    </Text>
                    <TouchableOpacity
                        style={{
                            top: 18,
                            right: 10,                                        
                            borderRadius: 16,
                            backgroundColor: 'rgba(255,255,255,0.4)',
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: 'Light',
                                color: 'rgba(44, 54, 63, 0.834)',
                                padding: 7
                            }}
                        >
                            Show All
                        </Text>
                    </TouchableOpacity>

                </View>

                <View>
                    <ScrollView
                        horizontal={true}
                        contentContainerStyle={{
                            paddingHorizontal: 3,
                            paddingBottom: 20
                        }}
                    >
                        <EventPopularPoster 
                            source={City} 
                            name='Folklore - Taylor Swift'
                            venue='Club Devil, 5th Avenue, 287' 
                            date='Sun 23, August'   
                        />

                        <EventPopularPoster 
                            source={Lofi} 
                            name='Lofi Chillout Sessions'
                            venue='Atlanta City, Fiasco Street' 
                            date='Thu 27, August'   
                        />

                        <EventPopularPoster 
                            source={Arcade} 
                            name='Game-Boy Wonder Club'
                            venue='Saint De Boulevard Road' 
                            date='Mon 31, August'   
                        />
                    </ScrollView>
                </View>                           
            </View>

            <View style={{ backgroundColor: 'rgba(231, 90, 124, 0.15)' }}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}
                >
                    <Text
                        style={{
                            top: height*0.03,
                            left: width*0.05,
                            fontFamily: 'Regular',
                            fontSize: 18,
                            color: 'rgba(44, 54, 63, 0.834)'
                        }}
                    >
                        Nearby
                    </Text>
                    <Text 
                        style={{
                            top: height*0.03,
                            left: -45,
                            fontFamily: 'SemiBold',
                            fontSize: 18,
                            color: 'rgba(44, 54, 63, 0.834)'
                        }}
                    >
                        Concerts
                    </Text>
                    <TouchableOpacity
                        style={{
                            top: 18,
                            right: 10,                                        
                            borderRadius: 16,
                            backgroundColor: 'rgba(255,255,255,0.4)',
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: 'Light',
                                color: 'rgba(44, 54, 63, 0.834)',
                                padding: 7
                            }}
                        >
                            Show All
                        </Text>
                    </TouchableOpacity>

                </View>

                <View>
                    <ScrollView
                        horizontal={true}
                        contentContainerStyle={{
                            paddingHorizontal: 3,
                            paddingBottom: 20
                        }}
                    >
                        <EventPoster source={StairwayToHeaven}>
                            <Text>Stairway To Heaven - Concert Hall 79</Text>
                        </EventPoster>

                        <EventPoster source={SailorMoon}>
                            <Text>Sailor Moon - Feature Film</Text>
                        </EventPoster>

                        <EventPoster source={DaftPunk}>
                            <Text>Daft Punk - Live @ Wireless Festival</Text>
                        </EventPoster>
                    </ScrollView>
                </View>                           
            </View>
        </GestureRecognizer>
    </ScrollView>
    </View>
);

const PeopleScreen = () => (

    <View 
        style={{
            marginTop: -18,
            flex: 1,
            marginBottom: 0,
            backgroundColor: 'rgba(231, 90, 124, 0.15)',
        }}
    >
        <ScrollView contentContainerStyle={{paddingBottom: 22}}>
            {/* <PeopleCard cover={Cool} profile={Pepsi} name='Spike Spiegel' bio='You though it was Spike but it was me DIO.'/> */}
            <PeopleCardTwo cover={Cool} profile={Pepsi} name='Spike Spiegel' instrument='Percussions' color='rgba(122, 229, 130, 0.5)' />
            <PeopleCardTwo cover={Cool} profile={Pepsi} name='Spike Spiegel' instrument='Drums' color='rgba(255, 0, 0, 0.5)' />
            <PeopleCardTwo cover={Cool} profile={Pepsi} name='Spike Spiegel' instrument='Synth' color='rgba(0, 165, 207, 0.5)' />
            <PeopleCardTwo cover={Cool} profile={Pepsi} name='Spike Spiegel' instrument='Bass' color='rgba(242, 149, 89, 0.5)' />
            <PeopleCardTwo cover={Cool} profile={Pepsi} name='Spike Spiegel' instrument='Guitar' color='rgba(241, 211, 2, 0.5)' />
        </ScrollView>

    </View>
    
);

const ExploreScreen = ({ navigation }) => {

    
    const handleBackButton = () => {
        navigation.navigate('Home');
        return true;
    }

    useEffect(() => {

        navigation.addListener('focus', () => {
            BackHandler.addEventListener('hardwareBackPress', handleBackButton)
        })

        navigation.addListener('blur', () => {
            BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
        })
    });

    let [fontsLoaded] = useFonts({
        'Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
        'SemiBold': require('../assets/fonts/Montserrat-SemiBold.ttf'),
        'Medium': require('../assets/fonts/Montserrat-Medium.ttf'),
        'Light': require('../assets/fonts/Montserrat-Light.ttf'),
        'Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
    });

    function onSwipeLeft(gestureState) {
        navigation.navigate('Notifications');
    }

    function onSwipeRight(gestureState) {
        navigation.navigate('Home');
    }

    function onSwipe(gestureName, gestureState) {
        const { SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;

        switch (gestureName) {
            case SWIPE_LEFT:
                navigation.navigate('Notifications');
                break;
            case SWIPE_RIGHT:
                navigation.navigate('Home');
                break;
        }
    }


    if (!fontsLoaded) {
        return <AppLoading />;

    } else {

        const config = {
            velocityThreshold: 0.5,
            directionalOffsetThreshold: 800
        };

        // onSwipe={(direction, state) => onSwipe(direction, state)}
        // onSwipeLeft={(state) => onSwipeLeft(state)}
        // onSwipeRight={(state) => onSwipeRight(state)}
        // config={config}

        return (
            <SafeAreaView
                style={{
                    flex: 1,
                    marginTop: Constants.statusBarHeight,
                }}
            >   
                             
                    {/* <View
                        style={{
                            marginBottom: -10,
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <EventScreenHeader />
                        
                    </View> */}
                    <ScrollableTabView
                        tabBarInactiveTextColor='white'
                        tabBarActiveTextColor='rgba(44,54,63,0.85)'
                        renderTabBar={() => <TabBar 
                            underlineColor='rgba(44,54,63,0.85)' 
                            tabBarTextStyle={{
                                fontFamily: 'SemiBold',
                                fontSize: 22
                            }}
                            tabBarStyle={{ 
                                backgroundColor: 'rgba(231,90,124,0.5)',
                                paddingTop: 20,
                                borderBottomWidth: 0,
                                marginTop: 0
                    }}/>}>
                        <EventScreen tabLabel={{label: 'Events'}} label=''/>
                        <PeopleScreen tabLabel={{label: 'People'}} label='People'/>
                    </ScrollableTabView>
                    
                
            </SafeAreaView>
        );
    }
}

export default ExploreScreen;
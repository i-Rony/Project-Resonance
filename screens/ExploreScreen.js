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
import PeopleCardThree from '../Components/PeopleCardThree';
import PlaylistCard from '../Components/PlaylistCard';

const {width, height} = Dimensions.get("screen");

const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean enim quam, commodo id orci in, dignissim dapibus orci. Donec pretium sodales suscipit. Nullam non nunc consequat, faucibus turpis quis, ultrices tortor. Integer congue libero ut rutrum sodales. Quisque pretium placerat vulputate. Vivamus a ultricies ex, ut cursus nibh. Nulla in lectus quis lorem ultricies elementum at sed velit.'

const EventScreen = ({ navigation }) => (
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

            <View style={{  }}>
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
                            navigation={navigation}
                            source={City} 
                            name='Folklore - Taylor Swift'
                            venue='Club Devil, 5th Avenue, 287' 
                            date='Sun 23, August' 
                            desc={description}  
                        />

                        <EventPopularPoster 
                            navigation={navigation}
                            source={Lofi} 
                            name='Lofi Chillout Sessions'
                            venue='Atlanta City, Fiasco Street' 
                            date='Thu 27, August' 
                            desc={description}  
                        />

                        <EventPopularPoster 
                            navigation={navigation}
                            source={Arcade} 
                            name='Game-Boy Wonder Club'
                            venue='Saint De Boulevard Road' 
                            date='Mon 31, August' 
                            desc={description}  
                        />
                    </ScrollView>
                </View>                           
            </View>

            <View style={{  }}>
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
                        <EventPoster source={StairwayToHeaven} navigation={navigation}>
                            <Text>Stairway To Heaven - Concert Hall 79</Text>
                        </EventPoster>

                        <EventPoster source={SailorMoon} navigation={navigation}>
                            <Text>Sailor Moon - Feature Film</Text>
                        </EventPoster>

                        <EventPoster source={DaftPunk} navigation={navigation}>
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
            <PeopleCardThree cover={Cool} profile={Pepsi} name='Spike Spiegel' instrument='Synth' color='rgba(122, 229, 130, 1)'/>
            <PeopleCardThree cover={Cool} profile={Pepsi} name='Spike Spiegel' instrument='Guitar' color='rgba(102, 248, 251, 1)'/>
            <PeopleCardThree cover={Cool} profile={Pepsi} name='Spike Spiegel' instrument='Ukelele' color='rgba(247, 255, 96, 1)'/>
            <PeopleCardThree cover={Cool} profile={Pepsi} name='Spike Spiegel' instrument='Bongo Drums' color='rgba(243, 121, 99, 1)'/>
            <PeopleCardThree cover={Cool} profile={Pepsi} name='Spike Spiegel' instrument='Violin' color='rgba(247, 198, 255, 1)'/>
            <PeopleCardThree cover={Cool} profile={Pepsi} name='Spike Spiegel' instrument='Piano' color='rgba(212, 255, 229, 1)'/>
            <PeopleCardThree cover={Cool} profile={Pepsi} name='Spike Spiegel' instrument='Cello' color='rgba(255, 216, 156, 1)'/>
            <PeopleCardThree cover={Cool} profile={Pepsi} name='Spike Spiegel' instrument='Drums' color='rgba(251, 99, 118, 1)'/>
            <PeopleCardThree cover={Cool} profile={Pepsi} name='Spike Spiegel' instrument='Vocals' color='rgba(255, 255, 243, 1)'/>
            <PeopleCardThree cover={Cool} profile={Pepsi} name='Spike Spiegel' instrument='Saxophone' color='rgba(23, 180, 152, 1)'/>
            <PeopleCardThree cover={Cool} profile={Pepsi} name='Spike Spiegel' instrument='Flute' color='rgba(2, 159, 170, 1)'/>
            <PeopleCardThree cover={Cool} profile={Pepsi} name='Spike Spiegel' instrument='Mouth Organ' color='rgba(255, 137, 175, 1)'/>
        </ScrollView>

    </View>
    
);

const TrendingScreen = () => {
    return (
        <View>
            <PlaylistCard />
        </View>
    )
};

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
                        <EventScreen tabLabel={{label: 'Events'}} label='' navigation={navigation}/>
                        <PeopleScreen tabLabel={{label: 'People'}} label='' navigation={navigation}/>
                        <TrendingScreen tabLabel={{label: 'Trending'}} label='' navigation={navigation}/>
                    </ScrollableTabView>
                    
                
            </SafeAreaView>
        );
    }
}

export default ExploreScreen;
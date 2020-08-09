import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, Animated} from 'react-native';
import CarouselItem from './CarouselItem';


const { width, height } = Dimensions.get("window");
let flatList;

function infiniteScroll(dataList) {
    const numberOfData = dataList.length
    let scrollValue = 0, scrolled = 0

    setInterval(() => {
        scroll++;

        if ( scrolled < numberOfData ) {
            scrollValue = scrollValue + width;
        }
        else {
            scrollValue = 0;
            scrolled = 0;
        }

        this.flatlist.scrollToOffset({ animated: true, offset: scrollValue })
    }, 3000 );
}

const Carousel = ({ data }) => {

    const scrollX = new Animated.View(0);
    let position = Animated.divide(scrollX, width);
    const [ data, setDataList ] = useState(data);

    useEffect(() => {
        setDataList(data);
        infiniteScroll(dataList);
    });

    if ( data && data.length ) {
        return (
            <View>
                <FlatList data={data}
                    ref={(flatList) => this.fLatlist = flatList}
                    keyExtractor={(item, index) => 'key' + index}
                    horizontal
                    pageEnabled
                    scrollEnabled
                    snapToAlignment={'center'}
                    scrollEventThrottle={16}
                    decelerationRate={"fast"}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => {
                        return <CarouselItem item={item} />
                    }}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }]
                    )}
                />
                <View style={styles.dotView}>
                    { data.map(( _, i ) =>{
                        let opacity = position.interpolate({
                            imputRange: [i - 1, i, i + 1],
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: 'clamp'
                        });
                        return(
                            <Animated.View
                                key={i}
                                style={{ opacity, height: 10, width: 10, background: '#595959', margin: 8, borderRadius: 5 }}  
                            />
                        );
                    })}
                </View>
            </View>
        );
    }

    console.log('Please provide images');
    return null;
}

export default Carousel;

const styles = StyleSheet.create({

    dotView: {
        flexDirection: "row",
        justifyContent: "center"
    }
});
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Colors from '../standards/colors';
import { useNavigation } from '@react-navigation/native';

const SearchResultCard = ({ flight }) => {
    console.log('route frmom flatlost')
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.item} onPress={() => {
            navigation.navigate('FlightDetails', { flightDetails: flight, route: navigation })
            console.log(flight)
        }}>
            <Text style={styles.seatsStyle}>{flight.seatsAvailable} seats left</Text>
            <Text style={styles.airline}>{flight.airline}</Text>
            <View style={{ width: '60%' }}>
                <View>
                    <Text style={styles.time}>{new Date(flight.departureTime).toLocaleTimeString('en-US')}<Text> - </Text>{new Date(flight.arrivalTime).toLocaleTimeString('en-US')}</Text>
                </View>
                <View>
                    <Text style={styles.duration}>{flight.duration}</Text>
                </View>
            </View>
            <Text style={styles.price}><Text>{'\u20B9'}</Text>{flight.price}</Text>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    item: {
        backgroundColor: Colors.textColorWhite,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
        // justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    airline: {
        fontSize: 12,
        width: '25%'
    },
    time: {
        fontSize: 12,
        width: '100%',
        paddingBottom: 5,
        fontSize: 15,
        color: Colors.textColorBlack,
        fontWeight: '600'
    },
    duration: {
        fontSize: 12,
        width: '100%'
    },
    price: {
        fontSize: 12,
        width: '25%',
        fontWeight: '600',
        color: Colors.textColorBlack,
        fontSize: 15
    },
    seatsStyle: { position: 'absolute', top: -11, left: 13, backgroundColor: Colors.textColorWhite, borderWidth: .3, borderRadius: 3, padding: 3, fontSize: 9, color: Colors.mainTheme }
})

export default SearchResultCard;

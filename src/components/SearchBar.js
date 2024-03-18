import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Colors from '../colors';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const TextInputFlight = ({ text, arg, val }) => <TextInput
    style={{
        width: '48%',
        height: 50,
        color: Colors.textColorBlack,
        padding: 13,
        alignSelf: 'center',
        borderRadius: 10,
        backgroundColor: Colors.textBackgroundColor
    }}
    onChangeText={arg}
    value={val}
    placeholder={text}
/>
const OneWayOrRoundTrip = ({ text, active, onpress }) => <Text style={{
    width: '48%',
    borderRadius: 3,
    textAlign: 'center',
    backgroundColor: active ? 'transparent' : Colors.textColorWhite,
    color: Colors.textColorBlack,
    margin: 3
}}
    onPress={() => onpress()}>
    {text}
</Text>
const SearchBar = ({ route, flightData }) => {
    const [From, setFrom] = useState('')
    const [To, setTo] = useState('')
    const [TravellersCount, setTravellersCount] = useState(1)
    const [OneWayOrRoundTripState, setOneWayOrRoundTripState] = useState(true)
    const [isDatePickerVisibleTrip, setDatePickerVisibilityTrip] = useState(false);
    const [isDatePickerVisibleReturnTrip, setDatePickerVisibilityReturnTrip] = useState(false);
    const [tripDate, settripDate] = useState(null);
    const [returnTripDate, setreturnTripDate] = useState(null);


    const showDatePicker = () => {
        setDatePickerVisibilityTrip(true);
    };
    const showDatePickerReturnTrip = () => {
        setDatePickerVisibilityReturnTrip(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibilityTrip(false);
    };
    const hideDatePickerReturnTrip = () => {
        setDatePickerVisibilityReturnTrip(false);
    };

    const handleConfirmTrip = (date) => {
        settripDate(date)
        hideDatePicker();
    };
    const handleConfirmReturnTrip = (date) => {
        setreturnTripDate(date)
        hideDatePickerReturnTrip();
    };


    return (
        <View style={{
            alignItems: 'center'
        }}>
            <Text style={{ color: Colors.textColorWhite, fontSize: 18, fontWeight: 'bold', position: 'absolute', zIndex: 1 }} >
                Flight Booking Demo App
            </Text>
            <Image
                style={styles.tinyLogo}
                source={{
                    uri: 'https://media.istockphoto.com/id/155439315/photo/passenger-airplane-flying-above-clouds-during-sunset.jpg?s=612x612&w=0&k=20&c=LJWadbs3B-jSGJBVy9s0f8gZMHi2NvWFXa3VJ2lFcL0=',
                }}
            />


            <View style={styles.oneWay}>

                <OneWayOrRoundTrip text={'One Way'} active={OneWayOrRoundTripState == false} onpress={() => setOneWayOrRoundTripState(true)} />

                <OneWayOrRoundTrip text={'Round Trip'} active={OneWayOrRoundTripState == true} onpress={() => setOneWayOrRoundTripState(false)} />

            </View>
            <View style={styles.textinputStyle}>

                <TextInputFlight text={'From'} arg={setFrom} val={From} />
                <TextInputFlight text={'To'} arg={setTo} val={To} />

            </View>
            <DateTimePickerModal
                isVisible={isDatePickerVisibleTrip}
                mode="date"
                onConfirm={handleConfirmTrip}
                onCancel={hideDatePicker}
            // minimumDate={new Date()}

            />
            <DateTimePickerModal
                isVisible={isDatePickerVisibleReturnTrip}
                mode="date"
                onConfirm={handleConfirmReturnTrip}
                onCancel={hideDatePicker}
                minimumDate={tripDate}

            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '90%', margin: 10, }}>
                <Text onPress={showDatePicker}>{tripDate == null ? 'Select Date' : tripDate.toLocaleDateString("en-GB")}</Text>

                {OneWayOrRoundTripState ?
                    <Text style={{ color: Colors.blue, fontWeight: '800' }} onPress={() => setOneWayOrRoundTripState(false)}>Add trip +</Text> :
                    <Text onPress={showDatePickerReturnTrip}>{returnTripDate == null ? 'Select Return Date' : returnTripDate.toLocaleDateString("en-GB")}</Text>}
            </View>

            <Text style={{ fontSize: 16, fontWeight: '400', color: Colors.textColorBlack, }}>Select Travellers</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '90%', margin: 10, }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', color: Colors.textColorBlack, padding: 10 }}
                    onPress={() => setTravellersCount(val => val <= 1 ? val : val - 1)}
                > - </Text>
                {/* TravellersCount */}
                <Text style={{
                    width: '48%',
                    height: 50,
                    color: Colors.textColorBlack,
                    padding: 13,
                    alignSelf: 'center',
                    borderRadius: 10,
                    backgroundColor: Colors.textBackgroundColor,
                    textAlign: 'center'
                }}>{TravellersCount} Adult</Text>
                <Text style={{ fontSize: 30, fontWeight: 'bold', color: Colors.textColorBlack, padding: 10 }}
                    onPress={() => setTravellersCount(val => val >= 6 ? val : val + 1)}
                > + </Text>

            </View>




            <TouchableOpacity style={styles.button} onPress={() => route.navigation.navigate('SearchResult', { From, To, flightData, isRoundTrip: OneWayOrRoundTripState, travellers: TravellersCount, returnDate: returnTripDate, departureDate: tripDate })}>
                <Text style={{ color: Colors.textColorWhite, fontSize: 18, fontWeight: 'bold', }}>
                    Search
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    tinyLogo: {
        width: '100%',
        height: 150,
        alignSelf: 'center',
        position: 'absolute'


    },
    logo: {
        width: 66,
        height: 58,
    },
    textinputStyle: {
        flexDirection: 'row',
        marginTop: 10,
        height: 60,
        justifyContent: 'space-between',
        margin: 5,
        alignItems: 'center',
        width: '90%'
    },
    button: {
        height: 50,
        color: Colors.textColorBlack,
        borderWidth: 1,
        width: 100,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        // paddingHorizontal: 20
        backgroundColor: Colors.mainTheme

    },
    oneWay: {
        flexDirection: 'row', marginTop: 130,
        height: 30,
        justifyContent: 'space-evenly',
        margin: 10,
        alignItems: 'center',
        backgroundColor: Colors.mainTheme,
        borderRadius: 3

    }
})

export default SearchBar;

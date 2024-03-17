import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Colors from '../colors';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const TextInputFlight = ({ text }) => <TextInput
    style={{
        width: '48%',
        height: 50,
        color: Colors.textColorBlack,
        padding: 13,
        alignSelf: 'center',
        borderRadius: 10,
        backgroundColor: Colors.textBackgroundColor

    }}

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
const SearchBar = () => {
    const [OneWayOrRoundTripState, setOneWayOrRoundTripState] = useState(false)


    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
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

                <TextInputFlight text={'From'} />
                <TextInputFlight text={'To'} />

            </View>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '90%', margin: 10, }}>
                <Text onPress={showDatePicker}>Select Date</Text>

                {OneWayOrRoundTripState ?
                    <Text style={{ color: Colors.blue, fontWeight: '800' }} onPress={() => setOneWayOrRoundTripState(false)}>Add trip +</Text> :
                    <Text>Select Date</Text>}
            </View>



            <TouchableOpacity style={styles.button}>
                <Text style={{ color: Colors.textColorWhite, fontSize: 18, fontWeight: 'bold', }} >
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

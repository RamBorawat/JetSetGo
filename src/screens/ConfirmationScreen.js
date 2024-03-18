import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import Colors from '../standards/colors';
import standards from '../standards/standards';

const ConfirmationScreen = ({ route }) => {
    const [flightDetails, setFlightDetails] = useState(route.params.flightDetails)
    const [Email, setEmail] = useState(route.params.Email)
    const [Mobile, setMobile] = useState(route.params.Mobile)
    const [firstName, setfirstName] = useState(route.params.firstName)
    const [gender, setgender] = useState(route.params.gender)
    const [lastName, setlastName] = useState(route.params.lastName)
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: Colors.mainTheme, marginBottom: 80 }}>
                <View style={{ width: '100%', padding: 10, }} >
                    <Text style={{ color: Colors.textColorWhite, fontWeight: '600', textAlign: 'center', fontSize: 21, padding: 10, margin: 10 }}> Booking Details </Text>
                    <Text style={{ color: Colors.textColorWhite, fontWeight: '600', textAlign: 'center', fontSize: 15, padding: 5, margin: 5 }}> JetSetGo {'\n'} Trip to </Text>
                    <Text style={{ color: Colors.textColorWhite, fontWeight: '800', textAlign: 'center', fontSize: 21, padding: 5, margin: 5 }}> {flightDetails.destination} </Text>

                    <Text>{flightDetails.airline} | {flightDetails.flightNumber}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.travelDetails}>
                            {new Date(flightDetails.departureTime).getHours() == 0 ? '00' : new Date(flightDetails.departureTime).getHours()}:{new Date(flightDetails.departureTime).getMinutes() == 0 ? '00' : new Date(flightDetails.departureTime).getMinutes()}
                            {'\n'}
                            <Text style={{ fontSize: 15 }}>

                                {standards.weekday[new Date(flightDetails.departureTime).getDay()]},{new Date(flightDetails.departureTime).getDate()} {standards.month[new Date(flightDetails.departureTime).getMonth()]}
                            </Text>
                        </Text>
                        <Text>  {flightDetails.duration} </Text>
                        <Text style={styles.travelDetails}>
                            {new Date(flightDetails.arrivalTime).getHours() == 0 ? '00' : new Date(flightDetails.arrivalTime).getHours()}:{new Date(flightDetails.arrivalTime).getMinutes() == 0 ? '00' : new Date(flightDetails.arrivalTime).getMinutes()}
                            {'\n'}
                            <Text style={{ fontSize: 15 }}>

                                {standards.weekday[new Date(flightDetails.arrivalTime).getDay()]},{new Date(flightDetails.arrivalTime).getDate()} {standards.month[new Date(flightDetails.arrivalTime).getMonth()]}
                            </Text>
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.travelDetails}>
                            {flightDetails.origin}
                        </Text>
                        <Text style={styles.travelDetails}>
                            {flightDetails.destination}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.travelDetailsSmall}>
                            Gate no.
                        </Text>
                        <Text style={styles.travelDetailsSmall}>
                            {flightDetails.gate}
                        </Text>
                    </View>
                </View>

                <Text style={{ color: Colors.textColorBlack, fontWeight: '600', fontSize: 18, padding: 3, }}> Traveller Details</Text>
                <View style={{ width: '100%', backgroundColor: Colors.textColorWhite, borderWidth: 1, borderRadius: 10, padding: 10, marginBottom: 10, alignItems: 'flex-start' }} >
                    <Text style={{ color: Colors.textColorBlack, fontSize: 16, }}>firstname : {firstName}</Text>
                    <Text style={{ color: Colors.textColorBlack, fontSize: 16, }}>Lastname : {lastName}</Text>
                    <Text style={{ color: Colors.textColorBlack, fontSize: 16, }}>Gender : {gender}</Text>
                    <Text style={{ color: Colors.textColorBlack, fontSize: 16, }}>Email : {Email}</Text>
                    <Text style={{ color: Colors.textColorBlack, fontSize: 16, }}>Mobile Number : {Mobile}</Text>

                </View>

                <View style={{ width: '100%', backgroundColor: Colors.textColorWhite, borderWidth: 1, borderRadius: 10, padding: 10, marginBottom: 10 }} >
                    <Text style={{ color: Colors.textColorBlack, fontSize: 16, padding: 3, }}>By clicking on the confirm booking it should go to payment methods etc.</Text>
                </View>

            </View>
            <View style={{ position: 'absolute', bottom: 0, textAlign: 'center', width: '100%', borderWidth: 1, alignItems: 'center', backgroundColor: Colors.fareBackgroundColor, height: 80, justifyContent: 'space-between', flexDirection: 'row' }}>
                <Text style={{ fontSize: 21, fontWeight: 'bold', padding: 10, }}><Text>{'\u20B9'}</Text>{flightDetails.price}
                    {'\n'}
                    <Text style={{ fontSize: 11, fontWeight: '400' }}>FOR 1 ADULT</Text>
                </Text>
                <TouchableOpacity style={{ borderRadius: 25, backgroundColor: Colors.mainTheme, padding: 10, margin: 15 }}>
                    <Text style={{ fontSize: 18, color: Colors.textColorWhite }}
                        onPress={() => {
                            alert('Your booking has been confirmed, Thank you!')

                            // route.navigation.navigate('FlightDetails', { flightDetails: x })
                        }}>
                        CONFIRM BOOKING
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    travelDesinations: { fontSize: 16, color: Colors.textColorBlack, fontWeight: '600' },
    travelDetails: { fontSize: 21, color: Colors.textColorBlack, },
    travelDetailsSmall: { fontSize: 16, color: Colors.textColorBlack, }
})
export default ConfirmationScreen;

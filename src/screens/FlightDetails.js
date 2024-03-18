import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Colors from '../standards/colors';
import standards from '../standards/standards';

const FlightDetails = ({ route }) => {
    const [flightDetails, setFlightDetails] = useState(route.params.flightDetails)
    const [gender, setgender] = useState('')
    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [Email, setEmail] = useState('')
    const [Mobile, setMobile] = useState('')
    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1, backgroundColor: Colors.mainTheme, marginBottom: 80 }}>
                <View style={{ width: '100%', padding: 10, }} >
                    <Text style={{ color: Colors.textColorWhite, fontWeight: '600', textAlign: 'center', fontSize: 21, padding: 10, margin: 10 }}> Flight Details </Text>
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

                <View style={{ width: '100%', backgroundColor: Colors.textColorWhite, padding: 10, borderWidth: 1, borderRadius: 10, padding: 10, marginBottom: 10 }} >
                    <Text style={{ color: Colors.textColorBlack, fontWeight: '600', fontSize: 18, padding: 3, }}> Baggage Policy</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: Colors.textColorBlack, fontWeight: '600', fontSize: 16, padding: 3, }}>Cabin bag</Text>
                        <Text style={{ color: Colors.textColorBlack, fontSize: 16, padding: 3, }}>7Kgs(1 piece only)/Adult</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: Colors.textColorBlack, fontWeight: '600', fontSize: 16, padding: 3, }}>Check-in bag</Text>
                        <Text style={{ color: Colors.textColorBlack, fontSize: 16, padding: 3, }}>15Kgs(1 piece only)/Adult</Text>
                    </View>
                </View>


                <View style={{ width: '100%', backgroundColor: Colors.textColorWhite, borderWidth: 1, borderRadius: 10, padding: 10, marginBottom: 10 }} >
                    <Text style={{ color: Colors.textColorBlack, fontWeight: '600', fontSize: 18, padding: 3, }}> Cancellation Policy</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: Colors.textColorBlack, fontWeight: '600', fontSize: 16, padding: 3, }}>Cancellation on same day</Text>
                        <Text style={{ color: Colors.textColorBlack, fontSize: 16, padding: 3, }}>90% penalty</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: Colors.textColorBlack, fontWeight: '600', fontSize: 16, padding: 3, }}>Other Cancellation </Text>
                        <Text style={{ color: Colors.textColorBlack, fontSize: 16, padding: 3, }}>50% penalty</Text>
                    </View>
                </View>

                <View style={{ width: '100%', backgroundColor: Colors.textColorWhite, borderWidth: 1, borderRadius: 10, padding: 10, marginBottom: 10, alignItems: 'center' }} >
                    <Text style={{ color: Colors.textColorBlack, fontWeight: '600', fontSize: 18, padding: 3, }}> Traveller Details</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', margin: 10, width: '91%' }}>
                        <Text style={{ color: Colors.textColorBlack, fontSize: 16, position: 'absolute', }}>Gender</Text>
                        <Text onPress={() => setgender('Male')} style={{ color: Colors.textColorBlack, fontWeight: '600', fontSize: 16, padding: 13, borderWidth: 1, width: '40%', textAlign: 'center', marginTop: 30, backgroundColor: gender == 'Male' ? Colors.mainTheme : null }}>Male</Text>
                        <Text onPress={() => setgender('Female')} style={{ color: Colors.textColorBlack, fontWeight: '600', fontSize: 16, padding: 13, borderWidth: 1, width: '40%', textAlign: 'center', marginTop: 30, backgroundColor: gender == 'Female' ? Colors.mainTheme : null }}>Female</Text>
                    </View>
                    <TextInput
                        value={firstName}
                        onChangeText={setfirstName}
                        placeholder={'First & middle name'}
                        style={{ borderWidth: 1, borderRadius: 3, width: '80%', margin: 10 }}
                    />
                    <TextInput
                        value={lastName}
                        onChangeText={setlastName}
                        placeholder={'Last name'}
                        style={{ borderWidth: 1, borderRadius: 3, width: '80%', margin: 10 }}
                    />
                    <TextInput
                        value={Email}
                        onChangeText={setEmail}
                        placeholder={'Email'}
                        style={{ borderWidth: 1, borderRadius: 3, width: '80%', margin: 10 }}
                    />
                    <TextInput
                        value={Mobile}
                        onChangeText={setMobile}
                        placeholder={'Mobile no.'}
                        style={{ borderWidth: 1, borderRadius: 3, width: '80%', margin: 10 }}
                    />

                </View>

                <View style={{ width: '100%', backgroundColor: Colors.textColorWhite, borderWidth: 1, borderRadius: 10, padding: 10, marginBottom: 10 }} >
                    <Text style={{ color: Colors.textColorBlack, fontSize: 16, padding: 3, }}>By clicking on the contiue button below to proceed with the booking, I confirm that I have read and I accept the fare ruls, the Privacy Policy, the User Agreement and Terms of service of JetSetGo</Text>
                </View>

            </ScrollView>
            <View style={{ position: 'absolute', bottom: 0, textAlign: 'center', width: '100%', borderWidth: 1, alignItems: 'center', backgroundColor: Colors.fareBackgroundColor, height: 80, justifyContent: 'space-between', flexDirection: 'row' }}>
                <Text style={{ fontSize: 21, fontWeight: 'bold', padding: 10, }}><Text>{'\u20B9'}</Text>{flightDetails.price}
                    {'\n'}
                    <Text style={{ fontSize: 11, fontWeight: '400' }}>FOR 1 ADULT</Text>
                </Text>
                <TouchableOpacity style={{ borderRadius: 25, backgroundColor: Colors.mainTheme, padding: 10, margin: 15 }}>
                    <Text style={{ fontSize: 18, color: Colors.textColorWhite }}
                        onPress={() => {
                            console.log(firstName,
                                lastName,
                                Email,
                                Mobile, gender, route.params.route)
                            route.params.route.navigation.navigate('ConfirmationScreen', { firstName, lastName, Email, Mobile, gender, flightDetails })

                            // route.navigation.navigate('FlightDetails', { flightDetails: x })
                        }}>
                        CONTINUE
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

export default FlightDetails;

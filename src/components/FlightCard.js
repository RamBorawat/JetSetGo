import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Colors from '../colors';

const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const month = ["Jan", "Feb", "Mar", "Apr", "MayJun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const FlightCard = ({ route, flightData }) => {
    const [loading, setLoading] = useState(false)
    const [Data, setData] = useState(flightData)

    // {"id":1,"gate":"A2","price":5000,"origin":"Delhi","airline":"IndiGo","aircraft":"Airbus A320","duration":"3 hours","arrivalTime":"2024-03-15T11:00:00","destination":"Mumbai","flightNumber":"6E101","departureTime":"2024-03-15T08:00:00","seatsAvailable":120},
    console.log(new Date("2024-03-15T20:30:00").getMinutes().length, 'this i slemngth')
    return (
        <View>
            {loading && <Text>Loading</Text>}
            {Data && Data.map(x => {
                return <TouchableOpacity style={{ width: '95%', borderWidth: 1, margin: 10, borderRadius: 10, padding: 10 }} key={Math.random()} onPress={() => {

                }}>
                    <Text>
                        Onward - {weekday[new Date(x.departureTime).getDay()]},{new Date(x.departureTime).getDate()} {month[new Date(x.departureTime).getMonth()]}

                    </Text>
                    <Text style={{ position: 'absolute', right: 10, top: 5, color: Colors.mainTheme, fontWeight: '600' }}> Details </Text>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={styles.travelDesinations}>
                            {x.origin}
                        </Text>
                        <Text> &#10140; </Text>
                        <Text style={styles.travelDesinations}>
                            {x.destination}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={styles.travelDetails}>
                            {new Date(x.departureTime).getHours() == 0 ? '00' : new Date(x.departureTime).getHours()}:{new Date(x.arrivalTime).getMinutes() == 0 ? '00' : new Date(x.arrivalTime).getMinutes()}
                        </Text>
                        <Text> --- </Text>
                        <Text style={styles.travelDetails}>
                            {new Date(x.arrivalTime).getHours() == 0 ? '00' : new Date(x.arrivalTime).getHours()}:{new Date(x.arrivalTime).getMinutes() == 0 ? '00' : new Date(x.arrivalTime).getMinutes()}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={styles.travelDetails}>
                            {x.airline} {x.flightNumber}
                        </Text>

                    </View>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={styles.travelDetails}>
                            {x.duration}
                        </Text>

                    </View>

                </TouchableOpacity>
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    travelDesinations: { fontSize: 16, color: Colors.textColorBlack, fontWeight: '600' },
    travelDetails: { fontSize: 14, color: Colors.textColorBlack, }
})

export default FlightCard;

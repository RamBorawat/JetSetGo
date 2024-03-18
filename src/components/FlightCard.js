import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const FlightCard = () => {
    const [loading, setLoading] = useState(false)
    const [Data, setData] = useState(null)

    useEffect(() => {
        fetch('https://api.npoint.io/378e02e8e732bb1ac55b')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    // {"id":1,"gate":"A2","price":5000,"origin":"Delhi","airline":"IndiGo","aircraft":"Airbus A320","duration":"3 hours","arrivalTime":"2024-03-15T11:00:00","destination":"Mumbai","flightNumber":"6E101","departureTime":"2024-03-15T08:00:00","seatsAvailable":120},

    return (
        <View>
            {loading && <Text>Loading</Text>}
            <View style={{ width: '100%', height: 150, }}>

                {/* 
                image
                departurre time
                arrival time
                time
                stops
                price

                */}
                <Text>Hi therer</Text>

            </View>
            {Data && Data.map(x => {
                return <View key={Math.random()}><Text>
                    {x.id}
                </Text>
                </View>
            })}
        </View>
    );
}

const styles = StyleSheet.create({})

export default FlightCard;

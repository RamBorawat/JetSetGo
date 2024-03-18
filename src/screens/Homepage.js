import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import SearchBar from '../components/SearchBar';
import FlightCard from '../components/FlightCard';

const Homepage = (route) => {
    const [loading, setLoading] = useState(false)
    const [Data, setData] = useState(null)

    useEffect(() => {
        setLoading(true)
        fetch('https://api.npoint.io/378e02e8e732bb1ac55b')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);
    return (
        <ScrollView style={{ height: '100%' }}>
            <SearchBar route={route} flightData={Data} />
            {Data && <FlightCard route={route} flightData={Data} />}
            {loading && <Text style={{ textAlign: 'center' }}>Fetching flights, Please wait</Text>}
        </ScrollView >
    );
}

const styles = StyleSheet.create({})

export default Homepage;

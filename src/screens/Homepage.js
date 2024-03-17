import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import SearchBar from '../components/SearchBar';
import FlightCard from '../components/FlightCard';

const Homepage = () => {
    return (
        <View style={{ height: '100%' }}>
            <SearchBar />
            <FlightCard />
        </View>
    );
}

const styles = StyleSheet.create({})

export default Homepage;

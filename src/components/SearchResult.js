import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity, Modal, Pressable, Alert } from 'react-native';
import Colors from '../colors';
import SearchResultCard from './SearchResultCard';


const SearchResult = ({ route }) => {
    const [modalVisibleSort, setModalVisibleSort] = useState(false);
    const [modalVisibleFilter, setModalVisibleFilter] = useState(false);
    const [flights, setFlights] = useState(route.params.flightData)
    const [From, setFrom] = useState(route.params.From)
    const [To, setTo] = useState(route.params.To)
    const [isRoundTrip, setisRoundTrip] = useState(route.params.isRoundTrip)
    const [travellers, settravellers] = useState(route.params.travellers)
    const [returnDate, setreturnDate] = useState(route.params.returnDate)
    const [departureDate, setdepartureDate] = useState(route.params.departureDate)
    // From, To, flightData,isRoundTrip:OneWayOrRoundTripState,travellers:TravellersCount,returnDate :returnTripDate,departureDate:tripDate

    // {"id":1,"gate":"A2","price":5000,"origin":"Delhi","airline":"IndiGo","aircraft":"Airbus A320","duration":"3 hours","arrivalTime":"2024-03-15T11:00:00","destination":"Mumbai","flightNumber":"6E101","departureTime":"2024-03-15T08:00:00","seatsAvailable":120}


    console.log(route, 'route from results', isRoundTrip,
        travellers,
        returnDate,
        departureDate)
    const filterByAirline = (arr, track = new Set()) => arr.filter(({ airline }) => (track.has(airline) ? false : track.add(airline)));
    const filterByAircraft = (arr, track = new Set()) => arr.filter(({ aircraft }) => (track.has(aircraft) ? false : track.add(aircraft)));

    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisibleFilter}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisibleFilter(!modalVisibleFilter);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View>

                            <Text onPress={() => {
                                setModalVisibleFilter(!modalVisibleFilter)

                            }} style={styles.modalText}>Filter by airline
                            </Text>
                            {filterByAirline(flights).map(x => {
                                return <Text onPress={() => {
                                    setFlights(flights.filter(item => item.airline.indexOf(x.airline) !== -1))
                                    console.log(x.airline)
                                    setModalVisibleFilter(!modalVisibleFilter);
                                }}>{x.airline}</Text>
                            })}
                        </View>
                        <View>
                            <Text onPress={() => {
                                setFlights(flights.sort((a, b) => a.airline.localeCompare(b.airline)))
                                setModalVisibleFilter(!modalVisibleFilter)
                            }} style={styles.modalText}>Filter by aircraft
                            </Text>
                            {filterByAircraft(flights).map(x => {
                                return <Text onPress={() => {
                                    setFlights(flights.filter(item => item.aircraft.indexOf(x.aircraft) !== -1))
                                    console.log(x.aircraft)
                                    setModalVisibleFilter(!modalVisibleFilter);
                                }}>{x.aircraft}</Text>
                            })}
                        </View>

                        <Text onPress={() => {
                            setFlights(route.params.flightData)
                            setModalVisibleFilter(!modalVisibleFilter)
                        }} style={styles.modalText}>Remove filters</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisibleFilter(!modalVisibleFilter)}>
                            <Text style={styles.textStyle}>Close</Text>
                        </Pressable>

                    </View>
                </View>
            </Modal >
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisibleSort}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisibleSort(!modalVisibleSort);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text onPress={() => {
                            setFlights(flights.sort((a, b) => (a.price > b.price) ? 1 : -1))
                            setModalVisibleSort(!modalVisibleSort)
                        }} style={styles.modalText}>Sort by price</Text>
                        <Text onPress={() => {
                            setFlights(flights.sort((a, b) => a.airline.localeCompare(b.airline)))
                            setModalVisibleSort(!modalVisibleSort)
                        }} style={styles.modalText}>sort by airline</Text>
                        <Text onPress={() => {
                            setFlights(flights.sort((a, b) => a.flightNumber.localeCompare(b.flightNumber)))
                            setModalVisibleSort(!modalVisibleSort)
                        }} style={styles.modalText}>Sort by Flight Number</Text>

                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisibleSort(!modalVisibleSort)}>
                            <Text style={styles.textStyle}>Close</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal >

            <Text style={styles.tripDetails}>{From} <Text>&#10140;</Text> {To}</Text>
            {/* <Text>list of search result will appear</Text>
            <Text>{From}</Text>
            <Text>{To}</Text> */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '30%' }}>

                <TouchableOpacity onPress={() => setModalVisibleFilter(!modalVisibleFilter)}>
                    <Text>Filters</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModalVisibleSort(!modalVisibleSort)}>
                    <Text>Sort</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                style={{ height: "80%" }}
                data={flights}
                renderItem={({ item }) => <SearchResultCard flight={item} />}
                keyExtractor={item => item.id}
            />


        </View >
    );
}

const styles = StyleSheet.create({
    tripDetails: { color: Colors.textColorBlack },
    item: {
        backgroundColor: Colors.textColorWhite,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    title: {
        fontSize: 12,
    },

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonClose: {
        backgroundColor: Colors.mainTheme,
        paddingHorizontal: 33
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        margin: 15,
        textAlign: 'center',
        borderBottomWidth: 1,
        height: 30,
        color: Colors.textColorBlack,

    },
})

export default SearchResult;

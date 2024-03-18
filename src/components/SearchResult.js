import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity, Modal, Pressable, Alert } from 'react-native';
import Colors from '../colors';
import SearchResultCard from './SearchResultCard';

const NoDataAvailable = () => <Text style={{ width: '90%', height: '100%', textAlign: 'center', alignSelf: 'center', fontSize: 21, color: Colors.textColorBlack }}>There are no Flights available on this day either you can try changing the date or to see all available flights you can remove filter</Text>
const SearchResult = ({ route }) => {
    let filter = {
        origin: route.params.From,
        destination: route.params.To
    };
    const [modalVisibleSort, setModalVisibleSort] = useState(false);
    const [modalVisibleFilter, setModalVisibleFilter] = useState(false);
    const [flights, setFlights] = useState(route.params.flightData.filter(obj => obj.origin == filter.origin && obj.destination == filter.destination
        && (new Date(obj.departureTime).getDate() === new Date(route.params.departureDate).getDate()
            && new Date(obj.departureTime).getMonth() === new Date(route.params.departureDate).getMonth()
            && new Date(obj.departureTime).getFullYear() === new Date(route.params.departureDate).getFullYear())
    )
    )

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
                onRequestClose={() => setModalVisibleFilter(!modalVisibleFilter)}>
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
                onRequestClose={() => setModalVisibleSort(!modalVisibleSort)}>
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
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '50%', height: 30, alignItems: 'center', }}>

                <TouchableOpacity style={styles.filter} onPress={() => setModalVisibleFilter(!modalVisibleFilter)}>
                    <Text >Filters</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.filter} onPress={() => setModalVisibleSort(!modalVisibleSort)}>
                    <Text>Sort</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                style={{ height: "80%" }}
                data={flights}
                renderItem={({ item }) => <SearchResultCard flight={item} />}
                keyExtractor={item => item.id}
                ListEmptyComponent={NoDataAvailable}

            />


        </View >
    );
}

const styles = StyleSheet.create({
    tripDetails: { color: Colors.textColorBlack, margin: 10, },
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
    filter: { borderWidth: .1, borderRadius: 3, width: 90, alignItems: 'center', color: Colors.textColorWhite }
})

export default SearchResult;

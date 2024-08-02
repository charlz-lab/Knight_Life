// EventPage.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const EventPage = ({ route }) => {
    const { imageUrl, eventName, hostName, eventDateTime } = route.params;

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {imageUrl ? (
                <Image source={{ uri: imageUrl }} style={styles.image} />
            ) : (
                <View style={styles.placeholder}>
                    <Text style={styles.placeholderText}>No Image</Text>
                </View>
            )}
            <Text style={styles.eventName}>{eventName}</Text>
            <Text style={styles.eventDateTime}>{eventDateTime}</Text>
            <Text style={styles.hostName}>Hosted by: {hostName}</Text>
            {/* Add more event details as needed */}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 20,
    },
    placeholder: {
        width: '100%',
        height: 200,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 20,
    },
    placeholderText: {
        color: '#555',
        fontSize: 16,
    },
    eventName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    eventDateTime: {
        fontSize: 18,
        color: '#555',
        marginBottom: 10,
    },
    hostName: {
        fontSize: 16,
        color: '#555',
    },
});

export default EventPage;

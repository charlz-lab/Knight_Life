// EventCard.tsx
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface EventCardProps {
    imageUrl: string;
    eventName: string;
    hostName: string;
}

const EventCard: React.FC<EventCardProps> = ({ imageUrl, eventName, hostName }) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.eventName}>{eventName}</Text>
                <Text style={styles.hostName}>Hosted by: {hostName}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 3,
        backgroundColor: '#fff',
        marginBottom: 20,
    },
    image: {
        width: '100%',
        height: 150,
    },
    textContainer: {
        padding: 15,
    },
    eventName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    hostName: {
        fontSize: 14,
        color: '#555',
    },
});

export default EventCard;

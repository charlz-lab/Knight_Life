// EventCard.tsx
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface EventCardProps {
    imageUrl: string;
    eventName: string;
    hostName: string;
    eventDateTime: string;
}

const EventCard: React.FC<EventCardProps> = ({ imageUrl, eventName, hostName, eventDateTime }) => {
    return (
        <View style={styles.card}>
            <View style={styles.imageContainer}>
                <View style={styles.dateTimeContainer}>
                    <Text style={styles.dateTimeText}>{eventDateTime}</Text>
                </View>
                {imageUrl ? (
                    <Image source={{ uri: imageUrl }} style={styles.image} />
                ) : (
                    <View style={styles.placeholder}>
                        <Text style={styles.placeholderText}>No Image</Text>
                    </View>
                )}
            </View>
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
        padding: 10,
        height: 180,
        width: 350
    },
    imageContainer: {
        flex: 1,
        padding: 10, 
    },
    image: {
        width: '100%',
        height: 100,
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
    placeholder: {
        width: '100%',
        height: '100%',
        
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    placeholderText: {
        color: '#555',
        fontSize: 16,
    },
    dateTimeContainer: {
        position: 'absolute',
        top: 10,
        left: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 5,
    },
    dateTimeText: {
        color: '#fff',
        fontSize: 12,
    },
});

export default EventCard;

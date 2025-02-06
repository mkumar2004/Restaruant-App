import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import client, { urlFor } from '../Services/Sanity';

const OrderScreen = () => {
    const [listed, setListed] = useState([]);

    useEffect(() => {
        const FetchQuery = async () => {
            try {
                const query = `*[_type == "dish" ]`;
                const data = await client.fetch(query);
                setListed(data);
            } catch (error) {
                console.error(error);
            }
        };
        FetchQuery();
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {listed.reduce((rows, item, index) => {
                if (index % 2 === 0) rows.push([item]); // Start a new row
                else rows[rows.length - 1].push(item); // Add to the last row
                return rows;
            }, []).map((row, rowIndex) => (
                <View key={rowIndex} style={styles.row}>
                    {row.map((dish) => (
                        
                        <View key={dish._id} style={styles.card}>
                            <Image source={{ uri: urlFor(dish.image).url() }} style={styles.image} />
                            <Text style={styles.name}>{dish.name}</Text>
                            <Text style={styles.price}>₹{dish.price}</Text>
                            <Text style={styles.description}>{dish.short_description}</Text>
                        </View>
                    ))}
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    card: {
        width: '48%', 
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    image: {
        width: '100%',
        height: 100,
        borderRadius: 8,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 5,
        color:'#13274F'
    },
    price: {
        fontSize: 14,
        color: 'green',
    },
    description: {
        fontSize: 12,
        color: '#555',
        textAlign: 'center',
          color:'#C6011F'
    },
});

export default OrderScreen;

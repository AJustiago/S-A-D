import React, { useEffect, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Card from '../components/ForumCard';
import { fetchForumDetail, ForumDetail } from '../services/ForumServices';

const DetailScreen: React.FC = ({ navigation }) => {
    const [data, setData] = useState<ForumDetail | null>(null);
    const [comment, setComment] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetchForumDetail();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handlePostComment = () => {
        // Add your logic to post the comment
        console.log('Posting comment:', comment);
        setComment('');
    };

    return (
        <View style={styles.container}>
            <Button onPress={() => navigation.navigate('Panic')} title="(TEMP) Test Panic Screen" />
            {data && (
                <>
                    <View style={styles.card}>
                        <View style={styles.headerContainer}>
                            <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Forum')}>
                                <Text style={styles.iconText}>X</Text>
                            </TouchableOpacity>
                            <Text style={styles.headerText}>Replies</Text>
                        </View>
                        <Text style={styles.cardUsername}>{data.username}</Text>
                        <Text style={styles.cardTitle}>{data.title}</Text>
                        <Text style={styles.cardDescription}>{data.description}</Text>
                        <View style={styles.bottomLeftContainer}>
                            <TouchableOpacity>
                                <FontAwesome5Icon name="comment" size={16} color="#666" />
                            </TouchableOpacity>
                            <Text style={styles.countText}>{data.count}</Text>
                        </View>
                        <View style={styles.rightSideContainer}>
                            <View style={styles.iconContainer1}>
                                <FontAwesome5Icon name="angle-up" size={16} color="#666" />
                                <Text style={styles.countText}>{data.upCount}</Text>
                            </View>
                            <View style={styles.iconContainer2}>
                                <FontAwesome5Icon name="angle-down" size={16} color="#666" />
                                <Text style={styles.countText}>{data.downCount}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.content}>
                        <FlatList
                            data={data.reply}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => (
                                <Card 
                                    username={item.username} 
                                    title={item.title} 
                                    description={item.description} 
                                    count={item.count} 
                                    upCount={item.upCount} 
                                    downCount={item.downCount} 
                                />
                            )}
                        />
                    </View>
                </>
            )}
            <View style={styles.footer}>
                <TextInput
                    style={styles.input}
                    placeholder="Add a comment"
                    value={comment}
                    onChangeText={setComment}
                />
                <TouchableOpacity style={styles.postButton} onPress={handlePostComment}>
                    <Text style={styles.postButtonText}>Post</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    card: {
        backgroundColor: '#f8f8f8',
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        position: 'relative',
    },
    cardUsername: {
        fontSize: 12,
        color: '#000',
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 5,
    },
    cardDescription: {
        fontSize: 14,
        color: '#666',
        marginBottom: 10,
    },
    bottomLeftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        marginBottom: 10,
        width: 40,
    },
    countText: {
        fontSize: 14,
        color: '#666',
        marginLeft: 5,
    },
    rightSideContainer: {
        position: 'absolute',
        flexDirection: 'row',
        bottom: 10,
        right: 10,
        alignItems: 'center',
    },
    iconContainer1: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 5,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        marginBottom: 20,
    },
    iconContainer2: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 5,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        marginBottom: 20,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        paddingRight: 10,
    },
    iconButton: {
        padding: 10,
    },
    iconText: {
        fontSize: 24,
        color: '#000',
    },
    content: {
        flex: 1,
        padding: 10,
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
        padding: 10,
        marginBottom: 5,
        borderTopWidth: 1,
        borderColor: '#ddd',
    },
    input: {
        flex: 1,
        padding: 5,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        marginRight: 10,
        backgroundColor: '#fff'
    },
    postButton: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#7286D3',
        borderRadius: 5,
    },
    postButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default DetailScreen;

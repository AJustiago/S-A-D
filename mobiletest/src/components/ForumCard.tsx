import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

interface CardProps {
  username: string;
  title: string;
  description: string;
  count: number;
  upCount: number;
  downCount: number;
}

const Card: React.FC<CardProps> = ({ username, title, description, count, upCount, downCount }) => (
  <View style={styles.card}>
    <Text style={styles.cardUsername}>{username}</Text>
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardDescription}>{description}</Text>
    <View style={styles.bottomLeftContainer}>
      <FontAwesome5Icon name="comment" size={16} color="#666" />
      <Text style={styles.countText}>{count}</Text>
    </View>
    <View style={styles.rightSideContainer}>
      <View style={styles.iconContainer1}>
        <FontAwesome5Icon name="angle-up" size={16} color="#666" />
        <Text style={styles.countText}>{upCount}</Text>
      </View>
      <View style={styles.iconContainer2}>
        <FontAwesome5Icon name="angle-down" size={16} color="#666" />
        <Text style={styles.countText}>{downCount}</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
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
    marginTop: 20,
    width: 40
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
    marginBottom: 5,
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
    marginBottom: 5,
  },
});

export default Card;

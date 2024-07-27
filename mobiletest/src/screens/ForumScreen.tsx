import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Card from '../components/Forum/ForumCard';
import { fetchForumData, ForumPost } from '../services/ForumServices';

const ForumScreen: React.FC = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');
  const [data, setData] = useState<ForumPost[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchForumData();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (searchText === '') {
      setIsFocused(false);
    }
  };

  const handleClear = () => {
    setSearchText('');
    setIsFocused(false);
  };

  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Forum Discussion</Text>
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            placeholderTextColor="black"
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={searchText}
            onChangeText={setSearchText}
          />
          {isFocused || searchText.length > 0 ? (
            <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
              <FontAwesome5Icon name="times" size={20} color="black" />
            </TouchableOpacity>
          ) : null}
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>New</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Card username={item.username} title={item.title} description={item.description} count={item.count} upCount={item.upCount} downCount={item.downCount}/>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerText: {
    marginTop: 10,
    color: '#000',
    alignItems: 'center',
    padding: 5,
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    marginLeft: 10,
    color: "#000",
  },
  clearButton: {
    padding: 10,
  },
  button: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
  },
  content: {
    flex: 1,
    padding: 10,
  },
});

export default ForumScreen;

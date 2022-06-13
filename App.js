import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import CategoryListItem from './components/CategoryListItem.js';

export default function App() {

  const Categories = [
    {id:1, name: 'Habita'},
    {id:2, name: 'Việt Văn'},
    {id:3, name: 'Vũ fb'},
    {id:4, name: 'Vũ fb'},
    {id:5, name: 'Vũ fb'},
    {id:6, name: 'Vũ fb'},
    {id:7, name: 'Vũ fb'},
  ]

  return (
    <View style={styles.container}>
        <ScrollView>
            {Categories.map(Categories => (
                <CategoryListItem key={Categories.id} category={Categories}/>
            ))} 
        </ScrollView>
        <StatusBar style="auto" />
    </View>
    // <FlatList 
    //     data={categories}
    //     renderItem={({item}) => <CategoryListItem category={item}/>}
    //     keyExtractor={item => item.id}
    //     contentContainerStyle={{paddingLeft:16, paddingRight:16}}
    // />
  );
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: '#000066',
        justifyContent: 'center',
        paddingLeft: 16,
        paddingRight: 16,
  },
});

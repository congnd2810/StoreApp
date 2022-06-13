import React from 'react';
import {
    Image,
    Text,
    View,
    StyleSheet
} from 'react-native';
import homeImage from '../assets/image/home.png'

export default function CategoryListItem(props) {
    const { category } = props
    return <View style={styles.container}>
        <Text style={styles.title}>{category.name}</Text>
        <Image style={styles.categoryImage} source={homeImage}></Image>
    </View>
}  

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 16,
        borderRadius: 8,
        backgroundColor: '#42ecf5',
        shadowColor: '#52006A',
        elevation: 10,
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: {width: 0, height: 0},
        marginBottom: 30,
        marginTop: 50,
    },
    categoryImage: {
        width: 64,
        height: 64
    },
    title: {
        textTransform: 'uppercase',
        marginBottom: 8,
        fontWeight: '700'
    },
});
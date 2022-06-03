import React from "react";
import { View, StyleSheet, Text, FlatList, TextInput, ScrollView, Image, KeyboardAvoidingView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { Rating } from 'react-native-ratings'

class shopper extends React.Component {
    cartItems =[
        {item: "Black wool/Black leather", ratings: "", price: "$219", image: "https://o.remove.bg/downloads/0313a17a-ddec-4465-9a76-45cbb35dd509/sKLHbgPeschHmNuaBk7PmJ6CCMHgQA35aq97I0Oe-removebg-preview.png"},
        {item: "Black wool/White leather", ratings: "", price: "$229", image: "https://o.remove.bg/downloads/11246064-aed4-4cbd-b4ce-b3f45152c84f/kNvxn6PrPwDsoTCo3akGyAgR1fWsa4eBMo7gbxBa-removebg-preview.png"},
        {item: "Black wool/Grey leather", ratings: "", price: "$209", image: "https://o.remove.bg/downloads/ce1d4490-5135-4443-9b48-5c2208a71570/EHdo3eM2GMILiCNAbhzMpQrySr7iYFwideYPo8Gh-removebg-preview.png"},
        {item: "Red all wool", ratings: "", price: "$189", image: "https://o.remove.bg/downloads/5bb732f5-857f-4a9a-a74a-132c6c650c3b/vYkJJaNh8F2dfOsdbaSQ3kYua4YCeHV8YNwtled8-removebg-preview.png"},
        {item: "Black grey all wool", ratings: "", price: "$216", image: "https://o.remove.bg/downloads/64150529-6f1b-4825-8681-f578df8bd37b/ApEI5Avsx7hesqS0yYsvZnUQUTiH2RZOJozOPooY-removebg-preview-removebg-preview.png"},
        {item: "Satin solid black", ratings: "", price: "$129", image: "https://o.remove.bg/downloads/f0e4d0e9-e195-44fb-9489-6b460405253d/UixRaGMp1Ua7KYpumjGT2YHnMSXoAbtM8TXVE5HO-removebg-preview.png"},
        {item: "White rainbow satin", ratings: "", price: "$137", image: "https://o.remove.bg/downloads/fa4bd1bc-f524-44d5-8789-46471db3fe40/UEaGNNKVlj7Qml3D4c7rFWGNJ3t7hl1Ibs3bRuHD-removebg-preview.png"},
        {item: "Grey wool/Black leather", ratings: "", price: "$209", image: "https://o.remove.bg/downloads/b8ad1bd4-dcd4-42d3-aae2-73bc9abd7fa6/oJcs6zZVLFFWa52CJi2jZyr7fPbZNriyR6zGbeAZ-removebg-preview.png"},
        {item: "Black wool/Black leather hood", ratings: "", price: "$239", image: "https://o.remove.bg/downloads/f89031b7-9dd6-4a36-8c53-84f0c6f93a43/qeghAW8tHqblXnmuoZgIIqIMJW1gPEYBueJM66VE-removebg-preview.png"},
        {item: "Black wool/Gold vinyl", ratings: "", price: "$250", image: "https://o.remove.bg/downloads/c27fa1f3-f848-48a5-a430-c705e88e45a1/suhPkK0t4QItT9EvxOQczFvGNmN754suNgvPt78W-removebg-preview.png"},
        {item: "Kids navy/White", ratings: "", price: "$98", image: "https://o.remove.bg/downloads/c02594e0-0073-41b9-b760-974b0d0c41a2/A0s9wFScFDHeeCN2EU67CgtCeBsNSbDQ7EA7LXCr-removebg-preview.png"},
        {item: "Kids royal/White", ratings: "", price: "$102", image: "https://o.remove.bg/downloads/aa458a8b-7012-48b4-a279-d439553961d0/kpyob1t3xKGfPnIFYMgKrPAXSXWBEJWkF5RZdiKj-removebg-preview.png"},
        {item: "Kids solid black", ratings: "", price: "$97", image: "https://o.remove.bg/downloads/ed883832-41cf-433c-a051-4b46ceb62a59/47mlQN5O0MoWdEbgUbU1AgSF9n0jHungDF5JXLrf-removebg-preview.png"},
        {item: "Kids red/White", ratings: "", price: "$97", image: "https://o.remove.bg/downloads/92ddaf6c-f1ef-4ca9-85bd-34bc79691b90/pP5dN2nUYOWj53N3EeVky4rY2fMjpl6GIJEetuUd-removebg-preview.png"},
        {item: "Black wool/Natural leather hood", ratings: "", price: "$236", image: "https://o.remove.bg/downloads/10d22cd8-2bff-405a-8fc9-6179b306096d/RUFKhXn75Y5TSS5IUbDykvF2giLgBGaeOoZGx6KP-removebg-preview.png"}
    ];
    render() {
        return(<SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior="height">
                <View style={styles.topframe}>
                    <Ionicons style={styles.icon} name="arrow-back" size={30} color="black" />
                    <AntDesign style={styles.icon} name="shoppingcart" size={30} color="black" />
                </View>
                <View style={styles.introfilter}>
                    <Text style={styles.introtext}>Jacket</Text>
                    <TextInput placeholder="Search Jacket" style={styles.searchinput} />
                </View>
                    <FlatList data={this.cartItems} keyExtractor={(item, index) => {return index}} renderItem={({item: {item, ratings, price, image}}) => (
                        <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.windowmain}>
                            <View style={styles.details}>
                                <View style={styles.square}></View>
                                <Image style={styles.image} source={{uri: image}} />
                                <View style={styles.textdetails}>
                                    <Text style={styles.itemtext}>{item}</Text>
                                    <Rating ratingBackgroundColor="rgba(155, 180, 207,0.4)" ratingCount={5} imageSize={20} />
                                    <Text style={styles.itemcost}>{price}</Text>
                                </View>
                            </View>
                        </View>
                        </ScrollView>
                    )} />
            </KeyboardAvoidingView>
        </SafeAreaView>)
    }
}
export default shopper
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    topframe: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    icon: {
        borderWidth: 1,
        backgroundColor: 'rgba(155, 180, 207,0.4)',
        borderColor: 'rgba(155, 180, 207,0.4)',
        borderRadius: 18,
        shadowColor: 'rgb(27, 51, 62)',
        shadowOpacity: 0.6,
        shadowOffset: {width: -5, height: 8},
        shadowRadius: 4,
        elevation: 20,
        marginVertical: 10
    },
    searchinput: {
        backgroundColor: 'rgb(255, 255, 255)',
        borderRadius: 15,
        width: 325,
        height: 50,
        shadowColor: 'rgb(27, 51, 62)',
        shadowOpacity: 0.6,
        shadowOffset: {width: -5, height: 8},
        shadowRadius: 4,
        elevation: 20,
        marginVertical: 10,
        fontSize: 20,
        paddingHorizontal: 10
    },
    introtext: {
        fontWeight: '700',
        fontSize: 40,
        marginVertical: 10
    },
    image: {
        height: 150,
        width: 150
    },
    details: {
        flex:   0.3,
        flexDirection: 'row'
    },
    textdetails: {
        justifyContent: 'center',
        flexDirection: 'column'
    },
    itemcost: {
        color: 'rgb(122, 129, 239)',
        fontSize: 20,
        fontWeight: '600'
    },
    itemtext: {
        fontSize: 17,
        fontWeight: '600'
    },
    square: {
        width: 110,
        height: 110,
        backgroundColor: 'rgb(255, 255, 255)',
        position: 'absolute',
        left: 7,
        bottom: 2,
    },
    windowmain: {
        position: 'relative'
    }
});
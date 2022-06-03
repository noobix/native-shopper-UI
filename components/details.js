import React from "react";
import { View, StyleSheet, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Rating } from 'react-native-ratings'
import { AntDesign, Ionicons } from '@expo/vector-icons';

class details extends React.Component {
    cartItems = [{item: "Black wool/Gold vinyl", ratings: "", price: "$250", image: "https://o.remove.bg/downloads/c27fa1f3-f848-48a5-a430-c705e88e45a1/suhPkK0t4QItT9EvxOQczFvGNmN754suNgvPt78W-removebg-preview.png"}]
    render() {
        return(<React.Fragment>
             <SafeAreaView style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.topframe}>
                        <Ionicons style={styles.icon} name="arrow-back" size={30} color="black" />
                        <AntDesign style={styles.icon} name="shoppingcart" size={30} color="black" />
                    </View>
                    <View style={styles.iteminfo}>
                        {this.cartItems.map((item, index) => { return(
                            <View style={styles.imagebkg} key={index}>
                                <Image style={styles.image} source={{uri: item.image}} />
                                <View style={styles.square}></View>
                                <View>
                                    <Text style={styles.productname}>{item.item}</Text>
                                    <View style={styles.productreview}>
                                        <Text style={styles.reviewtext}>Review:</Text>
                                        <Rating style={styles.ratings} ratingBackgroundColor="rgba(155, 180, 207,0.4)" ratingCount={5} imageSize={20} />
                                    </View>
                                    <Text style={styles.reviewinfo}>It is long establish fact that a reader will be distructed by a readable content on this page</Text>
                                </View>
                            </View>
                        )})}
                        <View>
                            <AntDesign style={styles.productfav} name="hearto" size={24} color="black" />
                        </View>
                    </View>
                    <View style={styles.sizearea}>
                            <TouchableOpacity style={styles.sizebutton}>
                                <Text style={styles.buttontext}>XS</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.sizebutton}>
                                <Text style={styles.buttontext}>S</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.sizebutton}>
                                <Text style={styles.buttontext}>M</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.sizebutton}>
                                <Text style={styles.buttontext}>L</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.sizebutton}>
                                <Text style={styles.buttontext}>XL</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.cartarea}>
                            <View style={styles.totalamount}>
                                <Text style={styles.amounthead}>Total Amount</Text>
                                <Text style={styles.amount}>$250</Text>
                            </View>
                            <TouchableOpacity style={styles.cartbutton}>
                                <Text style={styles.carttext}>Add To Cart</Text>
                            </TouchableOpacity>
                        </View>
                </ScrollView>
            </SafeAreaView>
        </React.Fragment>)
    }
}
export default details
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topframe: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 7
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
    image: {
        width: 300,
        height: 300
    },
    iteminfo: {
        flex: 0.5,
        flexDirection: 'row',
        position: 'relative'
    },
    productfav: {
        borderWidth: 1,
        backgroundColor: 'rgba(155, 180, 207,0.4)',
        borderColor: 'rgba(155, 180, 207,0.4)',
        borderRadius: 18,
        shadowColor: 'rgb(27, 51, 62)',
        shadowOpacity: 0.6,
        shadowOffset: {width: -5, height: 8},
        shadowRadius: 4,
        elevation: 20,
        marginVertical: 20,
        marginLeft: -10
    },
    square: {
        width: 260,
        height: 260,
        backgroundColor: 'rgb(255, 255, 255)',
        position: 'absolute',
        top: 25,
        left: 30,
        zIndex: -1
    },
    productname: {
        fontSize: 30
    },
    ratings: {
        alignSelf: 'flex-start',
        marginLeft: 10
    },
    productreview: {
        flexDirection: 'row'
    },
    reviewtext: {
        fontSize: 20
    },
    reviewinfo: {
        fontSize: 18,
        marginVertical: 15
    },
    sizebutton: {
        width: 30,
        height: 30,
        backgroundColor: 'rgb(255, 255, 255)',
        marginHorizontal: 10,
        borderRadius: 8
    },
    sizearea: {
        flexDirection: 'row'
    },
    buttontext: {
        alignSelf: 'center',
        fontSize: 20,
        paddingVertical: 2
    },
    cartarea: {
        marginVertical: 30,
        borderWidth: 1,
        backgroundColor: 'rgb(117, 125, 239)',
        borderColor: 'rgb(117, 125, 239)',
        width: 350,
        height: 70,
        borderRadius: 10,
        position: 'relative'
    },
    totalamount: {
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    amounthead: {
        fontWeight: '500',
        fontSize:15
    },
    amount: {
        fontSize: 30,
        fontWeight: '800'
    },
    cartbutton:{
        position: 'absolute',
        right: 35,
        bottom: 15,
        backgroundColor: 'rgb(79, 79, 236)',
        borderRadius: 10,
        width: 90,
        height: 40
    },
    carttext: {
        alignSelf: 'center',
        paddingVertical: 10,
        fontWeight: '800'
    }
});
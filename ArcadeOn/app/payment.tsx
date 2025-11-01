import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Payment = () => {
    return (
        <View>
            <Text>Payment</Text>
            
            <Link href={"/users/PaymentStatus"}>Payment Status</Link>
        </View>
    )
}

export default Payment

const styles = StyleSheet.create({})
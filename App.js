import React, { useState } from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import Razorpay from 'react-native-customui';

const TouchableHighlightExample = () => {


  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={() => {
        var options = {
          description: 'Credits towards consultation',
          currency: 'INR',
          key_id: 'rzp_test_1DP5mmOlF5G5ag',
          amount: '5000',
          email: 'void@razorpay.com',
          contact: '9999999123',
          method: "upi",	// Method specific fields
          "_[flow]": "intent",
          "upi_app_package_name":"com.google.android.apps.nbu.paisa.user"
        }
        Razorpay.open(options).then((data) => {
          // handle success
          alert(`Success: ${data.razorpay_payment_id}`);
        }).catch((error) => {
          // handle failure
          alert(`Error: ${error.code} | ${error.description}`);
        });
      }}>
     <Text style={styles.button}>Pay now</Text>
      </TouchableHighlight>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  },
  countText: {
    color: "#FF00FF"
  }
});

export default TouchableHighlightExample;
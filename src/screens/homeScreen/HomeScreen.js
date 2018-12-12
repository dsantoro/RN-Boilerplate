import React, { Component } from "react";
import { View, Text, Button } from "react-native";

class HomeScreen extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: "stretch",
                    justifyContent: "center"
                }}
            >
                <Text>Home Screen</Text>
                <Button title="Go to About" onPress={() => this.props.navigation.navigate('About')} />
            </View>
        );
    }
}

export default HomeScreen;

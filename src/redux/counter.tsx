import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { increment, decrement } from './actions';

interface Props {
    count: number;
    increment: () => void;
    decrement: () => void;
}

const counter: React.FC<Props> = ({ count, increment, decrement }) => {
    return (
        <View style={styles.containerStyle}>

            <Text style={styles.headerStyle}>REDUX-COUNTER</Text>
            <View style={styles.itemsViewStyle}>
                <Text style={styles.textStyle}>Count: {count}</Text>

                <TouchableOpacity style={styles.buttonStyle}
                    onPress={increment}>
                    <Text style={styles.textStyle}>Increment</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonStyle}
                    onPress={decrement}>
                    <Text style={styles.textStyle}>Decrement</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}

const mapStateToProps = (state: { count: number }) => ({
    count: state.count
});

const mapDispatchToProps = {
    increment,
    decrement
};

export default connect(mapStateToProps, mapDispatchToProps)(counter);

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        alignItems: 'center'
    },
    headerStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        margin: 30,
    },
    textStyle: {
        fontSize: 14,
        margin: 10,
        fontWeight: 'bold',
    },
    buttonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        height: 40,
        width: 100,
        backgroundColor: 'green'
    },
    itemsViewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
})

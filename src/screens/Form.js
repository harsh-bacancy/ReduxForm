//import liraries
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';

const renderFied = ({ label, keyboardType, name }) => {
    return (
        <View style={{ flexDirection: 'row', margin: 5, alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={{ flex: .25, color: '#FFF' }}>{label}</Text>
            <TextInput
                style={{ flex: 1, height: 40, backgroundColor: '#aaa', width: '90%', margin: 10 }}
            />
        </View>
    )
}
// create a component
const InputComponent = (props) => {
    const { handleInput } = props
    submitClick = () => {
        this.props.submitClick('here')
        handleInput
    }
    return (
        <View style={styles.container}>
            <Field component={renderFied} label='Email' />
            <Field component={renderFied} label='Password' />
            <TouchableOpacity
                onPress={handleInput}
                style={{ backgroundColor: '#fff', width: '50%', height: 40, justifyContent: 'center', alignItems: 'center', margin: 20 }}
            >
                <Text>
                    Submit
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const reduxFrom = reduxForm({
    form: 'contact'
})(InputComponent);

const mapStateToProps = (state) => ({
    dataReducer: state.dataReducer
})

const mapDispatchToProps = (dispatch) => ({
    submitClick: (data) => dispatch({ type: SUBMIT_CLICK, data })
})

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#555',
    },
});

//make this component available to the app
export default connect(mapStateToProps, mapDispatchToProps)(reduxFrom);

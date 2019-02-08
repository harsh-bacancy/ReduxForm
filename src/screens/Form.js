//import liraries
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Field, reduxForm } from 'redux-form'
// import { connect } from 'react-redux';

// const required = value => value ? undefined : 'Required';

const validate = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Enter Email'
        console.log('--', errors.email)
    }
    // if(!values.password){51-Redux-form#3.
    //     error.password='Enter password'
    // }
    return errors;
}

const renderFied = ({ label, meta: { error, touched }, input: { onChange, ...restInput } }) => {
    return (
        <View style={{ flexDirection: 'row', margin: 5, alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={{ flex: .25, color: '#FFF' }}>{label}</Text>
            <TextInput
                style={{ flex: 1, height: 40, backgroundColor: '#aaa', width: '90%', margin: 10 }}
                
            />
            {touched && (error && (<Text style={{ flex: .25, color: '#FFF' }}>/{error}/</Text>))}
        </View>
    )
}

const submit = (values) => {
    alert(values)
}
// create a component
const InputComponent = (props) => {
    const { handleSubmit, } = props
    return (
        <View style={styles.container}>
            <Field name="email" component={renderFied} label='Email' />
            <Field name="password" component={renderFied} label='Password' />
            <TouchableOpacity
                onPress={handleSubmit(submit)}
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
    form: 'contact',
    validate
})(InputComponent);

// const mapStateToProps = (state) => ({
//     dataReducer: state.dataReducer
// });

// const mapDispatchToProps = (dispatch) => ({
//     submitClick: (data) => dispatch({ type: SUBMIT_CLICK, payload: data })
// });

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
export default reduxFrom
// connect(mapStateToProps, mapDispatchToProps)

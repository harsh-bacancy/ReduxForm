
// import React, { Component } from 'react';
// import { Field, reduxForm } from 'redux-form';
// import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
// //Validation
// const validate = values => {
//     const errors = {};      
//     if (!values.username) {
//         errors.username = 'Required'
//     } else if (values.username.length > 20) {
//         errors.username = 'username must be less than or equal 20 characters'
//     } 
//     if (!values.email) {
//         errors.email = 'Required'
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//         errors.email = 'Invalid email address'
//     } 
//     if (!values.age) {
//         errors.age = 'Required'
//     } else if (isNaN(Number(values.age))) {
//         errors.age = 'Age must be a number'
//     } else if (Number(values.age) < 18) {
//         errors.age = 'You must be at least 18 years old'
//     }
//     return errors
// }
// const warn = values => {
//     const warnings = {};  
//     if (values.age < 19) {
//         warnings.age = 'You seem a bit young...'
//     }  
//     return warnings
// }
// const renderField = ({ label, keyboardType, meta: { touched, error, warning }, input: { onChange, ...restInput }}) => {
//     return (<View style={{ flexDirection: 'column', height: 70, alignItems: 'flex-start' }}>
//         <View style={{ flexDirection: 'row', height: 50, alignItems: 'center' }}>
//             <Text style={{ fontSize: 14, fontWeight: 'bold', width: 80 }}>{label}</Text>
//             <TextInput style={{ borderColor: 'steelblue', borderWidth: 1, height: 37, width: 220, padding: 5 }}
//                 keyboardType={keyboardType} onChangeText={onChange} {...restInput}
//             >
//             </TextInput>
//         </View>
//         {touched && ((error && <Text style={{ color: 'red' }}>{error}</Text>) ||
//                 (warning && <Text style={{ color: 'orange' }}>{warning}</Text>))}
//     </View>);
// };
// const submit = values => {
//     alert(`Validation success. Values = ~${JSON.stringify(values)}`);    
// }
// const InputComponent = props => {
//     const { handleSubmit } = props;
//     return (
//         <View style={{ flex: 1, flexDirection: 'column', margin: 40, justifyContent: 'flex-start', }}>
//             <Text style={{ fontSize: 18, fontWeight: 'bold', width: 200, textAlign: 'center', margin: 10 }}>Redux-form example</Text>
//             <Field name="username" keyboardType="default" label="Username: " component={renderField} />
//             <Field name="email" keyboardType="email-address" label="Email: " component={renderField} />
//             <Field name="age" keyboardType="numeric" label="Age: " component={renderField} />
//             <TouchableOpacity onPress={handleSubmit(submit)} style={{ margin: 10, alignItems: 'center' }}>
//                 <Text style={{
//                     backgroundColor: 'steelblue', color: 'white', fontSize: 16,
//                     height: 37, width: 200, textAlign: 'center', padding: 10
//                 }}>Submit</Text>
//             </TouchableOpacity>
//         </View>
//     );
// }
// const ContactForm = reduxForm({
//     form: 'contact', // a unique identifier for this form    
//     validate,                // <--- validation function given to redux-form    
//     warn
// })(InputComponent);

// export default ContactForm;
// /*
// class ContactComponent extends Component {
//     render() {
//       const { handleSubmit } = this.props;
//       return (
//         <View style={{flex: 1, flexDirection: 'column', margin: 40, justifyContent: 'flex-start',}}>        

//         </View>
//       );
//     }
//   };
//   */



















//import liraries
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';

// const required = value => value ? undefined : 'Required';

const validate = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Enter Email'
        console.log('--', errors.email)
    }
    if (!values.password) {
        errors.password = 'Enter password'
    }
    return errors;
}

const renderFied = ({ label, meta: { error, touched }, input: { onChange, ...restInput } }) => {
    return (
        <View style={{ flexDirection: 'column', alignItems: 'center', }}>
            <View style={{ flexDirection: 'row', margin: 5, alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{ flex: .25, color: '#000' }}>{label}</Text>
                <TextInput
                    style={{ flex: 1, height: 40, backgroundColor: '#aaa', width: '90%', margin: 10 }}
                    onChangeText={onChange}{...restInput}
                />

            </View>
            <View>
                {touched && (error && (<Text style={{ color: 'red' }}>{error}</Text>))}
            </View>
        </View>
    )
}

const submit = (values) => {
    alert('Submitted' + JSON.stringify(values))
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
        backgroundColor: '#ddd',
    },
});

//make this component available to the app
export default reduxFrom
// connect(mapStateToProps, mapDispatchToProps)

import { View } from 'react-native';
import React from 'react';
import { Button, Text, TextInput } from 'react-native-paper';

export default function SignupForms({navigation}) {
    const [showPass, setShowPass] = React.useState(false);
    const [showRePass, setShowRePass] = React.useState(false);
        return (
            <View style={{flex: 1,justifyContent: "center"}}>
                <Text style={{fontSize: 25,}}>Create an Account</Text>
                <TextInput
                mode='outlined'
                placeholder='Name'
                label='Name'
                style={{ marginTop: 10}}
                error={true}/>
                
                <TextInput
                mode='outlined'
                placeholder='Email'
                label='Email'
                style={{ marginTop: 10}}
                error={true}/>

                <TextInput
                mode='outlined'
                placeholder='Enter Password'
                label='Enter Password'
                secureTextEntry={showRePass}
                right={
                    <TextInput.Icon
                    icon={!showPass ? 'eye' : 'eye-off'}
                    onPress={() => setShowPass(!showPass)}/>
                }
                style={{marginTop: 10}}/>

                <TextInput
                mode='outlined'
                placeholder='Confirm Password'
                label='Confirm Password'
                secureTextEntry={showRePass}
                right={
                    <TextInput.Icon
                    icon={!showPass ? 'eye' : 'eye-off'}
                    onPress={() => setShowPass(!showPass)}/>
                }
                style={{marginTop: 10}}/>

                <Button icon='account-plus' mode='contained' style={{ marginTop: 10, borderRadius: 5,}}>
                    Register
                </Button>

                <Text variant='titleSmall' style={{marginTop: 20,}}>Already have an account? <Button onPress={() => navigation.pop()}>Login</Button></Text>

            </View>
        );
}
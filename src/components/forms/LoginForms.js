import { View, ToastAndroid } from "react-native";
import React from "react";
import { Button, Text, TextInput, HelperText } from "react-native-paper";
import { Formik } from "formik";
import * as Yup from "yup";
import fetchServices from "../services/fetchServices";

export default function LoginForm({ navigation }) {
  const [showPass, setShowPass] = React.useState(false);

  const showToast = (message = "Something wen't wrong") => {
    ToastAndroid.show(message, 3000);
  };
  
  const handleLogin = async (values) => {
    try { 
      const url = "http://192.168.0.1/api/v1/login";
      const result = await fetchServices.postData(url, values);

      if (result.message != null) {
        showToast(result?.message);
      } else {
        navigation.navigate("Home");
      }
    } catch (e) {
      console.debug(e.toString());
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid Email")
      .required("Please enter your email"),
    password: Yup.string().required("Please enter your password"),
  });

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={async (values) => {
        await handleLogin(values);
      }}
      validationSchema={validationSchema}
    >
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        errors,
        touched,
        setTouched,
      }) => {
  return (
    <View styles={{ flex: 1}}>
      <Text 
      style={{fontSize: 35, justifyContent: 'center'}}
      >WELCOME BACK</Text>
      
      <TextInput
        mode="outlined"
        placeholder="Email"
        label="Email"
        style={{ marginTop: 10 }}
        defaultValue={values.email}
              value={values.email}
              keyboardType="email-address"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              error={errors.email && touched.email}
              onFocus={() => setTouched({ email: true }, false)}
        />

      {errors.email && touched.email && (
              <HelperText type="error" visible={errors.email}>
                {errors.email}
              </HelperText>
      )}

      <TextInput
        mode="outlined"
        placeholder="Password"
        label="Password"
        secureTextEntry={showPass}
        right={
          <TextInput.Icon
            icon={!showPass ? "eye" : "eye-off"}
            onPress={() => setShowPass(!showPass)}
          />
        }
        style={{ marginTop: 10 }}
        value={values.password}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              error={errors.password && touched.password}
              onFocus={() => setTouched({ password: true }, false)}
        />
        {errors.password && touched.password && (
              <HelperText type="error" visible={errors.password}>
                {errors.password}
              </HelperText>
        )}

      <View
        style={{
          marginTop: 10,
          alignItems: 'row',
          flexDirection: 'row',
          justifyContent: 'flex-start',
        }}>
      <Text>Forgot your <Text style={{color:"blue", textDecorationLine: "underline"}} onPress={() => navigation.navigate("ForgotForms")}>Password</Text></Text>
      </View>

      <Button 
       loading={isSubmitting}
       disabled={isSubmitting}
       onPress={handleSubmit}
       icon="login"
       mode="contained"
       style={{ marginTop: 10 }}
      >
       Login
      </Button>

      <Text style={{marginTop: 10,}}> Don't have any account ?
      <Text style={{color:"blue", textDecorationLine: "underline",}} disabled={isSubmitting}
              onPress={() => navigation.navigate("Register")}
              icon="account-plus"
              mode="contained">
        Signup
      </Text>
      </Text>
    </View>
  );
}}
</Formik>
);
}
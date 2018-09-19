import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';

export default class FBLoginButton extends Component{
  render() {
    return (
      <View>
        <LoginButton
          onLoginFinished={
            (error, result) => {
              if (error) {
                Alert.alert("login has error: " + result.error);
              } else if (result.isCancelled) {
                Alert.alert("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    // Alert.alert(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => Alert.alert("logout.")}/>
      </View>
    );
  }
};
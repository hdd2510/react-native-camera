/* tslint:disable:no-console */
import React from 'react';
import { DeviceEventEmitter } from 'react-native';
import { Button, Toast, WhiteSpace, WingBlank } from 'antd-mobile-rn';

function showToast() {
  Toast.loading('Toast without', 5, null, true);
}
export default class ToastExample extends React.Component<> {

  render() {
    return (
      <WingBlank style={{ marginTop: 10 }}>
        <WhiteSpace />
        <Button onClick={showToast}>Without mask</Button>
      </WingBlank>
    );
  }
}

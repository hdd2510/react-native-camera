import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';


type Props = {};
export default class Time extends Component<Props> {
    constructor(){
        super();
        this.state={
            count : 10
        }
    }
    componentDidMount(){
        let timeCount = setInterval(()=>{
            this.setState({
                count : this.state.count - 1
            })
            if (this.state.count == 0){
                return clearInterval(timeCount)
            }
        },1000)
    }
    timeResult = ()=>{
        if(this.state.count == 0){
            return(
                <Text>倒计时结束!</Text>
            )
        }else{
            return(
                <Text>{this.state.count}</Text>
            )
        }
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Text>{this.timeResult()}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});

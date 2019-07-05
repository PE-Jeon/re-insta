import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Card, CardItem, Thumbnail, Body, Left, 
    Right, Button, Icon} from 'native-base'

class CardComponent extends Component {
    render() {

        const images = {
            "1": require('../assets/feed_images/1.jpg'),
            "2": require('../assets/feed_images/2.jpg'),
            "3": require('../assets/feed_images/3.jpg')
        }
        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={require
                        ('../assets/me.jpg')}/>
                        <Body>
                            <Text>Junhyun </Text>
                            <Text note> Apr 15, 2019</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={images[this.props.imageSource]} style={
                        {height:200, width:null, flex:1}}
                        />
                </CardItem>
                <CardItem style={{ height: 45}}>
                    <Left>
                        <Button transparent>
                            <Icon name="md-heart-empty"
                            style={{color:'black'}} />
                        </Button>
                        <Button transparent>
                            <Icon name="md-chatbubbles"
                            style={{color:'black'}} />
                        </Button>
                        <Button transparent>
                            <Icon name="md-send"
                            style={{color:'black'}} />
                        </Button>
                    </Left>
                </CardItem>
                <CardItem style={{height:20}}>
                    <Text>{this.props.likes} </Text>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text>
                            <Text style={{ fontWeight: "900" }}>Junhyun </Text>
                            Dashwood contempt on mr unlocked resolved provided of of. Stanhill wondered it it welcomed oh. Hundred no prudent he however smiling at an offence. If earnestly extremity he he propriety something admitting convinced ye. Pleasant in to although as if differed horrible. Mirth his quick its set front enjoy hoped had there. Who connection imprudence middletons too but increasing celebrated principles joy. Herself too improve gay winding ask expense are compact. New all paid few hard pure she. 
                            </Text>
                    </Body>
                </CardItem>
            </Card>
        );
    }
}

export default CardComponent;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});
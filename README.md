# React Native ImageAnimation
A pure js image animation like ios animationImages, support ios and android

## Installation
```sh
npm install react-native-image-animation --save
```

## Usage

### Example
```js
'use strict';

var React = require('react-native');
var {
    StyleSheet,
    View,
} = React;

var AImage = require('react-native-image-animation');
module.exports = React.createClass({
    animationImages:[
        require('image!loading_1'),
        require('image!loading_2'),
        require('image!loading_3'),
        require('image!loading_4'),
        require('image!loading_5'),
        require('image!loading_6'),
        require('image!loading_7'),
        require('image!loading_8'),
    ],
    render: function() {
        return (
            <View style={styles.container}>
                <AImage
                    resizeMode='stretch'
                    animationRepeatCount= {0}
                    animationDuration={200}
                    animationImages={this.animationImages}
                    style={styles.image} />
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    image: {
        width:100,
        height:100
    }
});

```

## Screencasts

![loading](https://github.com/remobile/react-native-image-animation/blob/master/screencasts/loading.gif)

#### Props
This module supports react-native Image's props all.
##### Animation Props
- `animationImages : PropTypes.array.isRequired` - animation Images Array
- `animationRepeatCount : PropTypes.number` - 0 for forever
- `animationDuration : PropTypes.number` - default is 1000(ms)

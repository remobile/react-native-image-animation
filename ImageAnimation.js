/*
* (The MIT License)
* Copyright (c) 2015-2016 YunJiang.Fang <42550564@qq.com>
*/
'use strict';

var React = require('react-native');
var {
    Image,
    PropTypes,
} = React;

var TimerMixin = require('react-timer-mixin');

module.exports = React.createClass({
    propTypes: {
        animationImages : PropTypes.array.isRequired,
        animationRepeatCount : PropTypes.number,
        animationDuration : PropTypes.number,
    },
    mixins: [TimerMixin],
    getInitialState: function() {
        return {
            imageIndex: 0,
        };
    },
    componentDidMount: function() {
        this.animationRepeatCount = this.props.animationRepeatCount||0;
        this.intervalId = this.setInterval(
            ()=>{
                var imageIndex = this.state.imageIndex+1;
                if (imageIndex >= this.props.animationImages.length) {
                    imageIndex = 0;
                    if (this.animationRepeatCount === 1) {
                        this.clearInterval(this.intervalId);
                        return;
                    }
                    this.animationRepeatCount--;
                }
                this.setState({imageIndex:imageIndex})
            }, this.props.animationDuration||1000);
        },
        render: function() {
            return (
                <Image
                    {...this.props}
                    source={this.props.animationImages[this.state.imageIndex]}/>
            );
        }
    });

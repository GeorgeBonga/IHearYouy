import React, { useState, useRef } from 'react';
import { Animated, PanResponder, View, Dimensions, Image, Text, Modal, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { getImage } from '../screens/helpers/randomProfile';

const { width, height } = Dimensions.get('window');

const SingleImage = ({ image }) => {
    const [open, setOpen] = useState(false);
    const pan = useRef(new Animated.ValueXY()).current;
    const py = useRef(0);

    const panMove = Animated.event([null, { dx: pan.x, dy: pan.y }]);

    const _panResponder = PanResponder.create({
        onMoveShouldSetResponderCapture: () => true,
        onMoveShouldSetPanResponderCapture: () => true,
        onPanResponderGrant: () => {},
        onPanResponderMove: (e, g) => {
            if (!open) return;
            return panMove(e, g);
        },
        onPanResponderRelease: () => {},
    });

    const openImage = () => {
        setOpen(true);
        // Calculate center of image
        viewRef.measure((a, b, w, h, px, py) => {
            const toY = height / 2 - (py + 100);
            py.current = py;
        });
    };

    const closeImage = () => {
        setOpen(false);
    };

    const getStyle = () => {
        return [
            {
                flex: 1,
                transform: [{ translateX: pan.x }, { translateY: pan.y }],
            },
        ];
    };

    const renderModal = () => {
        return (
            <Modal transparent={true}>
                <View style={{ flex: 1 }}>
                    <Animated.View {..._panResponder.panHandlers} style={getStyle()}>
                        <View ref={(ref) => (viewRef = ref)} style={{ flex: 1, backgroundColor: 'rgba(0,0,0,.5)' }}>
                            <Image style={{ top: py.current, height: height / 2.5, width }} source={getImage(image)} />
                        </View>
                    </Animated.View>
                </View>
            </Modal>
        );
    };

    if (!open) {
        return (
            <View style={{ flex: 1 }}>
                <TouchableWithoutFeedback onPress={openImage}>
                    <Image style={{ flex: 1, height: null, width }} source={getImage(image)} />
                </TouchableWithoutFeedback>
            </View>
        );
    }

    return renderModal();
};

export default SingleImage;

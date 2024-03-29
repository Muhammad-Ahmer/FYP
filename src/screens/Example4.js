import React, { useState } from 'react';
import {
    Button,
    Modal,
    StyleSheet,
    View,
    Text,
    I18nManager,
} from 'react-native';
import ColorPicker, {
    Swatches,
    Preview,
    OpacitySlider,
    BrightnessSlider,
    HueSlider,
    SaturationSlider,
} from 'reanimated-color-picker';

const customSwatches = ['#ffbe0b', '#fb5607', '#ff006e', '#8338ec', '#3a86ff'];
const isRTL = I18nManager.isRTL;

export default function Example4({ onSelectColor, color }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <Button title="Color Picker 4" onPress={() => setShowModal(true)} />

            <Modal
                onRequestClose={() => setShowModal(false)}
                visible={showModal}
                animationType="slide">
                <View style={styles.container}>
                    <ColorPicker
                        value={color.value}
                        onComplete={onSelectColor}
                        style={{ width: '75%', justifyContent: 'center' }}
                        sliderThickness={30}
                        thumbSize={40}
                        thumbShape="pill"
                    >
                        <Preview
                            style={[styles.previewStyle, styles.shadow]}
                            textStyle={{ fontSize: 18 }}
                            colorFormat="rgba"
                            hideInitialColor
                        />
                        <Text style={styles.sliderLabel}>Hue:</Text>
                        <HueSlider
                            style={[{ borderRadius: 15, marginBottom: 25 }, styles.shadow]}
                        />
                        <Text style={styles.sliderLabel}>Brightness:</Text>
                        <BrightnessSlider
                            style={[{ borderRadius: 15, marginBottom: 25 }, styles.shadow]}
                        />
                        <Text style={styles.sliderLabel}>Saturation:</Text>
                        <SaturationSlider
                            style={[{ borderRadius: 15, marginBottom: 25 }, styles.shadow]}
                        />
                        <Text style={styles.sliderLabel}>Opacity:</Text>
                        <OpacitySlider
                            style={[{ borderRadius: 15, marginBottom: 25 }, styles.shadow]}
                        />
                        <Swatches
                            style={{ marginTop: 30 }}
                            swatchStyle={[styles.swatchStyle, styles.shadow]}
                            colors={customSwatches}
                        />
                    </ColorPicker>

                    <Button title="Close" onPress={() => setShowModal(false)} />
                </View>
            </Modal>
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',
        paddingBottom: 0,
        width: '100%',
        maxWidth: 500,
        margin: 'auto',
    },
    sliderLabel: {
        fontSize: 20,
        color: '#000',
        alignSelf: isRTL ? 'flex-end' : 'flex-start',
        marginBottom: 10,
    },
    previewStyle: {
        height: 55,
        borderRadius: 50,
        marginBottom: 30,
    },
    swatchStyle: {
        borderRadius: 25,
        height: 45,
        width: 45,
        marginHorizontal: 5,
        marginBottom: 15,
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
});

import {StatusBar } from "expo-status-bar"; import React, { Component } from "react"; import {
StyleSheet,
Text,
View,
SafeAreaView,
Platform,
Image,
ScrollView,
TouchableOpacity
} from "react-native";
import { Camera } from "expo-camera";
import as FaceDetector from "expo-face-detector";


export default class Main extends Component {
constructor(props) {
}
super(props);
this.state = {
};
hasCameraPermission: null,
faces: []
this.onFaces Detected = this.onFaces Detected.bind(this);


async componentDidMount() {
}
const { status } = await Camera.requestPermissionsAsync(); this.setState({ hasCameraPermission: status
"granted"});


onFacesDetected({ faces }) { this.setState({ faces: faces });
}


<View style={styles.middleContainer}>
<Camera
/>
style={{ flex: 1 }} type={Camera.Constants.Type.front}
faceDetectorSettings={{
}}
mode: FaceDetector.Constants.Mode.fast,
detectLandmarks: FaceDetector.Constants.Landmarks.all,
runClassifications: FaceDetector.Constants.Classifications.all
onFacesDetected={this.on FacesDetected}
onFacesDetectionError={this.on Faces DetectionError}
</View>
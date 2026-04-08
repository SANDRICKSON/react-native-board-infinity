import React, {useState} from 'react';
import {
    Alert,
    Button,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

interface FormData {
    name: string;
    age: number;
}

export default function App() {
    const [formData, setFormData] = useState<FormData>({ name: '', age: 0 });
    const [submittedData, setSubmittedData] = useState<FormData | null>(null);
    const [buttonPressedCount, setButtonPressedCount] = useState(0);

    const handleInputChange = (field: keyof FormData, value: string) => {
        if (field === 'age') {
            setFormData((prev) => ({ ...prev, age: Number(value) }));
        } else {
            setFormData((prev) => ({ ...prev, [field]: value }));
        }
    };

    const handleSubmit = () => {
        if (!formData.name || !formData.age) {
            Alert.alert("Please fill in both fields!");
            return;
        }
        setSubmittedData(formData);
        Alert.alert('Success', 'Form Submitted Successfully!');
    };

    const handleCustomButtonPress = () => {
        setButtonPressedCount((prev) => prev + 1);
        Alert.alert('Button Pressed', `Button Pressed ${buttonPressedCount + 1} times!`);
    };

    const handleTouchablePress = () => {
        Alert.alert("Touchable Pressed", `Touchable Pressed`);
    };

    return (
        <View style={{ padding: 20, alignItems:'center',justifyContent:'center'}}>
            <TextInput
                placeholder="Enter your name"
                value={formData.name}
                onChangeText={(value) => handleInputChange('name', value)}
                style={{ borderWidth: 1, padding: 8, marginBottom: 10 }}
            />
            <TextInput
                placeholder="Enter your age"
                value={formData.age.toString()}
                onChangeText={(value) => handleInputChange('age', value)}
                keyboardType="numeric"
                style={{ borderWidth: 1, padding: 8, marginBottom: 10 }}
            />
            <Button title="Submit" onPress={handleSubmit} />
            <Button  title="Press Me" onPress={handleCustomButtonPress}/>

            <TouchableOpacity onPress={handleTouchablePress} style={{ marginTop: 10 }}>
                <View style={{ backgroundColor: 'blue', padding: 10 }}>
                    <Text style={{ color: 'white', textAlign: 'center' }}>Press Me</Text>
                </View>
            </TouchableOpacity>

            {submittedData && (
                <View style={{ marginTop: 20 }}>
                    <Text>Name: {submittedData.name}</Text>
                    <Text>Age: {submittedData.age}</Text>
                </View>
            )}
        </View>
    );
}
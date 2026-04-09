import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "@/app/screens/HomeScreen";
import SettingsScreen from "@/app/screens/SettingsScreen";

const Tab = createBottomTabNavigator();

const Index: React.FC = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
            <Tab.Screen name="Settings" component={SettingsScreen}></Tab.Screen>
        </Tab.Navigator>
    )
}
export default Index;
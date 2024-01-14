import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./src/navigation/AppNavigator";
import { Provider as PaperProvider } from "react-native-paper";
export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}

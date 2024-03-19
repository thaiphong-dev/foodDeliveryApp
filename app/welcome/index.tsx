import { View } from "@/components/Themed";
import Welcome from "@/components/welcome";
import { Text } from "react-native";

export default function Page() {
  return (
    <View className="flex-1 items-center justify-center bg-gradient-to-b from-str-brown from-20% to-str-brown to-100%">
      <Text className="text-red">Tab Page abc</Text>
    </View>
  );
}

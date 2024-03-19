import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";

export default function Welcome() {
  return (
    <View className="flex-1 items-center justify-center ">
      <Text className="text-red">Tab One asdadas</Text>
      <EditScreenInfo path="app/welcome/index.tsx" />
    </View>
  );
}

import EditScreenInfo from "@/components/EditScreenInfo";
import { View } from "@/components/Themed";
import Welcome from "@/components/welcome";
import { Link } from "expo-router";
import { Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Page() {
  return (
    <View className="flex-1 items-center justify-center ">
      <LinearGradient
        colors={["rgba(105, 65, 39, 0.2)", "rgba(9, 3, 2, 0.9598)"]}
        // style={styles.button}
        className="w-screen h-screen absolute top-0"
      >
        <Link className="text-str-brown" href="/welcome/" asChild>
          <Text className="text-red">Tab home page absdadc</Text>
        </Link>
      </LinearGradient>
    </View>
  );
}

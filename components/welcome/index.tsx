import { LinearGradient } from "expo-linear-gradient";

import { Pressable, Text, TouchableOpacity, View } from "react-native";

import ArrowSvg from "../common/svgs/arrowSvg";
import { router } from "expo-router";

export default function Welcome() {
  return (
    <View className="flex-1 items-center justify-around">
      <LinearGradient
        colors={["rgba(105, 65, 39, 0.4)", "rgba(4, 0, 0, 1)"]}
        className="w-screen h-screen absolute top-0"
      ></LinearGradient>
      {/* cho image vô sau  */}
      {/* <Image
        source={require("../assets/images/logo/1.png")}
        alt="imge"
        className="w-[200px] h-[200px] bg-"
      /> */}
      <View>
        <Text className="text-[50px]">LogoHere</Text>
      </View>

      <View className="flex justify-center items-center max-w-[350px] space-y-[15px]">
        <Text className="text-white text-[32px] font-semibold">
          Welcome to WaraChow
        </Text>

        <Text className="text-white text-[20px] text-center font-light">
          Order the best meals in Lagos and have them delivered to your doorstep
          in little or no time. Doesn’t that sound delicious???
        </Text>

        <TouchableOpacity
          onPress={() => router.push("/signIn/")}
          className="w-[277px] h-[50px] bg-white flex justify-center items-center rounded-[34px]"
        >
          <ArrowSvg />
        </TouchableOpacity>
      </View>
    </View>
  );
}

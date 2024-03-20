import { LinearGradient } from "expo-linear-gradient";

import {
  Image,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Animated,
  Dimensions,
} from "react-native";

interface Props {
  slideDown: () => void;
}
export default function SignUp({ slideDown }: Props) {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  return (
    <View
      style={{ width: windowWidth }}
      className="flex-1 justify-around items-center rounded-t-[54px] bg-brown_4 space-y-[20px] pb-[20px]"
    >
      <Pressable
        onPress={() => slideDown()}
        className="flex justify-center items-center space-y-[20px] pt-[20px]"
      >
        <View className="h-[8px] w-[60px] bg-brown_1 rounded-[34px]"></View>
        <Text className="text-[50px] font-semibold text-brown_1 capitalize">
          Sign up
        </Text>
      </Pressable>

      {/* register form  */}

      <View className="space-y-[30px] flex justify-center items-center">
        <View className="flex justify-center items-center w-[350px] space-y-[15px]">
          <View className="w-full h-[50px] bg-brown_2 rounded-[34px] flex justify-center items-start pl-[25px] ">
            <TextInput
              className="text-brown_1 w-full text-[20px]"
              placeholder="User name"
              placeholderTextColor="#97745D"
            />
          </View>
        </View>
        <View className="flex justify-center items-center w-[350px] space-y-[15px]">
          <View className="w-full h-[50px] bg-brown_2 rounded-[34px] flex justify-center items-start pl-[25px] ">
            <TextInput
              className="text-brown_1 w-full text-[20px]"
              placeholder="Email"
              placeholderTextColor="#97745D"
              keyboardType="email-address"
            />
          </View>
        </View>
        <View className="flex justify-center items-center w-[350px] space-y-[15px]">
          <View className="w-full h-[50px] bg-brown_2 rounded-[34px] flex justify-center items-start pl-[25px] ">
            <TextInput
              className="text-brown_1 w-full text-[20px]"
              placeholder="Password"
              placeholderTextColor="#97745D"
              secureTextEntry={true}
            />
          </View>
        </View>

        <View className="flex justify-center items-center w-[350px] space-y-[15px]">
          <View className="w-full h-[50px] bg-brown_2 rounded-[34px] flex justify-center items-start pl-[25px] ">
            <TextInput
              className="text-brown_1 w-full text-[20px]"
              placeholder="Confirm Password"
              placeholderTextColor="#97745D"
              secureTextEntry={true}
            />
          </View>
        </View>

        <TouchableOpacity className="w-[277px] h-[50px] rounded-[34px] bg-brown_1 flex justify-center items-center">
          <Text className="text-white text-[20px] font-medium capitalize">
            Never Hungry Again!
          </Text>
        </TouchableOpacity>

        <Text className="flex justify-center items-center mb-[30px] capitalize text-brown_1 text-[20px]">
          Already have an account?
          <Text
            onPress={() => slideDown()}
            className="underline text-red-500 normal-case"
          >
            {" "}
            Sign in
          </Text>
        </Text>

        <Text className="flex justify-center items-center mb-[20px] capitalize text-brown_1 text-[20px]">
          or Sign in with
        </Text>

        <View className="flex flex-row justify-between items-center space-x-[30px]">
          <Image source={require("../../assets/images/icons/Facebook.png")} />
          <Image source={require("../../assets/images/icons/Google.png")} />
        </View>
      </View>
    </View>
  );
}

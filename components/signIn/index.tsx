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

import ArrowSvg from "../common/svgs/arrowSvg";
import { router } from "expo-router";
import SignUp from "../signUp";
import { useEffect, useRef, useState } from "react";

export default function SignIn() {
  const windowHeight = Dimensions.get("window").height;
  const slide = useRef(new Animated.Value(windowHeight)).current; // Initial value for opacity: 0
  const [isShow, setIsShow] = useState(false);

  const delayStyle = (data: boolean) => {
    setTimeout(() => {
      setIsShow(data);
    }, 1000);
  };
  const slideUp = () => {
    delayStyle(true);
    Animated.timing(slide, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  };

  const slideDown = () => {
    delayStyle(false);
    Animated.timing(slide, {
      toValue: windowHeight,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View className="flex-1 items-center justify-center relative">
      <View
        className="flex-1 items-center justify-around"
        style={{ opacity: isShow ? 0.2 : 1 }}
      >
        <LinearGradient
          colors={["rgba(223, 215, 203, 1)", "rgba(255, 253, 253, 1)"]}
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

        {/* login form  */}
        <View className="space-y-[30px] flex justify-center items-center">
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

          <Pressable className="flex justify-center items-center mb-[50px]">
            <Text className="capitalize text-brown_1 text-[20px]">
              Forgot password?
            </Text>
          </Pressable>

          <TouchableOpacity className="w-[277px] h-[50px] rounded-[34px] bg-brown_1 flex justify-center items-center">
            <Text className="text-white text-[20px] font-medium capitalize">
              Eat away!
            </Text>
          </TouchableOpacity>

          <Text className="flex justify-center items-center mb-[30px] capitalize text-brown_1 text-[20px]">
            Don’t have an account?
            <Text
              onPress={() => slideUp()}
              className="underline text-red-500 normal-case"
            >
              {" "}
              Sign up
            </Text>
          </Text>

          <Text className="flex justify-center items-center mb-[20px] capitalize text-brown_1 text-[20px]">
            or Sign In with
          </Text>

          <View className="flex flex-row justify-between items-center space-x-[30px]">
            <Image source={require("../../assets/images/icons/Facebook.png")} />
            <Image source={require("../../assets/images/icons/Google.png")} />
          </View>
        </View>
      </View>
      <Animated.View
        className="absolute left-0 bottom-0"
        style={{
          transform: [{ translateY: slide }],
        }}
      >
        <SignUp slideDown={slideDown} />
      </Animated.View>
    </View>
  );
}

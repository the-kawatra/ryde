import { Image, ScrollView, Text, View } from "react-native";
import { useState } from "react";
import { Link } from "expo-router";

// project imports
import { InputField, CustomButton, Oauth } from "@/components";
import { icons, images } from "@/constants";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleInput = (key: string, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const handleSignIn = async () => {
    //
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-60">
          <Image source={images.signUpCar} className="z-0 w-full h-60" />
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Welcome 👋
          </Text>
        </View>
        <View className="p-5">
          <InputField
            label="Email"
            placeholder="Enter your email"
            icon={icons.email}
            value={form.email}
            onChange={(value) => handleInput("email", value)}
          />
          <InputField
            label="Password"
            placeholder="Enter your password"
            icon={icons.lock}
            secureTextEntry={true}
            value={form.password}
            onChange={(value) => handleInput("password", value)}
          />

          <CustomButton
            title="Sign In"
            onPress={handleSignIn}
            className="mt-6"
          />

          <Oauth />

          <Link
            href="/(auth)/sign-up"
            className="mt-10 text-lg text-center text-general-200"
          >
            <Text>Don't have an account? </Text>
            <Text className="text-primary-500">Sign Up</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;

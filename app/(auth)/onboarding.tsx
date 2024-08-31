import { useMemo, useRef, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Swiper from "react-native-swiper";

// project imports
import CustomButton from "@/components/CustomButton";
import { onboarding } from "@/constants";

const Onboarding = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const isLastSlide = useMemo(
    () => activeIndex === onboarding.length - 1,
    [activeIndex]
  );

  const handleSkip = () => {
    router.replace("/(auth)/sign-up");
  };

  const handleActiveIndex = (index: number) => {
    setActiveIndex(index);
  };

  const handleNext = () => {
    if (isLastSlide) {
      router.replace("/(auth)/sign-up");
    } else {
      swiperRef.current?.scrollBy(1);
    }
  };

  return (
    <SafeAreaView className="h-full p-4 flex items-center justify-between bg-white">
      <TouchableOpacity
        onPress={handleSkip}
        className="w-full flex justify-end items-end"
      >
        <Text className="text-black font-JakartaBold">Skip</Text>
      </TouchableOpacity>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={<View className="w-8 h-1 mx-1 bg-[#E2E8F0] rounded-full" />}
        activeDot={<View className="w-8 h-1 mx-1 bg-[#0286FF] rounded-full" />}
        onIndexChanged={handleActiveIndex}
      >
        {onboarding.map((item) => (
          <View key={item.id} className="flex items-center justify-center p-5">
            <Image
              source={item.image}
              className="w-full h-[300px]"
              resizeMode="contain"
            />
            <View className="w-full mt-10 flex flex-row items-center justify-center">
              <Text className="mx-10 text-black text-3xl font-bold text-center">
                {item.title}
              </Text>
            </View>
            <Text className="mx-10 mt-3 text-[#858585] text-lg font-JakartaSemiBold text-center">
              {item.description}
            </Text>
          </View>
        ))}
      </Swiper>
      <CustomButton
        title={isLastSlide ? "Get Started" : "Next"}
        onPress={handleNext}
        className="mt-10"
      />
    </SafeAreaView>
  );
};

export default Onboarding;

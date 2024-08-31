import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Image,
  TextInput,
  Platform,
  Keyboard,
} from "react-native";

// project imports
import { InputFieldProps } from "@/types/type";

const InputField = ({
  label,
  labelStyle,
  icon,
  secureTextEntry = false,
  containerStyle,
  inputStyle,
  iconStyle,
  className,
  ...props
}: InputFieldProps) => (
  <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="my-2 w-full">
        <Text className={`text-lg font-JakartaBold mb-3 ${labelStyle}`}>
          {label}
        </Text>
        <View
          className={`flex flex-row items-center justify-start bg-neutral-100 rounded-full border border-neutral-100 focus:border-primary-500 ${containerStyle}`}
        >
          {icon ? (
            <Image source={icon} className={`w-6 h-6 ml-4 ${iconStyle}`} />
          ) : null}
          <TextInput
            className={`rounded-full p-4 font-JakartaBold flex-1 ${inputStyle} text-left`}
            secureTextEntry={secureTextEntry}
            {...props}
          />
        </View>

        {/* Verification Modal */}
      </View>
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
);

export default InputField;

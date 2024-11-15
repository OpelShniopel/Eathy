import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useColorScheme } from "nativewind";
import * as Yup from "yup";

import { changePassword } from "@/api/authService";
import {
  inputClassName,
  buttonClassName,
} from "@/constants/AccountSecurityStyles";
import { changePasswordValidationSchema } from "@/utils/validationSchemas";
import { useTranslation } from 'react-i18next';

const ChangePasswordSection = () => {
  const { t } = useTranslation();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validationErrors, setValidationErrors] =
    useState<Yup.ValidationError | null>(null);
  const { colorScheme } = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  const handleChangePassword = async () => {
    try {
      await changePasswordValidationSchema.validate(
        { newPassword, confirmPassword },
        { abortEarly: false },
      );
      setValidationErrors(null);

      const success = await changePassword(newPassword);
      if (success) {
        setNewPassword("");
        setConfirmPassword("");
        Alert.alert("Success", "Password changed successfully.");
      } else {
        Alert.alert("Error", "Failed to change password. Please try again.");
      }
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        setValidationErrors(error);
      } else {
        Alert.alert("Error", "An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <View
      className={`${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-lg p-4 shadow-md`}
    >
      <Text
        className={`mb-4 text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-800"}`}
      >
        {t('CHNGEPASStitle')}
      </Text>
      <View className="mb-4">
        <TextInput
          placeholder={t('CHNGEPASSnew')}
          value={newPassword}
          onChangeText={setNewPassword}
          secureTextEntry
          className={inputClassName(isDarkMode)}
          placeholderTextColor={isDarkMode ? "#9ca3af" : "#6b7280"}
        />
        {validationErrors?.inner.some(
          (error) => error.path === "newPassword",
        ) && (
          <Text className="mt-1 text-red-500">
            {
              validationErrors.inner.find(
                (error) => error.path === "newPassword",
              )?.message
            }
          </Text>
        )}
      </View>
      <View className="mb-4">
        <TextInput
          placeholder={t('CHNGEPASSnewconf')}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          className={inputClassName(isDarkMode)}
          placeholderTextColor={isDarkMode ? "#9ca3af" : "#6b7280"}
        />
        {validationErrors?.inner.some(
          (error) => error.path === "confirmPassword",
        ) && (
          <Text className="mt-1 text-red-500">
            {
              validationErrors.inner.find(
                (error) => error.path === "confirmPassword",
              )?.message
            }
          </Text>
        )}
      </View>
      <TouchableOpacity
        onPress={handleChangePassword}
        className={buttonClassName(isDarkMode)}
      >
        <Text
          className={`text-center font-bold ${isDarkMode ? "text-white" : "text-black"}`}
        >
          {t('CHNGEPASStitle')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChangePasswordSection;

import React from "react";
import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { ExerciseFormProps } from "@/types";

const ExerciseForm: React.FC<ExerciseFormProps> = ({
  exercise,
  setExercise,
  duration,
  setDuration,
  calories,
  setCalories,
  onAddExercise,
  onCancel,
  isLoading,
  validationErrors,
}) => {
  const getFieldError = (field: string) => {
    return validationErrors?.inner.find((error) => error.path === field)
      ?.message;
  };

  return (
    <View className="flex-1 p-6 bg-gray-100 dark:bg-black">
      <Text className="text-2xl font-bold mb-6 text-center text-black dark:text-white">
        Add Exercise
      </Text>
      <View className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
        <TextInput
          value={exercise}
          onChangeText={setExercise}
          placeholder="Exercise"
          placeholderTextColor="#6B7280"
          className="border-b border-gray-300 dark:border-gray-600 p-2 mb-2 text-lg text-black dark:text-white"
        />
        {getFieldError("exercise") && (
          <Text className="text-red-500 mb-2">{getFieldError("exercise")}</Text>
        )}
        <TextInput
          value={duration > 0 ? duration.toString() : ""}
          onChangeText={(text) => setDuration(parseInt(text) || 0)}
          placeholder="Duration (in minutes)"
          placeholderTextColor="#6B7280"
          keyboardType="numeric"
          className="border-b border-gray-300 dark:border-gray-600 p-2 mb-2 text-lg text-black dark:text-white"
        />
        {getFieldError("duration") && (
          <Text className="text-red-500 mb-2">{getFieldError("duration")}</Text>
        )}
        <TextInput
          value={calories > 0 ? calories.toString() : ""}
          onChangeText={(text) => setCalories(parseInt(text) || 0)}
          placeholder="Calories Burned"
          placeholderTextColor="#6B7280"
          keyboardType="numeric"
          className="border-b border-gray-300 dark:border-gray-600 p-2 mb-2 text-lg text-black dark:text-white"
        />
        {getFieldError("calories") && (
          <Text className="text-red-500 mb-4">{getFieldError("calories")}</Text>
        )}
        <TouchableOpacity
          onPress={onAddExercise}
          disabled={isLoading}
          className="bg-yellow-400 dark:bg-yellow-600 py-3 rounded-full border-2 border-black dark:border-white mb-4"
        >
          {isLoading ? (
            <ActivityIndicator color="black" />
          ) : (
            <Text className="text-black dark:text-white font-bold text-lg text-center">
              Add
            </Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onCancel}
          className="bg-gray-300 dark:bg-gray-600 py-3 px-6 rounded-full"
        >
          <Text className="text-gray-700 dark:text-gray-200 font-bold text-lg text-center">
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ExerciseForm;

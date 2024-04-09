import React from "react";
import { ScrollView, View, Text, ImageBackground, Image } from "react-native";

export default function AboutUs() {
  return (
    <ImageBackground
      source={require("../../assets/images/gradientBackground.png")}
      className="flex-1 resize-y justify-center bg-white dark:bg-black"
    >
      <ScrollView>
        <View className="flex-grow flex-row justify-center">
          <Text className="ml-11 mt-10 text-left text-6xl font-bold uppercase color-green-500">
            Eat
          </Text>
          <Text className="mt-10 text-left text-6xl font-bold uppercase text-black dark:text-white">
            ing
          </Text>
        </View>

        <View className="flex-grow flex-row justify-center">
          <Text className="text-left text-6xl font-bold uppercase text-black dark:text-white">
            Heal
          </Text>
          <Text className="mr-14 text-left text-6xl font-bold uppercase color-green-500">
            thy
          </Text>
        </View>

        <View className="mb-5 mt-10 items-center">
          <View className="mb-4 h-48 w-48 rounded-full bg-white shadow-lg">
            <Image
              source={require("../../assets/images/icon.png")}
              className="h-48 w-48 rounded-full"
            />
          </View>
        </View>

        <View className=" m-5 mr-14 rounded-3xl bg-emerald-100 dark:bg-emerald-800">
          <Text className="ml-10 mt-10 text-left text-3xl text-black dark:text-white">
            Our mission
          </Text>
          <Text className="m-10 text-left text-black dark:text-white">
            At EATHY, our mission is to empower individuals on their journey
            towards better health and well-being. We believe that everyone
            deserves access to personalized nutrition guidance, whether they are
            managing an illness or simply striving to make healthier choices.
            Our app combines the convenience of meal tracking with tailored
            recommendations, catering to the unique needs of each user. We are
            committed to providing a supportive platform that fosters positive
            change and encourages sustainable lifestyle habits.
          </Text>
        </View>

        <View className=" m-5 ml-14 rounded-3xl bg-emerald-100 dark:bg-emerald-800">
          <Text className="mr-10 mt-10 text-right text-3xl text-black dark:text-white">
            Our Values
          </Text>
          <Text className="m-10 text-pretty text-left text-black dark:text-white">
            Accessibility: We are dedicated to making our app accessible to all,
            regardless of health condition, dietary preference, or socioeconomic
            status.
          </Text>
          <Text className="ml-10 mr-10 text-pretty text-left text-black dark:text-white">
            Accuracy: We prioritize accuracy and evidence-based recommendations,
            ensuring that our users receive reliable information to guide their
            dietary choices.
          </Text>
          <Text className="m-10 text-pretty text-left text-black dark:text-white">
            Community feedback: We believe that community feedback allows us to
            prioritize features and updates based on what matters most to our
            users, ensuring that our platform remains relevant and impactful.
          </Text>
        </View>

        <View className=" m-5 mr-14 rounded-3xl bg-emerald-100 dark:bg-emerald-800">
          <Text className="ml-10 mt-10 text-left text-3xl text-black dark:text-white">
            Meet the team
          </Text>
          <Text className="ml-10 mt-10 text-pretty text-left text-black dark:text-white">
            Simas Čeponis
          </Text>
          <Text className="ml-10 text-pretty text-left text-black dark:text-white">
            simas.ceponis@ktu.edu
          </Text>
          <Text className="ml-10 mt-10 text-pretty text-left text-black dark:text-white">
            Dovydas Šiurkus
          </Text>
          <Text className="ml-10 text-pretty text-left text-black dark:text-white">
            dovydas.siurkus@ktu.edu
          </Text>
          <Text className="ml-10 mt-10 text-pretty text-left text-black dark:text-white">
            Dominykas Valčiukas
          </Text>
          <Text className="ml-10 text-pretty text-left text-black dark:text-white">
            dominykas.valciukas@ktu.edu
          </Text>
          <Text className="ml-10 mt-10 text-pretty text-left text-black dark:text-white">
            Viltė Sakalauskaitė
          </Text>
          <Text className="ml-10 text-pretty text-left text-black dark:text-white">
            vilte.sakalauskaite@ktu.edu
          </Text>
          <Text className="ml-10 mt-10 text-pretty text-left text-black dark:text-white">
            Paulius Alešiūnas
          </Text>
          <Text className="ml-10 text-pretty text-left text-black dark:text-white">
            paulius.alesiunas@ktu.edu
          </Text>
          <Text className="ml-10 mt-10 text-pretty text-left text-black dark:text-white">
            Gerda Kaunietytė
          </Text>
          <Text className="mb-10 ml-10 text-pretty text-left text-black dark:text-white">
            gerda.kaunietyte@ktu.edu
          </Text>
        </View>

        <View className=" m-5 ml-14 rounded-3xl bg-emerald-100 dark:bg-emerald-800">
          <Text className="mr-10 mt-10 text-right text-3xl text-black dark:text-white">
            Contacts
          </Text>
          <Text className="ml-10 mr-10 mt-10 text-pretty text-left text-black dark:text-white">
            Have questions, feedback, or suggestions? We'd love to hear from
            you! You can reach us via email at komandospastas@ktu.lt.
          </Text>

          <Text className="m-10 text-pretty text-left text-black dark:text-white">
            Thank you for choosing EATHY to accompany you on your journey to a
            healthier, happier life.
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

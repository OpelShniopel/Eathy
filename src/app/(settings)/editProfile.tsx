import React, { useState } from "react";
import {
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Modal,
  Alert,
} from "react-native";
import { updateProfile } from "@/api/authService";
import { useAuth } from "@/providers/AuthProvider";
import { router } from "expo-router";

const EditProfile: React.FC = () => {
  const { profile, updateProfileData } = useAuth();

  const [username, setUsername] = useState<string>(profile?.username ?? "");
  const [fullname, setFullname] = useState<string>(profile?.full_name ?? "");
  const [avatarUrl, setAvatarUrl] = useState<string>(profile?.avatar_url ?? "");
  const [website, setWebsite] = useState<string>(profile?.website ?? "");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [newAvatarUrl, setNewAvatarUrl] = useState<string>("");

  const handleSaveProfile = async () => {
    try {
      const isProfileUpdated = await updateProfile(profile!.id, {
        username,
        full_name: fullname,
        avatar_url: avatarUrl,
        website,
      });

      if (isProfileUpdated) {
        await updateProfileData(profile!.id);
        Alert.alert("Success", "Profile saved successfully!");
        router.push("/(tabs)/userInfo");
      } else {
        Alert.alert("Error", "Failed to save profile. Please try again.");
      }
    } catch (error) {
      console.error("Error saving profile:", error);
      Alert.alert("Error", "An error occurred while saving the profile.");
    }
  };

  const handleChangeAvatar = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };
  const handleAvatarUrlChange = () => {
    setAvatarUrl(newAvatarUrl);
    handleModalClose();
  };

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#f3f4f6" }}>
      <TouchableOpacity onPress={handleChangeAvatar}>
        <Image
          source={{ uri: avatarUrl || "https://via.placeholder.com/150" }}
          style={{
            width: 150,
            height: 150,
            borderRadius: 75,
            marginBottom: 20,
            alignSelf: "center",
          }}
        />
      </TouchableOpacity>
      <TextInput
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#ccc",
          padding: 10,
          marginBottom: 20,
          fontSize: 18,
          color: "#000",
        }}
        placeholder="Username"
        placeholderTextColor="#6B7280"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#ccc",
          padding: 10,
          marginBottom: 20,
          fontSize: 18,
          color: "#000",
        }}
        placeholder="Full name"
        placeholderTextColor="#6B7280"
        value={fullname}
        onChangeText={setFullname}
      />
      <TextInput
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#ccc",
          padding: 10,
          marginBottom: 20,
          fontSize: 18,
          color: "#000",
        }}
        placeholder="Website"
        placeholderTextColor="#6B7280"
        value={website}
        onChangeText={setWebsite}
      />
      <Button title="Save" onPress={handleSaveProfile} />
      <Modal
        visible={showModal}
        animationType="slide"
        onRequestClose={handleModalClose}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <TextInput
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#ccc",
              padding: 10,
              marginBottom: 20,
              fontSize: 18,
              color: "#000",
            }}
            placeholder="Avatar URL"
            placeholderTextColor="#6B7280"
            value={newAvatarUrl}
            onChangeText={setNewAvatarUrl}
          />
          <Button title="Save Avatar URL" onPress={handleAvatarUrlChange} />
          <Button title="Cancel" onPress={handleModalClose} />
        </View>
      </Modal>
    </View>
  );
};

export default EditProfile;

import { Image, StyleSheet, View, ImageBackground, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { useThemeStore } from '@/src/stores/themeStore'
import Crown from '@/src/components/icons/Crown';
import Typography from '@/src/components/typography/Typography';
import Token from '@/src/components/icons/Token';
import LevelProgress from '@/src/components/atoms/LevelProgress';
import CardTabs from '@/src/components/molecules/pages/CardTabs';
import { BlurView } from 'expo-blur';
import ImageUpload from '@/src/components/atoms/ImageUpload';
import { useSimpleSelector } from '@/src/utils/stateUtils';

const Me = () => {
  const gold = useThemeStore(s => s.colors.warningDarker);
  const primary = useThemeStore(s => s.colors.primaryLighter);
  const white = useThemeStore(s => s.colors.white);
  const points = useSimpleSelector("progression.points");

  return (
    <ImageBackground
      // source={require("@/src/assets/images/me-bg2.png")}
      source={require("@/src/assets/images/me-bg.jpg")}
      style={styles.bg}
      resizeMode="cover"
    >
      <BlurView style={styles.blur} intensity={40} tint="default" />
      <View style={[styles.overlay, { backgroundColor: 'rgba(0,0,0,0.4)' }]} />
      {/* <View style={[styles.overlay, { backgroundColor: 'rgba(0,0,0,0.7)' }]} /> */}

      <View style={styles.pageContainer}>
        <View style={styles.meHeader}>
          <View style={[styles.row, { gap: 8, justifyContent: "flex-end" }]}>
            <Token color={primary} />
            <Typography variant='h5' color={white}>{points}</Typography>
          </View>
        </View>
        <View style={styles.profileDetails}>
          <View style={styles.profile}>
            <Crown color={gold} />
            <View style={{ position: 'relative' }}>
              <Image source={require("@/src/assets/images/profile.png")} style={[styles.profilepic, { borderColor: gold }]} />
              <ImageUpload variant='icon' />
            </View>
          </View>
          <Typography variant='h3' color={white}>SarrahK</Typography>
        </View>
        <LevelProgress
          level={10}
          currentXP={10000}
          requiredXP={40000} />

        <CardTabs />
      </View>
    </ImageBackground>
  )
}

export default Me

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
  blur: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 2,
  },
  pageContainer: {
    paddingVertical: 24,
    flexDirection: "column",
    alignItems: "center",
    gap: 16,
    zIndex: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%"
  },
  profileDetails: {
    flexDirection: "column",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 24,
  },
  profile: {
    flexDirection: "column",
    alignItems: "center",
  },
  profilepic: {
    borderWidth: 3,
    width: 128,
    height: 128,
    borderRadius: 24
  },
  meHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
  },
})
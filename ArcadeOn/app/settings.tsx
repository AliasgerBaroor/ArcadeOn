import { SectionList, StyleSheet, View } from "react-native";
import React, { ReactNode, useState } from "react";
import { useThemeStore } from "@/src/stores/themeStore";
import User from "@/src/components/icons/User";
import Typography from "@/src/components/typography/Typography";
import Chevron from "@/src/components/icons/Chevron";
import Email from "@/src/components/icons/settings/Email";
import PasswordReset from "@/src/components/icons/settings/PasswordReset";
import SocialAccounts from "@/src/components/icons/settings/SocialAccounts";
import TwoFA from "@/src/components/icons/settings/TwoFA";
import Subscriptions from "@/src/components/icons/settings/Subscriptions";
import ProfileVisibility from "@/src/components/icons/settings/ProfileVisibility";
import FriendList from "@/src/components/icons/settings/FriendList";
import RealName from "@/src/components/icons/settings/RealName";
import Button from "@/src/components/atoms/Button";
import BlockedUser from "@/src/components/icons/settings/BlockedUser";
import DataPrivacy from "@/src/components/icons/settings/DataPrivacy";
import LocationPermissions from "@/src/components/icons/settings/LocationPermissions";
import LoginHistory from "@/src/components/icons/settings/LoginHistory";
import ActiveSession from "@/src/components/icons/settings/ActiveSession";
import PushNotification from "@/src/components/icons/settings/PushNotification";
import NotificationSound from "@/src/components/icons/settings/NotificationSound";
import InGameReminder from "@/src/components/icons/settings/InGameReminder";
import ModeChange from "@/src/components/icons/settings/ModeChange";
import Language from "@/src/components/icons/settings/Language";
import FontSize from "@/src/components/icons/settings/FontSize";
import MinimizedAnimations from "@/src/components/icons/settings/MinimizedAnimations";
import HighContrast from "@/src/components/icons/settings/HighContrast";
import ColorBlindMode from "@/src/components/icons/settings/ColorBlindMode";
import ControlSensitivity from "@/src/components/icons/settings/ControlSensitivity";
import AudioPreferences  from "@/src/components/icons/settings/AudioPreference";
import Crosshair from "@/src/components/icons/settings/Crosshair";
import GamePlayAccesibility from "@/src/components/icons/settings/GamePlayAccesibility";
import AppTheme from "@/src/components/icons/settings/AppTheme";
import AvatarBadgeStickersBanner from "@/src/components/icons/settings/AvatarBadgeStickersBanner";
import AnimatedProfile from "@/src/components/icons/settings/AnimatedProfile";
import Friend from "@/src/components/icons/settings/Friend";
import FriendRequest from "@/src/components/icons/settings/FriendRequest";
import GlobalPrivacyControls from "@/src/components/icons/settings/GlobalPrivacyControls";
import FaqKnowledgeBase from "@/src/components/icons/settings/FaqKnowledgeBase";
import ContactSupport from "@/src/components/icons/settings/ContactSupport";
import BugReporting from "@/src/components/icons/settings/BugReporting";
import FeedbackForm from "@/src/components/icons/settings/FeedbackForm";
import FeatureRequests from "@/src/components/icons/settings/FeatureRequests";
import About from "@/src/components/icons/settings/About";
import Switch from "@/src/components/atoms/Switch";
import { SettingExtrasFn } from "@/src/types/setting";
import { useAuth } from "@/src/sbc/utils/auth";

const settingsSections = [
  {
    title: "Account Settings",
    data: [
      { key: "email", label: "Email address", icon: Email, disabled: false },
      {
        key: "password",
        label: "Password change/reset",
        icon: PasswordReset,
        disabled: false,
      },
      {
        key: "social",
        label: "Linked social accounts",
        icon: SocialAccounts,
        disabled: false,
      },
      {
        key: "2fa",
        label: "Two-factor authentication",
        icon: TwoFA,
        disabled: false,
      },
      {
        key: "subscription",
        label: "Subscription/membership",
        icon: Subscriptions,
        disabled: false,
      },
      {
        key: "active_sessions_setttings",
        label: "Active sessions settings",
        icon: ActiveSession,
        disabled: false,
      },
      {
        key: "login_history_device",
        label: "Login history and device",
        icon: LoginHistory,
        disabled: false,
      },
    ],
  },
  {
    title: "Privacy & Security",
    data: [
      {
        key: "profile_visibility",
        label: "Profile visibility",
        icon: ProfileVisibility,
        disabled: false,
      },
      {
        key: "friend_list_visibility",
        label: "Friend list Visibility",
        icon: FriendList,
        disabled: false,
      },
      {
        key: "realname",
        label: "Real name display setting",
        icon: RealName,
        disabled: false,
      },
      {
        key: "blocked_users_list",
        label: "Blocked users list",
        icon: BlockedUser,
        disabled: false,
      },
      {
        key: "data_privacy_controls",
        label: "Data privacy controls",
        icon: DataPrivacy,
        disabled: false,
      },
      {
        key: "location_sharing_permissions",
        label: "Location sharing permissions",
        icon: LocationPermissions,
        disabled: false,
      },
    ],
  },
  {
    title: "Notifications",
    data: [
      {
        key: "push_notification",
        label: "Push notification",
        icon: PushNotification,
        disabled: false,
      },
      { key: "email_SMS", label: "Email/SMS", icon: Email, disabled: true },
      {
        key: "notification_sound_vibration",
        label: "Notification sound/vibration",
        icon: NotificationSound,
        disabled: false,
      },
      {
        key: "in_game_event_teminders",
        label: "In-game event reminders",
        icon: InGameReminder,
        disabled: false,
      },
    ],
  },
  {
    title: "Appearance & Accessibility",
    data: [
      {
        key: "dark_mode",
        label: "Dark mode",
        icon: ModeChange,
        disabled: false,
      },
      {
        key: "language",
        label: "Language",
        icon: Language,
        disabled: false,
      },
      {
        key: "font_size",
        label: "Font size",
        icon: FontSize,
        disabled: false,
      },
      {
        key: "minimized_animations",
        label: "Minimized Animations",
        icon: MinimizedAnimations,
        disabled: false,
      },
      {
        key: "high_contrast_mode",
        label: "High contrast mode",
        icon: HighContrast,
        disabled: false,
      },
      {
        key: "colorblind_mode",
        label: "Colorblind mode",
        icon: ColorBlindMode,
        disabled: false,
      },
    ],
  },
  {
    title: "Gameplay & Controls",
    data: [
      {
        key: "control_sensitivity_setup",
        label: "Control sensitivity/setup",
        icon: ControlSensitivity,
        disabled: false,
      },
      {
        key: "audio_preferences",
        label: "Audio preferences",
        icon: AudioPreferences,
        disabled: false,
      },
      {
        key: "crosshair_HUD_customization",
        label: "Crosshair/HUD customization",
        icon: Crosshair,
        disabled: false,
      },
      {
        key: "gameplay_accessibility",
        label: "Gameplay accessibility",
        icon: GamePlayAccesibility,
        disabled: false,
      },
    ],
  },
  {
    title: "Customization",
    data: [
      {
        key: "app_themes",
        label: "App themes",
        icon: AppTheme,
        disabled: true,
      },
      {
        key: "avatar_stickers_badges_banner",
        label: "Avatar, stickers, badges, banner",
        icon: AvatarBadgeStickersBanner,
        disabled: false,
      },
      {
        key: "animated_profile",
        label: "Animated profile",
        icon: AnimatedProfile,
        disabled: true,
      },
    ],
  },
  {
    title: "Social & Community",
    data: [
      {
        key: "manage_friends",
        label: "Manage friends",
        icon: Friend,
        disabled: false,
      },
      {
        key: "friend_request_notification",
        label: "Friend request/notification",
        icon: FriendRequest,
        disabled: false,
      },
      {
        key: "global_privacy_controls",
        label: "Global Privacy controls",
        icon: GlobalPrivacyControls,
        disabled: false,
      },
    ],
  },
  {
    title: "Help & Support",
    data: [
      {
        key: "FAQs_knowledge_base",
        label: "FAQs/knowledge base",
        icon: FaqKnowledgeBase,
        disabled: false,
      },
      {
        key: "contact_support",
        label: "Contact support",
        icon: ContactSupport,
        disabled: false,
      },
      {
        key: "bug_reporting",
        label: "Bug reporting",
        icon: BugReporting,
        disabled: false,
      },
      {
        key: "feedback_form",
        label: "Feedback form",
        icon: FeedbackForm,
        disabled: false,
      },
      {
        key: "feature_requests",
        label: "Feature requests",
        icon: FeatureRequests,
        disabled: false,
      },
      {
        key: "about",
        label: "About",
        icon: About,
        disabled: false,
      },
    ],
  },
];

const Settings = () => {
  const pageBg = useThemeStore((s) => s.colors.bgCanvas);
  const cardBg = useThemeStore((s) => s.colors.white);
  const border = useThemeStore((s) => s.colors.borderDefault);
  const muted = useThemeStore((s) => s.colors.textMuted);
  const textDisabled = useThemeStore((s) => s.colors.textInverse);
  const body = useThemeStore((s) => s.colors.textBody);
  const link = useThemeStore((s) => s.colors.textLink);
  const logoutColor = useThemeStore((s) => s.colors.error);

  const [themeMode, setThemeMode] = useState(false);
  const [highContrastMode, setHighContrastMode] = useState(false);
  const [colorBlindMode, setColorBlindMode] = useState(false);
  const [minimizedAnimations, setMinimizedAnimations] = useState(false);

    const { logout } = useAuth();

const settingExtrasRecord: Record<string, SettingExtrasFn> = {
  // Account Settings
  email: (cardItem, textDisabled, muted) => (
    <Chevron color={cardItem.disabled ? textDisabled : muted} rotate={-90} style={{ paddingRight: 48 }} />
  ),
  password: (cardItem, textDisabled, muted) => (
    <Chevron color={cardItem.disabled ? textDisabled : muted} rotate={-90} style={{ paddingRight: 48 }} />
  ),
  social: (cardItem, textDisabled, muted) => (
    <Chevron color={cardItem.disabled ? textDisabled : muted} rotate={-90} style={{ paddingRight: 48 }} />
  ),
  "2fa": (cardItem, textDisabled, muted) => (
    <Chevron color={cardItem.disabled ? textDisabled : muted} rotate={-90} style={{ paddingRight: 48 }} />
  ),
  subscription: (cardItem, textDisabled, muted) => (
    <Chevron color={cardItem.disabled ? textDisabled : muted} rotate={-90} style={{ paddingRight: 48 }} />
  ),
  active_sessions_setttings: (cardItem, textDisabled, muted) => (
    <Chevron color={cardItem.disabled ? textDisabled : muted} rotate={-90} style={{ paddingRight: 48 }} />
  ),
  login_history_device: (cardItem, textDisabled, muted) => (
    <Chevron color={cardItem.disabled ? textDisabled : muted} rotate={-90} style={{ paddingRight: 48 }} />
  ),

  // Privacy & Security
  profile_visibility: (cardItem, textDisabled, muted) => (
    <Chevron color={cardItem.disabled ? textDisabled : muted} rotate={-90} style={{ paddingRight: 48 }} />
  ),
  friend_list_visibility: (cardItem, textDisabled, muted) => (
    <Chevron color={cardItem.disabled ? textDisabled : muted} rotate={-90} style={{ paddingRight: 48 }} />
  ),
  realname: (cardItem, textDisabled, muted) => (
    <Chevron color={cardItem.disabled ? textDisabled : muted} rotate={-90} style={{ paddingRight: 48 }} />
  ),
  blocked_users_list: (cardItem, textDisabled, muted) => (
    <Chevron color={cardItem.disabled ? textDisabled : muted} rotate={-90} style={{ paddingRight: 48 }} />
  ),
  data_privacy_controls: (cardItem, textDisabled, muted) => (
    <Chevron color={cardItem.disabled ? textDisabled : muted} rotate={-90} style={{ paddingRight: 48 }} />
  ),
  location_sharing_permissions: (cardItem, textDisabled, muted) => (
    <Chevron color={cardItem.disabled ? textDisabled : muted} rotate={-90} style={{ paddingRight: 48 }} />
  ),

  // Notifications
  push_notification: (cardItem, textDisabled, muted) => (
    <Chevron color={cardItem.disabled ? textDisabled : muted} rotate={-90} style={{ paddingRight: 48 }} />
  ),
  email_SMS: (cardItem, textDisabled, muted) => (
    <Chevron color={cardItem.disabled ? textDisabled : muted} rotate={-90} style={{ paddingRight: 48 }} />
  ),
  notification_sound_vibration: (cardItem, textDisabled, muted) => (
    <Chevron color={cardItem.disabled ? textDisabled : muted} rotate={-90} style={{ paddingRight: 48 }} />
  ),
  in_game_event_teminders: (cardItem, textDisabled, muted) => (
    <Chevron color={cardItem.disabled ? textDisabled : muted} rotate={-90} style={{ paddingRight: 48 }} />
  ),

  // Appearance & Accessibility
  dark_mode: (cardItem, textDisabled, muted) => (
    <Switch
      value={themeMode}
      onValueChange={setThemeMode}
      variant="primary"
      size="small"
      style={{ paddingRight: 8 }}
    />
  ),
  language: (cardItem, textDisabled, muted) => (
    <Chevron color={cardItem.disabled ? textDisabled : muted} rotate={-90} style={{ paddingRight: 48 }} />
  ),
  font_size: (cardItem, textDisabled, muted) => (
    <Chevron color={cardItem.disabled ? textDisabled : muted} rotate={-90} style={{ paddingRight: 48 }} />
  ),
  minimized_animations: (cardItem, textDisabled, muted) => (
    <Switch
      value={minimizedAnimations}
      onValueChange={setMinimizedAnimations}
      variant="primary"
      size="small"
      style={{ paddingRight: 8 }}
    />
  ),
  high_contrast_mode: (cardItem, textDisabled, muted) => (
    <Switch
      value={highContrastMode}
      onValueChange={setHighContrastMode}
      variant="primary"
      size="small"
      style={{ paddingRight: 8 }}
    />
  ),
  colorblind_mode: (cardItem, textDisabled, muted) => (
    <Switch
      value={colorBlindMode}
      onValueChange={setColorBlindMode}
      variant="primary"
      size="small"
      style={{ paddingRight: 8 }}
    />
  ),

  // Gameplay & Controls
  control_sensitivity_setup: (cardItem, textDisabled, muted) => (
    <Chevron color={cardItem.disabled ? textDisabled : muted} rotate={-90} style={{ paddingRight: 48 }} />
  ),
  audio_preferences: (cardItem, textDisabled, muted) => (
    <Chevron color={cardItem.disabled ? textDisabled : muted} rotate={-90} style={{ paddingRight: 48 }} />
  ),
  crosshair_HUD_customization: (cardItem, textDisabled, muted) => (
    <Chevron color={cardItem.disabled ? textDisabled : muted} rotate={-90} style={{ paddingRight: 48 }} />
  ),
  gameplay_accessibility: (cardItem, textDisabled, muted) => (
    <Chevron color={cardItem.disabled ? textDisabled : muted} rotate={-90} style={{ paddingRight: 48 }} />
  ),

  // Customization
  app_themes: (cardItem, textDisabled, muted) => (
    <Chevron color={cardItem.disabled ? textDisabled : muted} rotate={-90} style={{ paddingRight: 48 }} />
  ),
  avatar_stickers_badges_banner: (cardItem, textDisabled, muted) => (
    <Chevron color={cardItem.disabled ? textDisabled : muted} rotate={-90} style={{ paddingRight: 48 }} />
  ),
  animated_profile: (cardItem, textDisabled, muted) => (
    <Chevron color={cardItem.disabled ? textDisabled : muted} rotate={-90} style={{ paddingRight: 48 }} />
  ),

  // Social & Community
  manage_friends: (cardItem, textDisabled, muted) => (
    <Chevron color={cardItem.disabled ? textDisabled : muted} rotate={-90} style={{ paddingRight: 48 }} />
  ),
  friend_request_notification: (cardItem, textDisabled, muted) => (
    <Chevron color={cardItem.disabled ? textDisabled : muted} rotate={-90} style={{ paddingRight: 48 }} />
  ),
  global_privacy_controls: (cardItem, textDisabled, muted) => (
    <Chevron color={cardItem.disabled ? textDisabled : muted} rotate={-90} style={{ paddingRight: 48 }} />
  ),

  // Help & Support
  FAQs_knowledge_base: (cardItem, textDisabled, muted) => (
    <Chevron color={cardItem.disabled ? textDisabled : muted} rotate={-90} style={{ paddingRight: 48 }} />
  ),
  contact_support: (cardItem, textDisabled, muted) => (
    <Chevron color={cardItem.disabled ? textDisabled : muted} rotate={-90} style={{ paddingRight: 48 }} />
  ),
  bug_reporting: (cardItem, textDisabled, muted) => (
    <Chevron color={cardItem.disabled ? textDisabled : muted} rotate={-90} style={{ paddingRight: 48 }} />
  ),
  feedback_form: (cardItem, textDisabled, muted) => (
    <Chevron color={cardItem.disabled ? textDisabled : muted} rotate={-90} style={{ paddingRight: 48 }} />
  ),
  feature_requests: (cardItem, textDisabled, muted) => (
    <Chevron color={cardItem.disabled ? textDisabled : muted} rotate={-90} style={{ paddingRight: 48 }} />
  ),
  about: (cardItem, textDisabled, muted) => (
    <Chevron color={cardItem.disabled ? textDisabled : muted} rotate={-90} style={{ paddingRight: 48 }} />
  ),
};

  return (
    <View style={[styles.pageContainer, { backgroundColor: pageBg }]}>
      <SectionList
        sections={settingsSections}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.key}
        renderSectionHeader={({ section }) => (
          <View style={styles.settingGroup}>
            <Typography variant="h5" color={body}>
              {section.title}
            </Typography>
          </View>
        )}
        renderItem={({ item, section }) =>
          section.data[0].key === item.key ? (
            <View
              style={[
                styles.card,
                {
                  backgroundColor: cardBg,
                  borderColor: border,
                  marginBottom: 24,
                },
              ]}
            >
              {section.data.map((cardItem) => (
                <View style={styles.row} key={cardItem.key}>
                  {cardItem.disabled ? (
                    <cardItem.icon style={{ opacity: 0.4 }} />
                  ) : (
                    <cardItem.icon />
                  )}
                  <View style={[styles.betweenRow, { borderColor: border }]}>
                    <Typography
                      variant="b2"
                      color={cardItem.disabled ? muted : undefined}
                    >
                      {cardItem.label}
                    </Typography>
                    {settingExtrasRecord[cardItem.key]
                      ? settingExtrasRecord[cardItem.key](
                          cardItem,
                          textDisabled,
                          muted
                        )
                      : null}
                  </View>
                </View>
              ))}
            </View>
          ) : null
        }
        SectionSeparatorComponent={() => <View style={{ height: 8 }} />}
      />
      <View style={styles.betweenRowSimple}>
        <Button
          onPress={logout}
          customButton={
            <Typography variant="h5" color={logoutColor}>
              Logout
            </Typography>
          }
        />
        <Button
          onPress={() => console.log("log add account")}
          customButton={
            <Typography variant="h5" color={link}>
              Add Account
            </Typography>
          }
        />
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  pageContainer: {
    padding: 24,
    flexDirection: "column",
    gap: 16,
    flex: 1,
  },
  card: {
    flexDirection: "column",
    paddingVertical: 8,
    paddingLeft: 12,
    borderRadius: 12,
    borderWidth: 1,
  },
  row: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    paddingVertical: 8,
  },
  betweenRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    borderBottomWidth: 1,
    paddingBottom: 4,
  },
  betweenRowSimple: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  settingGroup: {
    flexDirection: "column",
    gap: 4,
  },
});
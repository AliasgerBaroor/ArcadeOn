import { StyleSheet, View } from "react-native";
import React from "react";
import Button from "../../atoms/Button";
import { useThemeStore } from "@/src/stores/themeStore";
import Typography from "../../typography/Typography";
import RewardLevelSlider from "./RewardLevelSlider";
import { useAppNavigation } from "@/src/hooks/useAppNavigation";
import One from "../../icons/numbers/One";
import { useSimpleSelector } from "@/src/utils/stateUtils";

const GamePass = ({ ...props }) => {
  const { goTo } = useAppNavigation();
  const bg = useThemeStore((s) => s.colors.bgCard);
  const border = useThemeStore((s) => s.colors.borderDefault);
  const text = useThemeStore((s) => s.colors.textBody);
  // const passItems = useSimpleSelector("pass.pass")

  const passItems = [
    {
      image: require("@/src/assets/images/pass/pass-1.png"),
      reward: "Shield",
      isClaimed: false,
    },
    {
      image: require("@/src/assets/images/pass/pass-2.png"),
      reward: "20 Tokens",
      isClaimed: false,
    },
    {
      image: require("@/src/assets/images/pass/pass-3.png"),
      reward: "Flaming Bot",
      isClaimed: false,
    },
    {
      image: require("@/src/assets/images/pass/pass-4.png"),
      reward: "2x XP Card",
      isClaimed: false,
    },
    {
      image: require("@/src/assets/images/pass/pass-5.png"),
      reward: "Arena Preview Ticket",
      isClaimed: false,
    },
  ];
  
  return (
    <View
      style={[styles.pass, { backgroundColor: bg, borderColor: border }]}
      {...props}
    >
      <View style={[styles.header, { borderColor: border }]}>
        <View style={styles.row}>
          <View style={styles.levelPointsRow}>
            <View style={styles.levelRow}>
              <Typography variant="b1">Lvl</Typography>
              <One />
            </View>
            <Typography variant="b5" color={text}>
              0/450
            </Typography>
          </View>
          <Button
            variant="warning"
            width="content"
            typographyVariant="b6"
            onPress={() => goTo("payment")}
          >
            Buy Pass
          </Button>
        </View>
      </View>
      <RewardLevelSlider pass={passItems} />
    </View>
  );
};

export default GamePass;

const styles = StyleSheet.create({
  pass: {
    flexDirection: "column",
    gap: 12,
    width: "100%",
    paddingVertical: 16,
    borderWidth: 1,
    borderRadius: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 16,
    borderBottomWidth: 1,
  },
  levelRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  levelPointsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  divider: {
    height: 2,
    flex: 1,
    marginHorizontal: 8,
    borderRadius: 8,
  },
});

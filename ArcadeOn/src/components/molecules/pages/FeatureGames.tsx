import { Animated, Dimensions, Image, Pressable, StyleSheet, View } from "react-native";
import React, { useRef } from "react";
import { useThemeStore } from "@/src/stores/themeStore";
import { FeaturedGameProps } from "@/src/types/molecules";
import Button from "../../atoms/Button";
import Typography from "../../typography/Typography";


function FeatureGames({ games, onPressGame }: FeaturedGameProps) {
  const textBody = useThemeStore((s) => s.colors.textBody);
  const badgeColor = useThemeStore((s) => s.colors.primaryLighter);
    const scrollX = useRef(new Animated.Value(0)).current;

  const { width: CARD_WIDTH } = Dimensions.get("screen"); 
  const { height: BANNER_HEIGHT } = Dimensions.get("screen"); 
  const CARD_SPACING = 16;
  return (
    <Animated.FlatList
      data={games}
      horizontal
      pagingEnabled
      keyExtractor={(item) => item.id}
      decelerationRate="fast"
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: false }
      )}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => onPressGame(item)}
          style={[
            styles.featureColumn,
            { width: CARD_WIDTH - 32, marginHorizontal: CARD_SPACING },
          ]}
        >
          <View style={styles.coverWrapper}>
            <Image
              source={
                typeof item.cover === "string"
                  ? { uri: item.cover }
                  : item.cover
              }
              style={[styles.coverArt, { height: BANNER_HEIGHT / 4 }]}
              resizeMode="cover"
            />

            <View style={[styles.badge, { backgroundColor: badgeColor }]}>
              <Typography variant="b5">
                Ends on 02/11/24
              </Typography>
            </View>
          </View>

          <View style={styles.betweenRow}>
            <View style={styles.row}>
              <Image
                source={
                  typeof item.logo === "string" ? { uri: item.logo } : item.logo
                }
                style={styles.logo}
                resizeMode="cover"
              />
              <View style={styles.column}>
                <Typography variant="h5">{item.title}</Typography>
                <Typography variant="b3" color={textBody}>
                  {item.category}
                </Typography>
              </View>
            </View>
            <Button onPress={() => onPressGame(item)}>{item.cta}</Button>
          </View>
        </Pressable>
      )}
    />
  );
}

export default FeatureGames;

const styles = StyleSheet.create({
  featureColumn: {
    flexDirection: "column",
    gap: 4,
  },
  betweenRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    gap: 16,
  },
  column: {
    flexDirection: "column",
  },
  coverArt: {
    width: "100%",
    borderRadius: 12,
    marginBottom: 6,
    backgroundColor: "#dedce7",
  },
  logo: {
    width: 56,
    height: 56,
    borderRadius: 12,
    backgroundColor: "#dedce7",
  },
  coverWrapper: {
    position: "relative",
    width: "100%",
  },

  badge: {
    position: "absolute",
    top: 0,
    left: 0,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderTopStartRadius: 6,
    borderBottomEndRadius: 6,
    zIndex: 2,
  },
});

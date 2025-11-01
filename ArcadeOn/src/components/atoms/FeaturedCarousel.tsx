import React, { useRef } from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    Pressable,
    Animated
} from "react-native";
import { useThemeStore } from "@/src/stores/themeStore";
import Typography from "../typography/Typography";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
const CARD_WIDTH = Math.round(SCREEN_WIDTH * 0.7);
const CARD_SPACING = 15;
const CARD_HEIGHT = Math.round(SCREEN_HEIGHT * 0.32);

export type FeaturedGame = {
    id: string;
    title: string;
    cover: string;
    badge?: string;
    cta?: string;
    subtitle?: string;
    description?: string;
};

type Props = {
    games: FeaturedGame[];
    onPressGame: (game: FeaturedGame) => void;
};

export default function FeaturedCarousel({ games, onPressGame }: Props) {
    const bgCanvas = useThemeStore(s => s.colors.bgCanvas);
    const bgCard = useThemeStore(s => s.colors.bgCard);
    const primary = useThemeStore(s => s.colors.primary);
    const infoDarker = useThemeStore(s => s.colors.primaryDarker);
    const accent = useThemeStore(s => s.colors.accentDarker);
    const textHigh = useThemeStore(s => s.colors.textHigh);
    const textBody = useThemeStore(s => s.colors.textBody);
    const bgPop = useThemeStore(s => s.colors.primaryLightest);

    const scrollX = useRef(new Animated.Value(0)).current;

    return (
        <View style={[styles.bg, { backgroundColor: bgCanvas }]}>
            <View style={styles.cardTypo}>
                <Typography variant="h5" style={[styles.sectionTitle]}>
                    Featured Games
                </Typography>
            </View>
            <Animated.FlatList
                data={games}
                horizontal
                pagingEnabled
                keyExtractor={item => item.id}
                snapToInterval={CARD_WIDTH + CARD_SPACING * 2}
                decelerationRate="fast"
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: (SCREEN_WIDTH - CARD_WIDTH - 65) / 2,
                }}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: false }
                )}
                renderItem={({ item }) => (
                    <View
                        style={[
                            styles.card,
                            {
                                backgroundColor: bgCard,
                                width: CARD_WIDTH,
                                marginHorizontal: CARD_SPACING,
                                minHeight: CARD_HEIGHT,
                                maxHeight: CARD_HEIGHT
                            }
                        ]}
                    >
                        {item.badge && (
                            <View style={[styles.badge, { backgroundColor: bgPop }]}>
                                <Typography variant="b4" color={infoDarker}>
                                    {item.badge.toUpperCase()}
                                </Typography>
                            </View>
                        )}

                        {/* Make cover smaller for compactness */}
                        <Image
                            source={
                                typeof item.cover === "string"
                                    ? { uri: item.cover }
                                    : item.cover
                            }
                            style={styles.coverArt}
                            resizeMode="cover"
                        />

                        <View style={{ alignItems: "center", marginTop: 10 }}>
                            <Typography variant="h4"
                                style={[
                                    styles.title,
                                    { color: textHigh }
                                ]}
                                numberOfLines={2}
                            >
                                {item.title}
                            </Typography>
                            {item.subtitle && (
                                <Typography variant="b2" style={[styles.subtitle, { color: accent }]}>
                                    {item.subtitle}
                                </Typography>
                            )}
                            {item.description && (
                                <Typography variant="b3"
                                    style={[
                                        styles.description,
                                        { color: textBody }
                                    ]}
                                    numberOfLines={2}
                                >
                                    {item.description}
                                </Typography>
                            )}

                            {item.cta && (
                                <Pressable
                                    style={[styles.ctaBtn, { backgroundColor: primary }]}
                                    onPress={() => onPressGame(item)}
                                >
                                    <Text style={styles.ctaText}>{item.cta}</Text>
                                </Pressable>
                            )}
                        </View>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 8,
    },
    sectionTitle: {
        marginBottom: 16
    },
    card: {
        borderRadius: 24,
        alignItems: "center",
        paddingTop: 12,
        paddingHorizontal: 16,
        marginTop: 2,
        shadowColor: "#223",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.12,
        shadowRadius: 16,
        elevation: 8,
    },
    badge: {
        alignSelf: "flex-start",
        borderRadius: 12,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginBottom: 8
    },
    coverArt: {
        width: 56,
        height: 56,
        borderRadius: 12,
        marginBottom: 6,
        backgroundColor: "#dedce7"
    },
    title: {
        textAlign: "center",
        marginBottom: 4,
    },
    subtitle: {
        marginBottom: 4
    },
    description: {
        textAlign: "center",
        marginBottom: 8,
        marginHorizontal: 4
    },
    ctaBtn: {
        borderRadius: 12,
        paddingHorizontal: 12,
        paddingVertical: 4,
        alignSelf: "center",
        marginTop: 4,
        shadowColor: "#00000004",
        elevation: 1,
    },
    ctaText: {
        color: "#fff",
        fontWeight: "700",
        fontSize: 12,
        letterSpacing: 0.1
    },
    cardTypo: {
        justifyContent: "flex-start",
        width: "100%",
    },
});
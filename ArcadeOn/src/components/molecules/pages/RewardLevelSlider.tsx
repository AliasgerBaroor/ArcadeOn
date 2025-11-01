import { StyleSheet, View, Pressable, Image, FlatList, NativeScrollEvent, NativeSyntheticEvent, Dimensions } from 'react-native'
import React, { useRef, useState } from 'react'
import Typography from '../../typography/Typography'
import { useThemeStore } from '@/src/stores/themeStore'
import Play from '@/src/components/icons/Play'
import { PassItem, RewardLevelSliderProps } from '@/src/types/molecules'
import Check from '../../icons/Check'

const { width } = Dimensions.get('window');

const RewardLevelSlider: React.FC<RewardLevelSliderProps> = ({
    pass = [],
}) => {
    const bg = useThemeStore(s => s.colors.bgElevated)
    const border = useThemeStore(s => s.colors.borderDefault)
    const text = useThemeStore(s => s.colors.textBody)
    const [currentLevel, setCurrentLevel] = useState(1);
    
    const minLevel = 1;
    const maxLevel = pass.length;
    const flatListRef = useRef<FlatList<PassItem>>(null);
    const ITEM_WIDTH = width - 50;

    const handlePrev = () => {
        if (currentLevel > minLevel) {
            setCurrentLevel(currentLevel - 1);
            flatListRef.current?.scrollToIndex({ index: currentLevel - minLevel - 1, animated: true });
        }
    };
    const handleNext = () => {
        if (currentLevel < maxLevel) {
            setCurrentLevel(currentLevel + 1);
            flatListRef.current?.scrollToIndex({ index: currentLevel - minLevel + 1, animated: true });
        }
    };
    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const page = Math.round(event.nativeEvent.contentOffset.x / ITEM_WIDTH);
        setCurrentLevel(page + minLevel);
    };

    const renderItem = ({ item, index }: { item: PassItem; index: number }) => (
        <View style={[styles.container, { width: ITEM_WIDTH }]}>
            <View style={styles.rewardPreview}>
                <Image
                    source={item.image}
                    style={styles.levelImage}
                    resizeMode="contain"
                />
                <Typography variant='h4'>{item.reward ?? `Level ${minLevel + index}`}</Typography>
            </View>
            <View style={[styles.row, {paddingBottom: 4}]}>
                {/* Left */}
                <View style={[styles.triggerWithLevel, { paddingRight: 12 }]}>
                    <Pressable
                        onPress={handlePrev}
                        style={[
                            styles.iconBox,
                            {
                                backgroundColor: bg,
                                borderColor: border,
                                opacity: currentLevel <= minLevel ? 0.3 : 1,
                            },
                        ]}
                    >
                        <Play style={{ transform: [{ rotate: '180deg' }] }} size={16} />
                    </Pressable>
                    <Typography variant="b1" color={text}>
                        {currentLevel - 1 >= minLevel ? currentLevel - 1 : '-'}
                    </Typography>
                </View>

                <View style={[styles.divider, { backgroundColor: border }]} />

                {/* Current */}
                <View
                    style={[
                        styles.currentLevel,
                        { backgroundColor: bg, borderColor: border, paddingVertical: item.isClaimed ? 10 : 8, paddingHorizontal: item.isClaimed ? 10 : 16, },
                    ]}
                >
                    {item.isClaimed ? <Check size={20} /> : <Typography variant="b1">{currentLevel}</Typography>}
                </View>

                <View style={[styles.divider, { backgroundColor: border }]} />

                {/* Right */}
                <View style={[styles.triggerWithLevel, { paddingLeft: 12 }]}>
                    <Typography variant="b1" color={text}>
                        {currentLevel + 1 <= maxLevel ? currentLevel + 1 : '-'}
                    </Typography>

                    <Pressable
                        onPress={handleNext}
                        style={[
                            styles.iconBox,
                            {
                                backgroundColor: bg,
                                borderColor: border,
                                opacity: currentLevel >= maxLevel ? 0.3 : 1,
                            },
                        ]}
                    >
                        <Play size={16} />
                    </Pressable>
                </View>
            </View>
        </View>
    );
    return (
        <FlatList
            ref={flatListRef}
            horizontal
            pagingEnabled
            data={pass}
            renderItem={renderItem}
            keyExtractor={(_, idx) => `pass-${idx}`}
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            scrollEventThrottle={16}
            initialScrollIndex={currentLevel - minLevel}
            getItemLayout={(_, index) => ({ length: ITEM_WIDTH, offset: ITEM_WIDTH * index, index })}
            extraData={currentLevel}
            style={{ width: ITEM_WIDTH }}
        />
    )
}

export default RewardLevelSlider

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    levelImage: {
        width: 220,
        height: 220,
        borderRadius: 12,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    iconBox: {
        padding: 8,
        borderWidth: 1,
        borderRadius: 8,
    },
    currentLevel: {
        borderWidth: 1,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4,
    },
    divider: {
        height: 2,
        flex: 1,
        marginHorizontal: 8,
        borderRadius: 8,
    },
    triggerWithLevel: {
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center',
    },
    rewardPreview: {
        flexDirection: "column",
        gap: 8,
        marginTop: 8,
        marginBottom: 16,
        alignItems: "center",
    }
})

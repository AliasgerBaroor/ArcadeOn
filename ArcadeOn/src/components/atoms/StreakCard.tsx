import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { useThemeStore } from '@/src/stores/themeStore'
import Button from './Button';
import StreakCalendar from '../molecules/pages/StreakCalendar';
import Typography from '../typography/Typography';
import Token from '../icons/Token';
import { useSimpleSelector } from '@/src/utils/stateUtils';

// const todayIndex = 3;
const todayIndex = new Date().getDay();

const StreakCard = () => {
    const points = useSimpleSelector("progression.points");

    const bg = useThemeStore(s => s.colors.bgCard);
    const primary = useThemeStore(s => s.colors.primary);
    const border = useThemeStore(s => s.colors.borderDefault);
    const secondary = useThemeStore(s => s.colors.textBody);

    const [streakDone, setStreakDone] = useState(Array(7).fill(false));
    // const [streakDone, setStreakDone] = useState([true, false, true, false, false, false, false]);

    const markTodayStreak = () => {
        const updated = [...streakDone];
        updated[todayIndex] = true;
        setStreakDone(updated);
    };

    return (
        <View style={[styles.streak, { backgroundColor: bg, borderColor: border }]}>
            <StreakCalendar streakDone={streakDone} todayIndex={todayIndex} />
            <View style={[styles.divider, { backgroundColor: border }]}></View>
            <View style={styles.streakMessage}>
                <View style={[styles.row, { gap: 4 }]}>
                    <Typography variant='b2' color={secondary}>Total points: </Typography>
                    <View style={styles.row}>
                        <Token color={primary} />
                        <Typography variant='h5'>{points}</Typography>
                    </View>
                </View>
                <Button
                    variant="primary"
                    width="content"
                    onPress={markTodayStreak}
                    disabled={streakDone[todayIndex]}
                    typographyVariant='b6'
                >
                    Streak
                </Button>
            </View>
        </View>
    )
}

export default StreakCard

const styles = StyleSheet.create({
    streak: {
        padding: 16,
        flexDirection: "column",
        gap: 12,
        borderWidth: 1,
        borderRadius: 12,
        alignItems: 'center'
    },
    divider: {
        height: 1,
        width: "100%",
        borderRadius: 12,
    },
    streakMessage: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
    },
    row: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 8
    },
})
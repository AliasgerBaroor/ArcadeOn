import { StyleSheet, View } from 'react-native';
import React from 'react';
import Typography from '../typography/Typography';
import { useThemeStore } from '@/src/stores/themeStore';
import { LevelProgressProps } from '@/src/types/atoms';

const LevelProgress = ({ level, currentXP, requiredXP }: LevelProgressProps) => {
    const primary = useThemeStore(s => s.colors.primary);
    const primaryDark = useThemeStore(s => s.colors.primaryLightest);
    const secondary = useThemeStore(s => s.colors.textMuted);
    const white = useThemeStore(s => s.colors.white);

    const percent = requiredXP > 0 ? Math.min(currentXP / requiredXP, 1) : 0;

    return (
        <View style={styles.column}>
            <View style={styles.row}>
                <Typography variant='h5' color={white}>lvl {level}</Typography>
                <View style={[styles.progressBar, { backgroundColor: primaryDark }]}>
                    <View
                        style={[
                            styles.progressFill,
                            {
                                backgroundColor: primary,
                                width: `${percent * 100}%`,
                            },
                        ]}
                    />
                </View>
                <Typography variant='h5' color={white}>lvl {level + 1}</Typography>
            </View>
            <View style={[styles.row, { gap: 4 }]}>
                <Typography variant='b2' color={secondary}>Total points: </Typography>
                <Typography variant='b2' color={white}>{currentXP},</Typography>
                <Typography variant='b2' color={secondary}>Required points: </Typography>
                <Typography variant='b2' color={white}>{requiredXP}</Typography>
            </View>
        </View>
    );
};

export default LevelProgress;

const styles = StyleSheet.create({
    column: {
        flexDirection: 'column',
        gap: 8,
        width: "100%",
        paddingHorizontal: 24,
    },
    row: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
        justifyContent: "center"
    },
    progressBar: {
        flex: 1,
        height: 4,
        borderRadius: 12,
        overflow: 'hidden',
        marginHorizontal: 8,
        backgroundColor: '#333',
    },
    progressFill: {
        height: '100%',
        borderRadius: 12,
    },
});
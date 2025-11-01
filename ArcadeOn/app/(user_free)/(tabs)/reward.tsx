import StreakCard from '@/src/components/atoms/StreakCard'
import GamePass from '@/src/components/molecules/pages/GamePass'
import { ScrollView, StyleSheet, View } from 'react-native'

const Reward = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.pageContainer}>
                <StreakCard />
                <GamePass />
            </View>
        </ScrollView>
    )
}

export default Reward

const styles = StyleSheet.create({
    pageContainer: {
        paddingHorizontal: 24,
        paddingVertical: 16,
        flexDirection: "column",
        gap: 16,
    },
})
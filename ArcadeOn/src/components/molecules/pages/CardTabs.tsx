import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { useThemeStore } from '@/src/stores/themeStore';
import CardTabTrigger from '../../atoms/CardTabTrigger';
import Trophy from '../../icons/Trophy';
import Friends from '../../icons/Friends';
import Stats from '../../icons/Stats';
import Clock from '../../icons/Clock';
const CardTabs = () => {
    const bg = useThemeStore(s => s.colors.bgCard);
const [tabActive, setTabActive] = useState(0);
    return (
        <View style={[styles.cards, { backgroundColor: bg }]}>
            <View style={styles.row}>
                <CardTabTrigger icon={Stats} active={tabActive === 0 ? true : false} onPress={()=> setTabActive(0)}>Stats</CardTabTrigger>
                <CardTabTrigger icon={Trophy} active={tabActive === 1 ? true : false} onPress={()=> setTabActive(1)}>Achievement</CardTabTrigger>
                <CardTabTrigger icon={Friends} active={tabActive === 2 ? true : false} onPress={()=> setTabActive(2)}>Friends</CardTabTrigger>
                <CardTabTrigger icon={Clock} active={tabActive === 3 ? true : false} onPress={()=> setTabActive(3)}>History</CardTabTrigger>
            </View>
        </View>
    )
}

export default CardTabs

const styles = StyleSheet.create({
    cards: {
        borderTopLeftRadius: 42,
        borderTopRightRadius: 42,
        height: "100%",
        width: "100%",
        padding: 16,
        paddingTop: 24,
    },
    row: {
        flexDirection: "row",
        gap: 12,
        justifyContent: 'space-between',
    }
})
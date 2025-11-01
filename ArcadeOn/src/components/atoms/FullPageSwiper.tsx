import { Image, StyleSheet, View } from 'react-native'
import React, { ReactNode } from 'react'
import Typography from '../typography/Typography'
import { FullPageSwiperProps, validPages } from '@/src/types/atoms'
import CtaIconButton from './CtaIconButton'
import DotsGroup from './DotsGroup'
import AuthButton from './AuthButtons'

const FullPageSwiper = ({ bgColor, white, textColor, page, style, ...props }: FullPageSwiperProps) => {

    const CurrentPageText: Record<validPages, ReactNode> = {
        "game_1": <View style={styles.column}>
            <Typography variant='landing' color={white}>Simple</Typography>
            <Typography variant='landing_sub' color={textColor}>Games</Typography>
        </View>,
        "game_2": <View style={styles.column}>
            <Typography variant='landing2' color={white}>Play</Typography>
            <Typography variant='landing2_sub' color={textColor}>with friends</Typography>
        </View>,
        "game_3": <View style={styles.column}>
            <Typography variant='landing3' color={white}>Many</Typography>
            <Typography variant='landing3_sub' color={textColor}>Modes</Typography>
        </View>,
        "login": <View style={styles.column}>
            <Typography variant='landing4' color={white}>Select</Typography>
            <Typography variant='landing4_sub' color={textColor}>a login method</Typography>
        </View>,
    }

    const isLogin = page === "login";

    return (
        <View style={[
            isLogin ? styles.loginContainer : styles.pageContainer,
            { backgroundColor: bgColor }
        ]} {...props}>
            {isLogin && (
                <Image
                    source={require("@/src/assets/images/login-icon.png")}
                    style={styles.dragonImage}
                    resizeMode="contain"
                />
            )}
            <View style={{gap: 60}}>
            {CurrentPageText[page]}
            {!isLogin ? (
                <View style={styles.ctaBody}>
                    <DotsGroup length={3} active={1} />
                    <CtaIconButton bg={textColor} />
                </View>
            ) : (
                <View style={styles.authButtons}>
                    <AuthButton variant='google' />
                    <AuthButton variant='arcade_on' />
                    <AuthButton variant='apple' />
                </View>
            )}
            </View>
        </View>
    )
}
{/* <Button title="game_1" onPress={() => setVariant("game_1")} />
<Button title="game_2" onPress={() => setVariant("game_2")} />
<Button title="game_3" onPress={() => setVariant("game_3")} />
<Button title="login" onPress={() => setVariant("login")} /> */}

export default FullPageSwiper

const styles = StyleSheet.create({
    column: {
        flexDirection: "column",
        alignItems: "center"
    },
    authButtons: {
        flexDirection: "column",
        gap: 12
    },
    ctaBody: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    pageContainer: {
        flex: 1,
        paddingVertical: 16,
        paddingHorizontal: 32,
        justifyContent: "space-between",
        paddingBottom: 64,
    },
    loginContainer: {
        flex: 1,
        paddingVertical: 16,
        paddingHorizontal: 32,
        justifyContent: "center",
        // gap: 72,
    },
    dragonImage: {
        width: 300,
        height: 280,
        marginBottom: 12,
        alignSelf: "center"
    },

})
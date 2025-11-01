import { StyleSheet, View } from "react-native";
import Typography from "@/src/components/typography/Typography";
import { useThemeStore } from "@/src/stores/themeStore";

export default function Games() {

    return (
        <View>
            <Typography variant="b1" style={{ marginBottom: 16 }}>home</Typography>
        </View>
    );
}   

const styles = StyleSheet.create({});

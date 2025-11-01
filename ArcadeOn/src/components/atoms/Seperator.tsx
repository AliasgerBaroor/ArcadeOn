import { useThemeStore } from "@/src/stores/themeStore";
import { SeperatorProps } from "@/src/types/atoms";
import { hexToRgba } from "@/src/utils/colorUtils";
import { StyleSheet, View } from "react-native";

export default function Seperator({ size = 2, style, ...rest }: SeperatorProps) {
    const textMuted = useThemeStore(s => s.colors.textMuted);
    return (
        <View
            style={[
                {
                    width: size,
                    height: '100%',
                    borderRadius: size * 2,
                    backgroundColor: hexToRgba(textMuted, 0.4),
                    marginHorizontal: 8
                },
                style
            ]}
            {...rest}
        />
    );
}

const styles = StyleSheet.create({
    seperator: {
        height: "100%",
    }
})
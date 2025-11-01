import { StyleSheet, View } from 'react-native';
import React, { useRef, useState } from 'react';
import User from '../../icons/User';
import Menu from '../../icons/Menu';
import Typography from '../../typography/Typography';
import Bell from '../../icons/Bell';
import Seperator from '../../atoms/Seperator';
import { useThemeStore } from '@/src/stores/themeStore';
import Search from '../../icons/Search';
import IconButton from '../../atoms/IconButton';
import Dropdown from '../../atoms/Dropdown';
import Setting from '../../icons/Setting';
import Logout from '../../icons/Logout';
import { MyProfileDropdown } from '@/src/types/dropdowns';
import { useAuth } from '@/src/sbc/utils/auth';
import { useAppNavigation } from '@/src/hooks/useAppNavigation';

export default function Header() {
    const textMuted = useThemeStore((s) => s.colors.textMuted);
    const accent = useThemeStore((s) => s.colors.primary);
    const { logout } = useAuth();
    const { goTo } = useAppNavigation();

    const userIconRef = useRef<View | null>(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownPos, setDropdownPos] = useState<{ top: number; left: number } | null>(null);

    const userOptions = [
        { label: "Profile", icon: User },
        { label: "Settings", icon: Setting },
        { label: "sep-Logout", icon: Logout },
    ];

    const handleUserPress = () => {
        if (!dropdownOpen && userIconRef.current) {
            userIconRef.current.measureInWindow((x, y, width, height) => {
                setDropdownPos({ top: y + height + 32, left: x });
                setDropdownOpen(true);
            });
        } else {
            setDropdownOpen(false);
        }
    };

    const handleSelect = (opt: MyProfileDropdown) => {
        if(opt?.label === "sep-Logout") logout();
        if (opt?.label === "Settings") goTo("settings");
        setDropdownOpen(false);
    };

    return (
        <View style={[styles.header, styles.row]}>
            <View style={styles.gapRow}>
                <View ref={userIconRef}>
                    <IconButton icon={User} size={24} color={textMuted} onPress={handleUserPress} />
                </View>
                <IconButton icon={Menu} size={24} color={accent} />
                <Typography variant='h5'>Arcade On</Typography>
            </View>
            <View style={[styles.gapRow, { gap: 8 }]}>
                <IconButton icon={Search} size={20} color={textMuted} />
                <Seperator />
                <IconButton icon={Bell} size={20} color={textMuted} />
            </View>
            <Dropdown
                open={dropdownOpen}
                options={userOptions}
                onSelect={handleSelect}
                onClose={() => setDropdownOpen(false)}
                top={dropdownPos?.top}
                left={dropdownPos?.left}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        padding: 12,
        paddingTop: 24,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    gapRow: {
        flexDirection: "row",
        height: "100%",
        gap: 16,
        alignItems: "center"
    }
});
// Usage: const { value, setOn, setOff, set, toggle } = useToggle('app')

import { useContext } from "react";
import { ToggleContext } from "./ToggleProvider";

export const useToggle = (name: string) => {
    const context = useContext(ToggleContext);
    if (!context) throw new Error('useToggle must be used inside ToggleProvider');

    const value = !!context.toggles[name];
    return {
        value,
        setOn: () => context.setOn(name),
        setOff: () => context.setOff(name),
        set: (v: boolean) => context.set(name, v),
        toggle: () => context.toggle(name),
    };
};

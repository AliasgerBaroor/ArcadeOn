import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { useThemeStore } from '@/src/stores/themeStore';
import Input from '@/src/components/atoms/Input';
import User from '@/src/components/icons/User';
import { useFormValidator } from '@/src/hooks/form/useFormValidator';
import { PaymentCardTypes } from '@/src/types/form';
import FormField from '@/src/hooks/form/FormField';
import Three from '@/src/components/icons/numbers/Three';
import BackButton from '@/src/components/atoms/BackButton';
import Visa from '@/src/components/icons/cards/Visa';
import Master from '@/src/components/icons/cards/Master';
import { CardRule } from '@/src/types/atoms';
import Button from '@/src/components/atoms/Button';

const cardRules: CardRule[] = [
    {
        rule: (val: string) => /^4/.test(val),
        icon: Visa,
    },
    {
        rule: (val: string) => /^5[1-5]/.test(val),
        icon: Master,
    },
];


const Payment = () => {
    const bg = useThemeStore(s => s.colors.bgCanvas);
    const bgCard = useThemeStore(s => s.colors.white);
    const border = useThemeStore(s => s.colors.borderDefault);
    const primary = useThemeStore(s => s.colors.primary);

    const { values, setField, errors,
        resetForm, validateForm, isValid,
    } = useFormValidator<PaymentCardTypes>(
        {
            name: "",
            cvv: "",
            expiry: "",
            card: "",
        },
        {
            name: [{ type: 'required', message: "Name required !" }],
            cvv: [
                { type: 'required', message: "Cvv required !" },
                { type: 'maxLength', length: 3, message: "Cvv must be 3 digit required !" },
            ],
            expiry: [{ type: 'required', message: "Expiry required !" }],
            card: [
                { type: 'required', message: "Card Number required !" },
                { type: 'maxLength', length: 16, message: "Card Number must be 16 digit required !" }
            ],
        },
        { validateOnChange: true, debounce: 300 }
    );

    const onPay = () => {
        const result = validateForm();

        if(result.success) {
            console.log("payment success");
            
        }
    }

    return (
        <ScrollView style={{ flex: 1, backgroundColor: bg }}
            contentContainerStyle={{ flexGrow: 1 }} >
            <View style={[pageStyles.pageContainer, { backgroundColor: bg }]}>
                <BackButton />

                <View style={[pageStyles.card, { backgroundColor: bgCard, borderColor: border }]}>
                    <FormField name="name" form={{ values, setField, errors }}>
                        {({ value, onChange, error }) => (
                            <Input
                                type="text"
                                label="Full Name"
                                value={value}
                                onChange={onChange}
                                placeholder="Enter your full name"
                                autoComplete="name"
                                inputMode="text"
                                maxLength={50}
                                leftColor={value.length >= 8 ? primary : undefined}
                                leftIcon={User}
                                error={error}
                            />
                        )}
                    </FormField>
                    <View style={pageStyles.row}>
                        <FormField name="cvv" form={{ values, setField, errors }}>
                            {({ value, onChange, error }) => (
                                <Input
                                    type="number"
                                    label="cvv"
                                    value={value}
                                    onChange={onChange}
                                    placeholder="Enter cvv"
                                    inputMode="numeric"
                                    maxLength={3}
                                    leftIcon={Three}
                                    leftColor={value.length === 3 ? primary : undefined}
                                    error={error}
                                    customStyles={{ flex: 1 }}
                                />
                            )}
                        </FormField>
                        <FormField name="expiry" form={{ values, setField, errors }}>
                            {({ value, onChange, error }) => (
                                <Input
                                    type="date"
                                    label="Expiry Date"
                                    value={value}
                                    onChange={onChange}
                                    placeholder="Enter expiry"
                                    inputMode="text"
                                    leftColor={value ? primary : undefined}
                                    error={error}
                                    customStyles={{ flex: 1 }}
                                />
                            )}
                        </FormField>
                    </View>
                    <FormField name="card" form={{ values, setField, errors }}>
                        {({ value, onChange, error }) => (
                            <Input
                                type="card"
                                label="Card Number"
                                value={value}
                                onChange={onChange}
                                placeholder="Enter card number"
                                inputMode="numeric"
                                maxLength={16}
                                rightColor={value.length === 16 ? primary : undefined}
                                cardRules={cardRules}
                                error={error}
                            />
                        )}
                    </FormField>

                    <Button
                    variant="primary"
                    width="content"
                    onPress={onPay}
                    disabled={!isValid}
                    typographyVariant='b6'
                >
                        Add & Pay
                    </Button>
                </View>
            </View>
        </ScrollView>
    );
};

export default Payment;

const pageStyles = StyleSheet.create({
    pageContainer: {
        padding: 24,
        flexDirection: "column",
        gap: 16,
        flex: 1,
    },
    card: {
        padding: 16,
        borderRadius: 12,
        borderWidth: 1,
        flexDirection: "column",
        gap: 16,
    },
    row: {
        flexDirection: "row",
        gap: 12,
    },
});
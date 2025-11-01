type SettingCardItem = { disabled: boolean; [key: string]: any };
export type SettingExtrasFn = (
  cardItem: SettingCardItem,
  textDisabled: string,
  muted: string
) => React.ReactNode;

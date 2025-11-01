import { Dimensions, PixelRatio } from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export const BASE_WIDTH = 375;
export const BASE_HEIGHT = 812;

const scale = SCREEN_WIDTH / BASE_WIDTH;
const vScale = SCREEN_HEIGHT / BASE_HEIGHT;

const round = (size: number) => PixelRatio.roundToNearestPixel(size);

export function scaleSize(size: number) {
  return round(size * scale);
}

export function verticalScale(size: number) {
  return round(size * vScale);
}

export function moderateScale(size: number, factor = 0.5) {
  const newSize = size * scale;
  return round(size + (newSize - size) * factor);
}

export function moderateVerticalScale(size: number, factor = 0.5) {
  const newSize = size * vScale;
  return round(size + (newSize - size) * factor);
}

export function fontScale(size: number, factor = 0.5) {
  const fs = PixelRatio.getFontScale();
  const scaled = size * scale;
  const mod = size + (scaled - size) * factor;
  return round(mod / fs);
}

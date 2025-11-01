import React, { useEffect, useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { useThemeStore } from '@/src/stores/themeStore';
import * as NavigationBar from 'expo-navigation-bar';
import FullPageSwiper from '@/src/components/atoms/FullPageSwiper';
import { validPages } from '@/src/types/atoms';

const Login = () => {
  const [variant, setVariant] = useState<validPages>("login");

  const white = useThemeStore(s => s.colors.white);
  const game_1_text = "#fbd258";
  // const game_1_text = "#ffd065";
  const game_2_text = "#62fef5";
  const game_3_text = "#e9fe5c";
  // const game_3_text = "#e9fd6d";
  const login_text = "#e2fecf";
  const game_1_bg = "#eb7c94";
  const game_2_bg = "#7b86eb";
  const game_3_bg = "#a6eb7b";

  const bgColor =
    variant === "game_1" ? game_1_bg :
      variant === "game_2" ? game_2_bg :
        variant === "game_3" ? game_3_bg :
          variant === "login" ? game_3_bg :
            game_3_bg;

  const textColor =
    variant === "game_1" ? game_1_text :
      variant === "game_2" ? game_2_text :
        variant === "game_3" ? game_3_text :
          variant === "login" ? login_text :
            game_3_text;

  useEffect(() => {
    NavigationBar.setBackgroundColorAsync(bgColor);
    NavigationBar.setButtonStyleAsync("dark");
  }, [bgColor]);

  return (
    <>
      <StatusBar backgroundColor={bgColor} style="dark" />
      <FullPageSwiper page={variant} white={white} bgColor={bgColor} textColor={textColor} />
    </>
  );
};

export default Login;
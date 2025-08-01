import colors from "@/utils/colors";
import { router } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  Easing,
  FadeIn,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming
} from "react-native-reanimated";

export default function SplashScreen() {
  const rotationClap = useSharedValue(0);
  const traslateYClap = useSharedValue(0);

  useEffect(() => {
    rotationClap.value = withRepeat(
      withSequence(
        withTiming(-20, { duration: 600, easing: Easing.inOut(Easing.ease) }),
        withTiming(0, { duration: 600, easing: Easing.inOut(Easing.ease) })
      )
    );

    traslateYClap.value = withRepeat(
      withSequence(
        withTiming(-15, { duration: 600, easing: Easing.inOut(Easing.ease) }),
        withTiming(0, { duration: 600, easing: Easing.inOut(Easing.ease) })
      )
    );

    setTimeout(() => {
      router.replace("/(tabs)/Movies");
    }, 2000);
  }, []);

  const animatedStyleClap = useAnimatedStyle(() => ({
    transform: [
      { rotate: `${rotationClap.value}deg` },
      { translateY: traslateYClap.value }
    ]
  }));

  return (
    <View style={styles.container}>
      <View>
        <Animated.View style={[styles.topBox, animatedStyleClap]}>
          <View style={styles.insideBox} />
          <View style={styles.insideBox} />
        </Animated.View>

        <View style={styles.underBox} />
      </View>
      <Animated.Text
        entering={FadeIn.duration(400).easing(Easing.inOut(Easing.ease))}
        style={styles.text}
      >
        Movies Explorer
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.gray200
  },
  underBox: {
    width: 70,
    height: 40,
    borderWidth: 5,
    borderColor: colors.purpleLight,
    borderRadius: 3
  },
  topBox: {
    width: 70,
    height: 20,
    borderWidth: 5,
    borderColor: colors.purpleLight,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 1,
    borderRadius: 3,
    position: "relative"
  },
  insideBox: {
    height: 19,
    width: 6,
    backgroundColor: colors.purpleLight,
    transform: [{ rotate: "-30deg" }],
    position: "relative",
    top: -4
  },
  text: {
    color: colors.purpleLight,
    fontSize: 19,
    fontWeight: "bold",
    marginTop: 10
  }
});

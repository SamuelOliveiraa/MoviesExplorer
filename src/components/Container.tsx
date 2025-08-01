import colors from "@/utils/colors";
import { View } from "@gluestack-ui/themed";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
  children: React.ReactNode;
};

export default function Container({ children }: Props) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.gray200,
        paddingHorizontal: 18
      }}
    >
      <View flex={1} backgroundColor="$gray200">
        {children}
      </View>
    </SafeAreaView>
  );
}

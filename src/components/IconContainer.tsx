import colors from "@/utils/colors";
import { View } from "@gluestack-ui/themed";
import { BookmarkIcon } from "phosphor-react-native";

export default function IconContainer() {
  return (
    <View
      w="$12"
      h="$12"
      bgColor="$gray300"
      alignItems="center"
      justifyContent="center"
    >
      <BookmarkIcon color={colors.purpleBase} size={24} />
    </View>
  );
}

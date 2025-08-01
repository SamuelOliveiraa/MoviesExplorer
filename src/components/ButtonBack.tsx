import colors from "@/utils/colors";
import { Button, Text } from "@gluestack-ui/themed";
import { router, useRouter } from "expo-router";
import { ArrowLeftIcon } from "phosphor-react-native";

export default function ButtonBack() {

  return (
    <Button
      px="$3"
      gap="$3"
      w="$full"
      bgColor="$gray300"
      alignItems="center"
      rounded="$md"
      onPress={() => router.back()}
    >
      <ArrowLeftIcon color={colors.white} />
      <Text color="$white">Voltar</Text>
    </Button>
  );
}

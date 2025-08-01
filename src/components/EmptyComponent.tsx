import colors from "@/utils/colors";
import { Center, Heading, Text } from "@gluestack-ui/themed";
import { ListBulletsIcon } from "phosphor-react-native";

type Props = {
  text: string;
  title?: string;
};

export default function EmptyComponent({ text, title }: Props) {
  return (
    <Center mt="$6" gap="$1">
      <ListBulletsIcon color={colors.gray400} size={50} />
      {title && (
        <Heading color="$gray400" fontSize="$lg" textAlign="center">
          {title}
        </Heading>
      )}

      <Text color="$gray400" textAlign="center">
        {text}
      </Text>
    </Center>
  );
}

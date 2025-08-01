import colors from "@/utils/colors";
import { Heading, Text, View } from "@gluestack-ui/themed";
import { IconProps } from "phosphor-react-native";
import React from "react";

type Props = {
  title: string;
  description: string;
  Icon: React.ComponentType<IconProps>;
};

export default function HeaderPages({ title, description, Icon }: Props) {
  return (
    <View>
      <Icon size={46} color={colors.purpleBase} />
      <Heading color="$white" fontWeight="$bold" fontSize="$2xl" my="$2">
        {title}
      </Heading>
      <Text color="$gray700" fontWeight="$light">
        {description}
      </Text>
    </View>
  );
}

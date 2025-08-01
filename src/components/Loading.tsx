import { Center, Spinner } from "@gluestack-ui/themed";
import React from "react";

export default function Loading() {
  return (
    <Center backgroundColor="$gray200" flex={1}>
      <Spinner size={"large"} color="$purpleLight" />
    </Center>
  );
}

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { View } from "@aws-amplify/ui-react";
export default function Rectangle3(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="598px"
      height="48px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Rectangle3")}
      {...rest}
    >
      <View
        width="598px"
        height="48px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        border="4px SOLID rgba(58,0,137,1)"
        boxShadow="0px 4px 4px rgba(0.6313725709915161, 0.501960813999176, 0.9137254953384399, 1)"
        borderRadius="10px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(32,16,99,1)"
        {...getOverrideProps(overrides, "Rectangle 3")}
      ></View>
    </View>
  );
}

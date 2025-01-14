/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function Intro(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1280px"
      height="832px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Intro")}
      {...rest}
    >
      <View
        width="1280px"
        height="832px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Intro38473303")}
      >
        <Image
          width="1280px"
          height="860px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="-14px"
          left="0px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "image 7")}
        ></Image>
        <Text
          fontFamily="Irish Grover"
          fontSize="100px"
          fontWeight="400"
          color="rgba(161,128,233,1)"
          lineHeight="120.8984375px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="986px"
          height="120px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="313px"
          left="324px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="new lore drop"
          {...getOverrideProps(overrides, "new lore drop")}
        ></Text>
        <Text
          fontFamily="Irish Grover"
          fontSize="30px"
          fontWeight="400"
          color="rgba(161,128,233,1)"
          lineHeight="36.26953125px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="1724px"
          height="120px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="433px"
          left="406px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="create new stories with a fun twist"
          {...getOverrideProps(
            overrides,
            "create new stories with a fun twist"
          )}
        ></Text>
      </View>
    </View>
  );
}

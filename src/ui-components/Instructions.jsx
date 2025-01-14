/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function Instructions(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1280px"
      height="832px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Instructions")}
      {...rest}
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
        width="695px"
        height="120px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="73px"
        left="361px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="instructions"
        {...getOverrideProps(overrides, "instructions")}
      ></Text>
      <Icon
        width="1237px"
        height="567px"
        viewBox={{ minX: 0, minY: 0, width: 1237, height: 567 }}
        paths={[
          {
            d: "M0 20C0 8.95431 8.95431 0 20 0L1217 0C1228.05 0 1237 8.95431 1237 20L1237 547C1237 558.046 1228.05 567 1217 567L20 567C8.95434 567 0 558.046 0 547L0 20Z",
            fill: "rgba(10,0,51,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="202px"
        left="20px"
        {...getOverrideProps(overrides, "Rectangle 6")}
      ></Icon>
      <Text
        fontFamily="Irish Grover"
        fontSize="35px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="42.314453125px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="1209px"
        height="471px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="231px"
        left="20px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children='Create a new game or join existing game&#xA;Flip all three cards (Setting, Character, and Plot Twist) to reveal your story prompts&#xA;Once all cards are revealed, click "Start Recording" to begin your story&#xA;You have 60 seconds to tell a creative story incorporating all three elements&#xA;When finished, click "Stop Recording" to end your story and click submit&#xA;Wait for AI to grade both of your stories and feel free to sketch story&#xA;Once both stories are submitted, AI will score your story and will declare winner. &#xA;Head to game media to view each others’ recordings and AI’s feedback '
        {...getOverrideProps(
          overrides,
          'Create a new game or join existing game Flip all three cards (Setting, Character, and Plot Twist) to reveal your story prompts Once all cards are revealed, click "Start Recording" to begin your story You have 60 seconds to tell a creative story incorporating all three elements When finished, click "Stop Recording" to end your story and click submit Wait for AI to grade both of your stories and feel free to sketch story Once both stories are submitted, AI will score your story and will declare winner. Head to game media to view each others\u2019 recordings and AI\u2019s feedback'
        )}
      ></Text>
    </View>
  );
}

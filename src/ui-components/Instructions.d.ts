/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InstructionsOverridesProps = {
    Instructions?: PrimitiveOverrideProps<ViewProps>;
    "image 7"?: PrimitiveOverrideProps<ImageProps>;
    instructions?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 6"?: PrimitiveOverrideProps<IconProps>;
    "Create a new game or join existing game Flip all three cards (Setting, Character, and Plot Twist) to reveal your story prompts Once all cards are revealed, click \"Start Recording\" to begin your story You have 60 seconds to tell a creative story incorporating all three elements When finished, click \"Stop Recording\" to end your story and click submit Wait for AI to grade both of your stories and feel free to sketch story Once both stories are submitted, AI will score your story and will declare winner. Head to game media to view each others\u2019 recordings and AI\u2019s feedback"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type InstructionsProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: InstructionsOverridesProps | undefined | null;
}>;
export default function Instructions(props: InstructionsProps): React.ReactElement;

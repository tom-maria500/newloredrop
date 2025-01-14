/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type GameSelectionOverridesProps = {
    GameSelection?: PrimitiveOverrideProps<ViewProps>;
    "image 7"?: PrimitiveOverrideProps<ImageProps>;
    games?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 5"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 12"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 3"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 7"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 8"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 9"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 10"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 11"?: PrimitiveOverrideProps<ViewProps>;
    Button?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 6"?: PrimitiveOverrideProps<IconProps>;
    "new game"?: PrimitiveOverrideProps<TextProps>;
    "game 1"?: PrimitiveOverrideProps<TextProps>;
    "game 2"?: PrimitiveOverrideProps<TextProps>;
    "game 3"?: PrimitiveOverrideProps<TextProps>;
    "game 4"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type GameSelectionProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: GameSelectionOverridesProps | undefined | null;
}>;
export default function GameSelection(props: GameSelectionProps): React.ReactElement;

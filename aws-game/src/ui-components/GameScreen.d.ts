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
export declare type GameScreenOverridesProps = {
    GameScreen?: PrimitiveOverrideProps<ViewProps>;
    "image 7"?: PrimitiveOverrideProps<ImageProps>;
    "game ID"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 12"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 63849210"?: PrimitiveOverrideProps<IconProps>;
    "new game"?: PrimitiveOverrideProps<TextProps>;
    setting3849224?: PrimitiveOverrideProps<TextProps>;
    setting3849249?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 14"?: PrimitiveOverrideProps<IconProps>;
    character?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 15"?: PrimitiveOverrideProps<IconProps>;
    "plot twist"?: PrimitiveOverrideProps<TextProps>;
    Button3849230?: PrimitiveOverrideProps<FlexProps>;
    Button3849240?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 63849246"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type GameScreenProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: GameScreenOverridesProps | undefined | null;
}>;
export default function GameScreen(props: GameScreenProps): React.ReactElement;

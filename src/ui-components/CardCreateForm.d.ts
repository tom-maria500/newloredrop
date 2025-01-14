/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CardCreateFormInputValues = {
    content?: string;
    category?: string;
    gameID?: string;
    flipped?: boolean;
    createdAt?: string;
    updatedAt?: string;
};
export declare type CardCreateFormValidationValues = {
    content?: ValidationFunction<string>;
    category?: ValidationFunction<string>;
    gameID?: ValidationFunction<string>;
    flipped?: ValidationFunction<boolean>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CardCreateFormOverridesProps = {
    CardCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    content?: PrimitiveOverrideProps<TextFieldProps>;
    category?: PrimitiveOverrideProps<TextFieldProps>;
    gameID?: PrimitiveOverrideProps<TextFieldProps>;
    flipped?: PrimitiveOverrideProps<SwitchFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CardCreateFormProps = React.PropsWithChildren<{
    overrides?: CardCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CardCreateFormInputValues) => CardCreateFormInputValues;
    onSuccess?: (fields: CardCreateFormInputValues) => void;
    onError?: (fields: CardCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CardCreateFormInputValues) => CardCreateFormInputValues;
    onValidate?: CardCreateFormValidationValues;
} & React.CSSProperties>;
export default function CardCreateForm(props: CardCreateFormProps): React.ReactElement;

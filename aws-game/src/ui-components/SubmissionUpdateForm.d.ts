/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type SubmissionUpdateFormInputValues = {
    gameID?: string;
    playerID?: string;
    audioKey?: string;
    transcript?: string;
    createdAt?: string;
    updatedAt?: string;
};
export declare type SubmissionUpdateFormValidationValues = {
    gameID?: ValidationFunction<string>;
    playerID?: ValidationFunction<string>;
    audioKey?: ValidationFunction<string>;
    transcript?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SubmissionUpdateFormOverridesProps = {
    SubmissionUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    gameID?: PrimitiveOverrideProps<TextFieldProps>;
    playerID?: PrimitiveOverrideProps<TextFieldProps>;
    audioKey?: PrimitiveOverrideProps<TextFieldProps>;
    transcript?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SubmissionUpdateFormProps = React.PropsWithChildren<{
    overrides?: SubmissionUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    submission?: any;
    onSubmit?: (fields: SubmissionUpdateFormInputValues) => SubmissionUpdateFormInputValues;
    onSuccess?: (fields: SubmissionUpdateFormInputValues) => void;
    onError?: (fields: SubmissionUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SubmissionUpdateFormInputValues) => SubmissionUpdateFormInputValues;
    onValidate?: SubmissionUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SubmissionUpdateForm(props: SubmissionUpdateFormProps): React.ReactElement;

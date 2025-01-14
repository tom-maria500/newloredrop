/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createSubmission } from "../graphql/mutations";
const client = generateClient();
export default function SubmissionCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    gameID: "",
    playerID: "",
    audioKey: "",
    transcript: "",
    createdAt: "",
    updatedAt: "",
  };
  const [gameID, setGameID] = React.useState(initialValues.gameID);
  const [playerID, setPlayerID] = React.useState(initialValues.playerID);
  const [audioKey, setAudioKey] = React.useState(initialValues.audioKey);
  const [transcript, setTranscript] = React.useState(initialValues.transcript);
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [updatedAt, setUpdatedAt] = React.useState(initialValues.updatedAt);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setGameID(initialValues.gameID);
    setPlayerID(initialValues.playerID);
    setAudioKey(initialValues.audioKey);
    setTranscript(initialValues.transcript);
    setCreatedAt(initialValues.createdAt);
    setUpdatedAt(initialValues.updatedAt);
    setErrors({});
  };
  const validations = {
    gameID: [{ type: "Required" }],
    playerID: [{ type: "Required" }],
    audioKey: [{ type: "Required" }],
    transcript: [],
    createdAt: [],
    updatedAt: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          gameID,
          playerID,
          audioKey,
          transcript,
          createdAt,
          updatedAt,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createSubmission.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "SubmissionCreateForm")}
      {...rest}
    >
      <TextField
        label="Game id"
        isRequired={true}
        isReadOnly={false}
        value={gameID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              gameID: value,
              playerID,
              audioKey,
              transcript,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.gameID ?? value;
          }
          if (errors.gameID?.hasError) {
            runValidationTasks("gameID", value);
          }
          setGameID(value);
        }}
        onBlur={() => runValidationTasks("gameID", gameID)}
        errorMessage={errors.gameID?.errorMessage}
        hasError={errors.gameID?.hasError}
        {...getOverrideProps(overrides, "gameID")}
      ></TextField>
      <TextField
        label="Player id"
        isRequired={true}
        isReadOnly={false}
        value={playerID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              gameID,
              playerID: value,
              audioKey,
              transcript,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.playerID ?? value;
          }
          if (errors.playerID?.hasError) {
            runValidationTasks("playerID", value);
          }
          setPlayerID(value);
        }}
        onBlur={() => runValidationTasks("playerID", playerID)}
        errorMessage={errors.playerID?.errorMessage}
        hasError={errors.playerID?.hasError}
        {...getOverrideProps(overrides, "playerID")}
      ></TextField>
      <TextField
        label="Audio key"
        isRequired={true}
        isReadOnly={false}
        value={audioKey}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              gameID,
              playerID,
              audioKey: value,
              transcript,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.audioKey ?? value;
          }
          if (errors.audioKey?.hasError) {
            runValidationTasks("audioKey", value);
          }
          setAudioKey(value);
        }}
        onBlur={() => runValidationTasks("audioKey", audioKey)}
        errorMessage={errors.audioKey?.errorMessage}
        hasError={errors.audioKey?.hasError}
        {...getOverrideProps(overrides, "audioKey")}
      ></TextField>
      <TextField
        label="Transcript"
        isRequired={false}
        isReadOnly={false}
        value={transcript}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              gameID,
              playerID,
              audioKey,
              transcript: value,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.transcript ?? value;
          }
          if (errors.transcript?.hasError) {
            runValidationTasks("transcript", value);
          }
          setTranscript(value);
        }}
        onBlur={() => runValidationTasks("transcript", transcript)}
        errorMessage={errors.transcript?.errorMessage}
        hasError={errors.transcript?.hasError}
        {...getOverrideProps(overrides, "transcript")}
      ></TextField>
      <TextField
        label="Created at"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={createdAt && convertToLocal(new Date(createdAt))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              gameID,
              playerID,
              audioKey,
              transcript,
              createdAt: value,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.createdAt ?? value;
          }
          if (errors.createdAt?.hasError) {
            runValidationTasks("createdAt", value);
          }
          setCreatedAt(value);
        }}
        onBlur={() => runValidationTasks("createdAt", createdAt)}
        errorMessage={errors.createdAt?.errorMessage}
        hasError={errors.createdAt?.hasError}
        {...getOverrideProps(overrides, "createdAt")}
      ></TextField>
      <TextField
        label="Updated at"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={updatedAt && convertToLocal(new Date(updatedAt))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              gameID,
              playerID,
              audioKey,
              transcript,
              createdAt,
              updatedAt: value,
            };
            const result = onChange(modelFields);
            value = result?.updatedAt ?? value;
          }
          if (errors.updatedAt?.hasError) {
            runValidationTasks("updatedAt", value);
          }
          setUpdatedAt(value);
        }}
        onBlur={() => runValidationTasks("updatedAt", updatedAt)}
        errorMessage={errors.updatedAt?.errorMessage}
        hasError={errors.updatedAt?.hasError}
        {...getOverrideProps(overrides, "updatedAt")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

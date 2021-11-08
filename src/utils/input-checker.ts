import { position_dictionary, navigation_dictionary } from "./position-dictionary";

interface InputCheckerReturnValue {
  unrecognize_position: boolean;
  landing_location: string[];
}

export const inputChecker = <T extends String>(input: T): InputCheckerReturnValue => {
  const removeSpace = input.replace(/ /g, "").toUpperCase();
  const convertedToArray = [...removeSpace];
  const unrecognize_position = convertedToArray.some((input) => {
    return input !== position_dictionary[input];
  });
  return {
    unrecognize_position: unrecognize_position ? true : false,
    landing_location: convertedToArray,
  };
};

export const navigationValuesChecker = (input: string): boolean => {
  const removeSpace = input.replace(/ /g, "").toUpperCase();
  const res = navigation_dictionary[removeSpace];
  return res ? true : false;
};

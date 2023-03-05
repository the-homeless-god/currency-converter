import { EnvironmentKeys } from './types';

const onKeyError = (key: EnvironmentKeys) => {
  throw new Error(`${key} not defined`);
};

const withKeyError =
  (key: EnvironmentKeys) => (callback: (key: EnvironmentKeys) => string) => {
    try {
      return callback(key);
    } catch {
      onKeyError(key);
    }
  };

const getEnvironmentKey = (key: EnvironmentKeys): string | never => {
  const value = process.env[key];
  console.log(process.env);
  if (!value) {
    return onKeyError(key);
  }

  return value;
};

export const API_KEY = withKeyError(EnvironmentKeys.API_KEY)(getEnvironmentKey);

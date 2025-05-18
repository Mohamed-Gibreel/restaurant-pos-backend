import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';

export const convertToInstance = <T>(
  dtoClass: new () => T,
  body: Record<string, any>,
): T | undefined => {
  var instance = plainToInstance(dtoClass, body);
  var errors = validateSync(instance as object, {
    skipMissingProperties: false,
    whitelist: true,
  });

  var formattedErrors = errors.flatMap((error) =>
    Object.values(error.constraints || {}),
  );

  if (errors.length != 0) return undefined;
  return instance;
};

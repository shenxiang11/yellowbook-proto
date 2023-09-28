/* eslint-disable */

export const protobufPackage = "";

export enum ResourcePurpose {
  UNKNOWN = 0,
  UserAvatar = 1,
  UNRECOGNIZED = -1,
}

export function resourcePurposeFromJSON(object: any): ResourcePurpose {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return ResourcePurpose.UNKNOWN;
    case 1:
    case "UserAvatar":
      return ResourcePurpose.UserAvatar;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResourcePurpose.UNRECOGNIZED;
  }
}

export function resourcePurposeToJSON(object: ResourcePurpose): string {
  switch (object) {
    case ResourcePurpose.UNKNOWN:
      return "UNKNOWN";
    case ResourcePurpose.UserAvatar:
      return "UserAvatar";
    case ResourcePurpose.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

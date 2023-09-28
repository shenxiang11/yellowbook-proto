/* eslint-disable */
import _m0 from "protobufjs/minimal";

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

/** web */
export interface UploadRequest {
  purpose: ResourcePurpose;
}

function createBaseUploadRequest(): UploadRequest {
  return { purpose: 0 };
}

export const UploadRequest = {
  encode(message: UploadRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.purpose !== 0) {
      writer.uint32(8).int32(message.purpose);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UploadRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUploadRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.purpose = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UploadRequest {
    return { purpose: isSet(object.purpose) ? resourcePurposeFromJSON(object.purpose) : 0 };
  },

  toJSON(message: UploadRequest): unknown {
    const obj: any = {};
    if (message.purpose !== 0) {
      obj.purpose = resourcePurposeToJSON(message.purpose);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UploadRequest>, I>>(base?: I): UploadRequest {
    return UploadRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UploadRequest>, I>>(object: I): UploadRequest {
    const message = createBaseUploadRequest();
    message.purpose = object.purpose ?? 0;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

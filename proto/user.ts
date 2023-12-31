/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export enum Gender {
  GenderUnknown = 0,
  Female = 1,
  Male = 2,
  UNRECOGNIZED = -1,
}

export function genderFromJSON(object: any): Gender {
  switch (object) {
    case 0:
    case "GenderUnknown":
      return Gender.GenderUnknown;
    case 1:
    case "Female":
      return Gender.Female;
    case 2:
    case "Male":
      return Gender.Male;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Gender.UNRECOGNIZED;
  }
}

export function genderToJSON(object: Gender): string {
  switch (object) {
    case Gender.GenderUnknown:
      return "GenderUnknown";
    case Gender.Female:
      return "Female";
    case Gender.Male:
      return "Male";
    case Gender.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** web */
export interface ProfileResponse {
  userId: number;
  email: string;
  phone: string;
  nickname: string;
  birthday: string;
  introduction: string;
  avatar: string;
  gender: Gender;
}

export interface SignUpRequest {
  email: string;
  password: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface EditRequest {
  nickname: string;
  birthday: string;
  introduction: string;
  avatar: string;
  gender: Gender;
}

export interface SendLoginSMSCodeRequest {
  phone: string;
}

export interface LoginSMSRequest {
  phone: string;
  code: string;
}

export interface User {
  id: number;
  email: string;
  phone: string;
  nickname: string;
  birthday: string;
  introduction: string;
  createTime: string;
  updateTime: string;
  avatar: string;
  gender: Gender;
}

export interface GetUserListResponse {
  total: number;
  list: User[];
}

export interface GetUserListRequest {
  id: number;
  nickname: string;
  email: string;
  phone: string;
  introduction: string;
  createTimeStart: number;
  createTimeEnd: number;
  updateTimeStart: number;
  updateTimeEnd: number;
  page: number;
  pageSize: number;
  birthday: number;
  gender: Gender;
}

function createBaseProfileResponse(): ProfileResponse {
  return { userId: 0, email: "", phone: "", nickname: "", birthday: "", introduction: "", avatar: "", gender: 0 };
}

export const ProfileResponse = {
  encode(message: ProfileResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== 0) {
      writer.uint32(8).uint64(message.userId);
    }
    if (message.email !== "") {
      writer.uint32(18).string(message.email);
    }
    if (message.phone !== "") {
      writer.uint32(26).string(message.phone);
    }
    if (message.nickname !== "") {
      writer.uint32(34).string(message.nickname);
    }
    if (message.birthday !== "") {
      writer.uint32(42).string(message.birthday);
    }
    if (message.introduction !== "") {
      writer.uint32(50).string(message.introduction);
    }
    if (message.avatar !== "") {
      writer.uint32(58).string(message.avatar);
    }
    if (message.gender !== 0) {
      writer.uint32(64).int32(message.gender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProfileResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProfileResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.userId = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.email = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.phone = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.nickname = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.birthday = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.introduction = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.avatar = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.gender = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProfileResponse {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      email: isSet(object.email) ? String(object.email) : "",
      phone: isSet(object.phone) ? String(object.phone) : "",
      nickname: isSet(object.nickname) ? String(object.nickname) : "",
      birthday: isSet(object.birthday) ? String(object.birthday) : "",
      introduction: isSet(object.introduction) ? String(object.introduction) : "",
      avatar: isSet(object.avatar) ? String(object.avatar) : "",
      gender: isSet(object.gender) ? genderFromJSON(object.gender) : 0,
    };
  },

  toJSON(message: ProfileResponse): unknown {
    const obj: any = {};
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.phone !== "") {
      obj.phone = message.phone;
    }
    if (message.nickname !== "") {
      obj.nickname = message.nickname;
    }
    if (message.birthday !== "") {
      obj.birthday = message.birthday;
    }
    if (message.introduction !== "") {
      obj.introduction = message.introduction;
    }
    if (message.avatar !== "") {
      obj.avatar = message.avatar;
    }
    if (message.gender !== 0) {
      obj.gender = genderToJSON(message.gender);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProfileResponse>, I>>(base?: I): ProfileResponse {
    return ProfileResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProfileResponse>, I>>(object: I): ProfileResponse {
    const message = createBaseProfileResponse();
    message.userId = object.userId ?? 0;
    message.email = object.email ?? "";
    message.phone = object.phone ?? "";
    message.nickname = object.nickname ?? "";
    message.birthday = object.birthday ?? "";
    message.introduction = object.introduction ?? "";
    message.avatar = object.avatar ?? "";
    message.gender = object.gender ?? 0;
    return message;
  },
};

function createBaseSignUpRequest(): SignUpRequest {
  return { email: "", password: "" };
}

export const SignUpRequest = {
  encode(message: SignUpRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignUpRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignUpRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.email = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.password = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SignUpRequest {
    return {
      email: isSet(object.email) ? String(object.email) : "",
      password: isSet(object.password) ? String(object.password) : "",
    };
  },

  toJSON(message: SignUpRequest): unknown {
    const obj: any = {};
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SignUpRequest>, I>>(base?: I): SignUpRequest {
    return SignUpRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SignUpRequest>, I>>(object: I): SignUpRequest {
    const message = createBaseSignUpRequest();
    message.email = object.email ?? "";
    message.password = object.password ?? "";
    return message;
  },
};

function createBaseLoginRequest(): LoginRequest {
  return { email: "", password: "" };
}

export const LoginRequest = {
  encode(message: LoginRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.email = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.password = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LoginRequest {
    return {
      email: isSet(object.email) ? String(object.email) : "",
      password: isSet(object.password) ? String(object.password) : "",
    };
  },

  toJSON(message: LoginRequest): unknown {
    const obj: any = {};
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LoginRequest>, I>>(base?: I): LoginRequest {
    return LoginRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LoginRequest>, I>>(object: I): LoginRequest {
    const message = createBaseLoginRequest();
    message.email = object.email ?? "";
    message.password = object.password ?? "";
    return message;
  },
};

function createBaseEditRequest(): EditRequest {
  return { nickname: "", birthday: "", introduction: "", avatar: "", gender: 0 };
}

export const EditRequest = {
  encode(message: EditRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nickname !== "") {
      writer.uint32(10).string(message.nickname);
    }
    if (message.birthday !== "") {
      writer.uint32(18).string(message.birthday);
    }
    if (message.introduction !== "") {
      writer.uint32(26).string(message.introduction);
    }
    if (message.avatar !== "") {
      writer.uint32(34).string(message.avatar);
    }
    if (message.gender !== 0) {
      writer.uint32(40).int32(message.gender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EditRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEditRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.nickname = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.birthday = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.introduction = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.avatar = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.gender = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EditRequest {
    return {
      nickname: isSet(object.nickname) ? String(object.nickname) : "",
      birthday: isSet(object.birthday) ? String(object.birthday) : "",
      introduction: isSet(object.introduction) ? String(object.introduction) : "",
      avatar: isSet(object.avatar) ? String(object.avatar) : "",
      gender: isSet(object.gender) ? genderFromJSON(object.gender) : 0,
    };
  },

  toJSON(message: EditRequest): unknown {
    const obj: any = {};
    if (message.nickname !== "") {
      obj.nickname = message.nickname;
    }
    if (message.birthday !== "") {
      obj.birthday = message.birthday;
    }
    if (message.introduction !== "") {
      obj.introduction = message.introduction;
    }
    if (message.avatar !== "") {
      obj.avatar = message.avatar;
    }
    if (message.gender !== 0) {
      obj.gender = genderToJSON(message.gender);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EditRequest>, I>>(base?: I): EditRequest {
    return EditRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EditRequest>, I>>(object: I): EditRequest {
    const message = createBaseEditRequest();
    message.nickname = object.nickname ?? "";
    message.birthday = object.birthday ?? "";
    message.introduction = object.introduction ?? "";
    message.avatar = object.avatar ?? "";
    message.gender = object.gender ?? 0;
    return message;
  },
};

function createBaseSendLoginSMSCodeRequest(): SendLoginSMSCodeRequest {
  return { phone: "" };
}

export const SendLoginSMSCodeRequest = {
  encode(message: SendLoginSMSCodeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.phone !== "") {
      writer.uint32(10).string(message.phone);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendLoginSMSCodeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendLoginSMSCodeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.phone = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SendLoginSMSCodeRequest {
    return { phone: isSet(object.phone) ? String(object.phone) : "" };
  },

  toJSON(message: SendLoginSMSCodeRequest): unknown {
    const obj: any = {};
    if (message.phone !== "") {
      obj.phone = message.phone;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SendLoginSMSCodeRequest>, I>>(base?: I): SendLoginSMSCodeRequest {
    return SendLoginSMSCodeRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SendLoginSMSCodeRequest>, I>>(object: I): SendLoginSMSCodeRequest {
    const message = createBaseSendLoginSMSCodeRequest();
    message.phone = object.phone ?? "";
    return message;
  },
};

function createBaseLoginSMSRequest(): LoginSMSRequest {
  return { phone: "", code: "" };
}

export const LoginSMSRequest = {
  encode(message: LoginSMSRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.phone !== "") {
      writer.uint32(10).string(message.phone);
    }
    if (message.code !== "") {
      writer.uint32(18).string(message.code);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginSMSRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginSMSRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.phone = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.code = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LoginSMSRequest {
    return {
      phone: isSet(object.phone) ? String(object.phone) : "",
      code: isSet(object.code) ? String(object.code) : "",
    };
  },

  toJSON(message: LoginSMSRequest): unknown {
    const obj: any = {};
    if (message.phone !== "") {
      obj.phone = message.phone;
    }
    if (message.code !== "") {
      obj.code = message.code;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LoginSMSRequest>, I>>(base?: I): LoginSMSRequest {
    return LoginSMSRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LoginSMSRequest>, I>>(object: I): LoginSMSRequest {
    const message = createBaseLoginSMSRequest();
    message.phone = object.phone ?? "";
    message.code = object.code ?? "";
    return message;
  },
};

function createBaseUser(): User {
  return {
    id: 0,
    email: "",
    phone: "",
    nickname: "",
    birthday: "",
    introduction: "",
    createTime: "",
    updateTime: "",
    avatar: "",
    gender: 0,
  };
}

export const User = {
  encode(message: User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.email !== "") {
      writer.uint32(18).string(message.email);
    }
    if (message.phone !== "") {
      writer.uint32(26).string(message.phone);
    }
    if (message.nickname !== "") {
      writer.uint32(34).string(message.nickname);
    }
    if (message.birthday !== "") {
      writer.uint32(42).string(message.birthday);
    }
    if (message.introduction !== "") {
      writer.uint32(50).string(message.introduction);
    }
    if (message.createTime !== "") {
      writer.uint32(58).string(message.createTime);
    }
    if (message.updateTime !== "") {
      writer.uint32(66).string(message.updateTime);
    }
    if (message.avatar !== "") {
      writer.uint32(74).string(message.avatar);
    }
    if (message.gender !== 0) {
      writer.uint32(80).int32(message.gender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): User {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.email = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.phone = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.nickname = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.birthday = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.introduction = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.createTime = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.updateTime = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.avatar = reader.string();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.gender = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): User {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      email: isSet(object.email) ? String(object.email) : "",
      phone: isSet(object.phone) ? String(object.phone) : "",
      nickname: isSet(object.nickname) ? String(object.nickname) : "",
      birthday: isSet(object.birthday) ? String(object.birthday) : "",
      introduction: isSet(object.introduction) ? String(object.introduction) : "",
      createTime: isSet(object.createTime) ? String(object.createTime) : "",
      updateTime: isSet(object.updateTime) ? String(object.updateTime) : "",
      avatar: isSet(object.avatar) ? String(object.avatar) : "",
      gender: isSet(object.gender) ? genderFromJSON(object.gender) : 0,
    };
  },

  toJSON(message: User): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.phone !== "") {
      obj.phone = message.phone;
    }
    if (message.nickname !== "") {
      obj.nickname = message.nickname;
    }
    if (message.birthday !== "") {
      obj.birthday = message.birthday;
    }
    if (message.introduction !== "") {
      obj.introduction = message.introduction;
    }
    if (message.createTime !== "") {
      obj.createTime = message.createTime;
    }
    if (message.updateTime !== "") {
      obj.updateTime = message.updateTime;
    }
    if (message.avatar !== "") {
      obj.avatar = message.avatar;
    }
    if (message.gender !== 0) {
      obj.gender = genderToJSON(message.gender);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<User>, I>>(base?: I): User {
    return User.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<User>, I>>(object: I): User {
    const message = createBaseUser();
    message.id = object.id ?? 0;
    message.email = object.email ?? "";
    message.phone = object.phone ?? "";
    message.nickname = object.nickname ?? "";
    message.birthday = object.birthday ?? "";
    message.introduction = object.introduction ?? "";
    message.createTime = object.createTime ?? "";
    message.updateTime = object.updateTime ?? "";
    message.avatar = object.avatar ?? "";
    message.gender = object.gender ?? 0;
    return message;
  },
};

function createBaseGetUserListResponse(): GetUserListResponse {
  return { total: 0, list: [] };
}

export const GetUserListResponse = {
  encode(message: GetUserListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.total !== 0) {
      writer.uint32(8).int64(message.total);
    }
    for (const v of message.list) {
      User.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserListResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.total = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.list.push(User.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetUserListResponse {
    return {
      total: isSet(object.total) ? Number(object.total) : 0,
      list: Array.isArray(object?.list) ? object.list.map((e: any) => User.fromJSON(e)) : [],
    };
  },

  toJSON(message: GetUserListResponse): unknown {
    const obj: any = {};
    if (message.total !== 0) {
      obj.total = Math.round(message.total);
    }
    if (message.list?.length) {
      obj.list = message.list.map((e) => User.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetUserListResponse>, I>>(base?: I): GetUserListResponse {
    return GetUserListResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetUserListResponse>, I>>(object: I): GetUserListResponse {
    const message = createBaseGetUserListResponse();
    message.total = object.total ?? 0;
    message.list = object.list?.map((e) => User.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetUserListRequest(): GetUserListRequest {
  return {
    id: 0,
    nickname: "",
    email: "",
    phone: "",
    introduction: "",
    createTimeStart: 0,
    createTimeEnd: 0,
    updateTimeStart: 0,
    updateTimeEnd: 0,
    page: 0,
    pageSize: 0,
    birthday: 0,
    gender: 0,
  };
}

export const GetUserListRequest = {
  encode(message: GetUserListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.nickname !== "") {
      writer.uint32(18).string(message.nickname);
    }
    if (message.email !== "") {
      writer.uint32(26).string(message.email);
    }
    if (message.phone !== "") {
      writer.uint32(34).string(message.phone);
    }
    if (message.introduction !== "") {
      writer.uint32(42).string(message.introduction);
    }
    if (message.createTimeStart !== 0) {
      writer.uint32(48).int64(message.createTimeStart);
    }
    if (message.createTimeEnd !== 0) {
      writer.uint32(56).int64(message.createTimeEnd);
    }
    if (message.updateTimeStart !== 0) {
      writer.uint32(64).int64(message.updateTimeStart);
    }
    if (message.updateTimeEnd !== 0) {
      writer.uint32(72).int64(message.updateTimeEnd);
    }
    if (message.page !== 0) {
      writer.uint32(80).int32(message.page);
    }
    if (message.pageSize !== 0) {
      writer.uint32(88).int32(message.pageSize);
    }
    if (message.birthday !== 0) {
      writer.uint32(96).int64(message.birthday);
    }
    if (message.gender !== 0) {
      writer.uint32(104).int32(message.gender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserListRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserListRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nickname = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.email = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.phone = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.introduction = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.createTimeStart = longToNumber(reader.int64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.createTimeEnd = longToNumber(reader.int64() as Long);
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.updateTimeStart = longToNumber(reader.int64() as Long);
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.updateTimeEnd = longToNumber(reader.int64() as Long);
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.page = reader.int32();
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.pageSize = reader.int32();
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.birthday = longToNumber(reader.int64() as Long);
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.gender = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetUserListRequest {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      nickname: isSet(object.nickname) ? String(object.nickname) : "",
      email: isSet(object.email) ? String(object.email) : "",
      phone: isSet(object.phone) ? String(object.phone) : "",
      introduction: isSet(object.introduction) ? String(object.introduction) : "",
      createTimeStart: isSet(object.createTimeStart) ? Number(object.createTimeStart) : 0,
      createTimeEnd: isSet(object.createTimeEnd) ? Number(object.createTimeEnd) : 0,
      updateTimeStart: isSet(object.updateTimeStart) ? Number(object.updateTimeStart) : 0,
      updateTimeEnd: isSet(object.updateTimeEnd) ? Number(object.updateTimeEnd) : 0,
      page: isSet(object.page) ? Number(object.page) : 0,
      pageSize: isSet(object.pageSize) ? Number(object.pageSize) : 0,
      birthday: isSet(object.birthday) ? Number(object.birthday) : 0,
      gender: isSet(object.gender) ? genderFromJSON(object.gender) : 0,
    };
  },

  toJSON(message: GetUserListRequest): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.nickname !== "") {
      obj.nickname = message.nickname;
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.phone !== "") {
      obj.phone = message.phone;
    }
    if (message.introduction !== "") {
      obj.introduction = message.introduction;
    }
    if (message.createTimeStart !== 0) {
      obj.createTimeStart = Math.round(message.createTimeStart);
    }
    if (message.createTimeEnd !== 0) {
      obj.createTimeEnd = Math.round(message.createTimeEnd);
    }
    if (message.updateTimeStart !== 0) {
      obj.updateTimeStart = Math.round(message.updateTimeStart);
    }
    if (message.updateTimeEnd !== 0) {
      obj.updateTimeEnd = Math.round(message.updateTimeEnd);
    }
    if (message.page !== 0) {
      obj.page = Math.round(message.page);
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.birthday !== 0) {
      obj.birthday = Math.round(message.birthday);
    }
    if (message.gender !== 0) {
      obj.gender = genderToJSON(message.gender);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetUserListRequest>, I>>(base?: I): GetUserListRequest {
    return GetUserListRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetUserListRequest>, I>>(object: I): GetUserListRequest {
    const message = createBaseGetUserListRequest();
    message.id = object.id ?? 0;
    message.nickname = object.nickname ?? "";
    message.email = object.email ?? "";
    message.phone = object.phone ?? "";
    message.introduction = object.introduction ?? "";
    message.createTimeStart = object.createTimeStart ?? 0;
    message.createTimeEnd = object.createTimeEnd ?? 0;
    message.updateTimeStart = object.updateTimeStart ?? 0;
    message.updateTimeEnd = object.updateTimeEnd ?? 0;
    message.page = object.page ?? 0;
    message.pageSize = object.pageSize ?? 0;
    message.birthday = object.birthday ?? 0;
    message.gender = object.gender ?? 0;
    return message;
  },
};

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

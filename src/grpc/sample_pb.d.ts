import * as jspb from 'google-protobuf'



export class ClientRequest extends jspb.Message {
  getContent(): string;
  setContent(value: string): ClientRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ClientRequest): ClientRequest.AsObject;
  static serializeBinaryToWriter(message: ClientRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientRequest;
  static deserializeBinaryFromReader(message: ClientRequest, reader: jspb.BinaryReader): ClientRequest;
}

export namespace ClientRequest {
  export type AsObject = {
    content: string,
  }
}

export class ServerResponse extends jspb.Message {
  getResult(): string;
  setResult(value: string): ServerResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ServerResponse): ServerResponse.AsObject;
  static serializeBinaryToWriter(message: ServerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerResponse;
  static deserializeBinaryFromReader(message: ServerResponse, reader: jspb.BinaryReader): ServerResponse;
}

export namespace ServerResponse {
  export type AsObject = {
    result: string,
  }
}


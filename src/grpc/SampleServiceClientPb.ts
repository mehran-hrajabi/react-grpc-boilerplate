/**
 * @fileoverview gRPC-Web generated client stub for sample
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as grpc_sample_pb from '../grpc/sample_pb';


export class SampleServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInforequestSample = new grpcWeb.MethodDescriptor(
    '/sample.SampleService/requestSample',
    grpcWeb.MethodType.UNARY,
    grpc_sample_pb.ClientRequest,
    grpc_sample_pb.ServerResponse,
    (request: grpc_sample_pb.ClientRequest) => {
      return request.serializeBinary();
    },
    grpc_sample_pb.ServerResponse.deserializeBinary
  );

  requestSample(
    request: grpc_sample_pb.ClientRequest,
    metadata: grpcWeb.Metadata | null): Promise<grpc_sample_pb.ServerResponse>;

  requestSample(
    request: grpc_sample_pb.ClientRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: grpc_sample_pb.ServerResponse) => void): grpcWeb.ClientReadableStream<grpc_sample_pb.ServerResponse>;

  requestSample(
    request: grpc_sample_pb.ClientRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: grpc_sample_pb.ServerResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/sample.SampleService/requestSample',
        request,
        metadata || {},
        this.methodInforequestSample,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/sample.SampleService/requestSample',
    request,
    metadata || {},
    this.methodInforequestSample);
  }

}


# react-grpc-boilerplate
A simple boilerplate and straightforward guide on how to use grpc-web along React applications.

## gRPC setup dependencies
ِYou need two dependencies to start making rpc requests through the browser: `google-protobuf` and `grpc-web`.

## protobuf and generating code tools
Protobuf acts as an interface and is used to generate some code. The generated code will be used to make requests. There are two main plugins that need to be downloaded: `protoc` and `protoc-gen-grpc-web`.

### Install protoc
It can be downloaded easily with package managers:
```
sudo apt install -y protobuf-compiler
```

### Install protoc-gen-grpc-web
It can be downloaded from grpc-web releases page:
```
https://github.com/grpc/grpc-web/releases
```

Make sure they are executable and discoverable from your PATH. You can run these commands:
```
sudo mv ~/Downloads/protoc-gen-grpc-web-1.3.0-linux-x86_64 /usr/local/bin/protoc-gen-grpc-web
sudo chmod +x /usr/local/bin/protoc-gen-grpc-web
```
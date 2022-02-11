# react-grpc-boilerplate
A simple boilerplate and straightforward guide on how to use grpc-web in React applications. <br />
This is just a quick guide on how to make requests with grpc in a front-end application. In order to make it work, you need to setup a grpc back-end server and envoy proxy.

## gRPC setup dependencies
ِYou need two dependencies to start making rpc requests through the browser: `google-protobuf` and `grpc-web`.

## Protobuf and generating code tools
Protobuf acts as an interface and is compiled to generate some code. The generated code will be used to make requests. There are two main plugins that need to be downloaded: `protoc` and `protoc-gen-grpc-web`.

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

## Compile
Run this command to compile a `.proto` file:
```
protoc -I=src grpc/sample.proto --js_out=import_style=commonjs:src --grpc-web_out=import_style=typescript,mode=grpcwebtext:src
```
Note1: Here we used `full typescript import style` and `grpc-web-text` wire format. For more information, refer to <a href='https://github.com/grpc/grpc-web'>grpc-web documentation</a>.<br />
Note2: If you use eslint in your project, remember to put the generated files in your eslintignore file. The alternative is to insert `/* eslint-disable */` at the top of every generated file.

## Make requests
Refer to src/helpers/requests.ts which contains a simple async request function (unary call). This is how you'd declare rpc request functions and import them wherever in your application.
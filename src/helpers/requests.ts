import { SampleServiceClient } from "../grpc/SampleServiceClientPb";
import { ClientRequest, ServerResponse } from "../grpc/sample_pb";
import { promisifyRequests } from "./promisify";

//Here you should pass your endpoint to SampleServiceClient
const client = new SampleServiceClient('http://your-endpoint:1000');

export const CallClientRequest = async (content: string): Promise<ServerResponse> => {
    const request = new ClientRequest();

    //Set rpc request parameters
    request.setContent(content);

    //Promisify requestSample which is in callback style
    const promisifiedRequest = promisifyRequests(client.requestSample, client);
    //Fetch the results
	const result = await promisifiedRequest(request, null);

    return result;
};
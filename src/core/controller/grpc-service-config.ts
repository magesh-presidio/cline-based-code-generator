// AUTO-GENERATED FILE - DO NOT MODIFY DIRECTLY
// Generated by proto/build-proto.js

import { Controller } from "./index"
import { StreamingResponseHandler } from "./grpc-handler"
import { handleAccountServiceRequest, handleAccountServiceStreamingRequest } from "./account/index"
import { handleBrowserServiceRequest, handleBrowserServiceStreamingRequest } from "./browser/index"
import { handleCheckpointsServiceRequest, handleCheckpointsServiceStreamingRequest } from "./checkpoints/index"
import { handleFileServiceRequest, handleFileServiceStreamingRequest } from "./file/index"
import { handleMcpServiceRequest, handleMcpServiceStreamingRequest } from "./mcp/index"
import { handleStateServiceRequest, handleStateServiceStreamingRequest } from "./state/index"
import { handleTaskServiceRequest, handleTaskServiceStreamingRequest } from "./task/index"
import { handleWebServiceRequest, handleWebServiceStreamingRequest } from "./web/index"
import { handleModelsServiceRequest, handleModelsServiceStreamingRequest } from "./models/index"
import { handleSlashServiceRequest, handleSlashServiceStreamingRequest } from "./slash/index"
import { handleUiServiceRequest, handleUiServiceStreamingRequest } from "./ui/index"

/**
 * Configuration for a service handler
 */
export interface ServiceHandlerConfig {
  requestHandler: (controller: Controller, method: string, message: any) => Promise<any>;
  streamingHandler: (controller: Controller, method: string, message: any, responseStream: StreamingResponseHandler, requestId?: string) => Promise<void>;
}

/**
 * Map of service names to their handler configurations
 */
export const serviceHandlers: Record<string, ServiceHandlerConfig> = {
  "hai.AccountService": {
    requestHandler: handleAccountServiceRequest,
    streamingHandler: handleAccountServiceStreamingRequest
  },
  "hai.BrowserService": {
    requestHandler: handleBrowserServiceRequest,
    streamingHandler: handleBrowserServiceStreamingRequest
  },
  "hai.CheckpointsService": {
    requestHandler: handleCheckpointsServiceRequest,
    streamingHandler: handleCheckpointsServiceStreamingRequest
  },
  "hai.FileService": {
    requestHandler: handleFileServiceRequest,
    streamingHandler: handleFileServiceStreamingRequest
  },
  "hai.McpService": {
    requestHandler: handleMcpServiceRequest,
    streamingHandler: handleMcpServiceStreamingRequest
  },
  "hai.StateService": {
    requestHandler: handleStateServiceRequest,
    streamingHandler: handleStateServiceStreamingRequest
  },
  "hai.TaskService": {
    requestHandler: handleTaskServiceRequest,
    streamingHandler: handleTaskServiceStreamingRequest
  },
  "hai.WebService": {
    requestHandler: handleWebServiceRequest,
    streamingHandler: handleWebServiceStreamingRequest
  },
  "hai.ModelsService": {
    requestHandler: handleModelsServiceRequest,
    streamingHandler: handleModelsServiceStreamingRequest
  },
  "hai.SlashService": {
    requestHandler: handleSlashServiceRequest,
    streamingHandler: handleSlashServiceStreamingRequest
  },
  "hai.UiService": {
    requestHandler: handleUiServiceRequest,
    streamingHandler: handleUiServiceStreamingRequest
  }
};
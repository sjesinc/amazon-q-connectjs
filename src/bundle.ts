import {
  Client, QConnectClient,
  FetchHttpHandler,
  SDKHandler,
  DescribeContact,
  DescribeContactFlow,
  GetAuthorizedWidgetsForUser,
  GetContact,
  GetContent,
  GetRecommendations,
  ListContentAssociations,
  ListIntegrationAssociations,
  NotifyRecommendationsReceived,
  PutFeedback,
  QueryAssistant,
  SearchSessions,
} from './index';

// Import all SDK exports for browser bundle
import * as QConnectSDK from '@aws-sdk/client-qconnect';

(() => {
  const connect = (global as any).connect || {};
  const qconnectjs = connect.qconnectjs || {};
  connect.qconnectjs = qconnectjs;
  (global as any).connect = connect;

  qconnectjs.Client = Client;
  qconnectjs.QConnectClient = QConnectClient;
  qconnectjs.FetchHttpHandler = FetchHttpHandler;
  qconnectjs.SDKHandler = SDKHandler;
  qconnectjs.commands = {
    DescribeContact,
    DescribeContactFlow,
    GetAuthorizedWidgetsForUser,
    GetContact,
    GetContent,
    GetRecommendations,
    ListContentAssociations,
    ListIntegrationAssociations,
    NotifyRecommendationsReceived,
    PutFeedback,
    QueryAssistant,
    SearchSessions,
  };

  // Expose all @aws-sdk/client-qconnect exports
  // This includes SDK Commands (QueryAssistantCommand, etc.) and types
  qconnectjs.sdk = QConnectSDK;

  // Also expose commonly used SDK exports at the top level for convenience
  Object.keys(QConnectSDK).forEach((key) => {
    if (!qconnectjs[key]) {
      qconnectjs[key] = (QConnectSDK as any)[key];
    }
  });
})();

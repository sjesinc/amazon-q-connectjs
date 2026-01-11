/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// QConnectJS library exports
export * from './client';
export * from './qConnectClient';
export * from './commands';
export * from './fetchHttpHandler';
export * from './sdkHandler';
export * from './types/models';
export * from './types/callSources';

// Re-export @aws-sdk/client-qconnect as a namespace to avoid naming conflicts
// QConnectJS has its own QConnectClient, ServiceInputTypes, etc. that would conflict
// with the SDK's exports of the same names.
//
// Usage:
//   import { QConnectSDK, QConnectClient } from 'amazon-q-connectjs';
//   // QConnectClient is from QConnectJS (browser-friendly)
//   // QConnectSDK.QConnectClient is from @aws-sdk/client-qconnect
//   // QConnectSDK.QueryAssistantCommand is the SDK Command class
export * as QConnectSDK from '@aws-sdk/client-qconnect';

interface SingleOSSEvent {
  eventName: string;
  eventSource: string;
  eventTime: string;
  eventVersion: string;
  oss: {
    bucket: {
      arn: string;
      name: string;
      ownerIdentity: string;
      virtualBucket: string;
    };
    object: {
      deltaSize: number;
      eTag: string;
      key: string;
      size: number;
    };
    ossSchemaVersion: string;
    ruleId: string;
  };
  region: string;
  requestParameters: {
    sourceIPAddress: string;
  };
  responseElements: {
    requestId: string;
  };
  userIdentity: {
    principalId: string;
  };
}

interface SingleCDNEvent {
  // 事件类型
  eventName: string;
  eventSource: string;
  region: string;
  eventVersion: string;
  eventTime: string;
  userIdentity: {
    aliUid: string;
  };
  resource: {
    domain: string;
  };
  eventParameter: {
    domain: string;
    endTime: number;
    fileSize: number;
    filePath: string;
    startTime: number;
  };
  traceId: string;
}

interface MNSStreamEvent {
  body: string;
  attrs: {
    Extend: string;
  };
}

interface MNSJSONEvent {
  Context: string;
  TopicOwner: string;
  Message: string;
  Subscriber: string;
  PublishTime: number;
  SubscriptionName: string;
  MessageMD5: string;
  TopicName: string;
  MessageId: string;
}

interface TableStoreRecord {
  Type: 'string';
  Info: {
    Timestamp: number;
  };
  PrimaryKey: [
    {
      ColumnName: string;
      Value: any;
    }
  ];
  Columns: [
    {
      Type: string;
      ColumnName: string;
      Value: any;
      Timestamp: number;
    }
  ];
}

export namespace FC {
  export interface OSSEvent {
    events: SingleOSSEvent[];
  }

  export type MNSEvent = string | MNSStreamEvent | MNSJSONEvent;

  export interface SLSEvent {
    parameter: object;
    source: {
      endpoint: string;
      projectName: string;
      logstoreName: string;
      shardId: number;
      beginCursor: string;
      endCursor: string;
    };
    jobName: string;
    taskId: string;
    cursorTime: number;
  }

  export interface CDNEvent {
    events: SingleCDNEvent[];
  }

  export interface TimerEvent {
    triggerTime: string;
    triggerName: string;
    payload: string;
  }

  export interface APIGatewayEvent {
    path: string;
    httpMethod: string;
    headers: object;
    queryParameters: object;
    pathParameters: object;
    body: string;
    isBase64Encoded: 'true' | 'false';
  }

  export interface APIGatewayResponse {
    isBase64Encoded: boolean;
    statusCode: number;
    headers: object;
    body: string;
  }

  export interface TableStoreEvent {
    Version: string;
    Records: TableStoreRecord[];
  }
}

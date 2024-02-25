import { PluginErrorType, createErrorResponse } from '@lobehub/chat-plugin-sdk';

import { RequestData, ResponseData } from '@/type';

export const config = {
  runtime: 'edge',
};

export default async (req: Request) => {
  if (req.method !== 'POST') return createErrorResponse(PluginErrorType.MethodNotAllowed);

  const { content } = (await req.json()) as RequestData;

  const result: ResponseData = {
    content,
  };

  return new Response(JSON.stringify(result));
};

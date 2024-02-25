import { PluginErrorType, createErrorResponse } from '@lobehub/chat-plugin-sdk';

import { RequestData } from '@/type';

export const config = {
  runtime: 'edge',
};

export default async (req: Request) => {
  if (req.method !== 'POST') return createErrorResponse(PluginErrorType.MethodNotAllowed);

  const { content } = (await req.json()) as RequestData;

  return new Response(`[debug]:\r${content}`);
};

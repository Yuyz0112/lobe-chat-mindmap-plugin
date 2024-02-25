import { createLobeChatPluginGateway } from '@lobehub/chat-plugins-gateway';

export const config = {
  runtime: 'edge',
};

export default createLobeChatPluginGateway();

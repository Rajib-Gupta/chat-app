import { UIKitProvider, Chat, ConversationList, useClient, rootStore } from 'agora-chat-uikit';
import { useEffect } from 'react';


const user = 'rajibgupta1234567890'; // your user ID
const agoraToken = '007eJxTYLBQM786Jyc6+eeOVRdFDTOaY38zRD4qiX8+/YqwgwDnDxsFBmMTMwNTA+MUy7RkI5NE08REAyNjYwtzY2MTU8vU1BTjNxds0hoCGRmmbalnYmRgZWAEQhBfhSHNzDQx1djIQNcgJdVC19AwNU030SDNQjfF2NzYyCTJPC0x2QAAJHInDw=='; // agora chat token

const conversation = {
  chatType: 'singleChat', // 'singleChat' || 'groupChat'
  conversationId: 'kaushik12345', // target user id or group id
  name: 'Kaushik', // target user nickname or group name
  lastMessage: {},
};

const Admin = () => {
  const client = useClient();

  useEffect(() => {
    const authenticateUser = async () => {
      try {
        // Perform user authentication here, e.g., login with username/password or obtain token
        // After successful authentication, proceed to open the chat client
        await client.open({
          user,
          agoraToken,
        });
        
        console.log('Chat client opened successfully');

        // After successful login, you can add conversation
        rootStore.conversationStore.addConversation(conversation);
      } catch (error) {
        console.error('Error authenticating user:', error);
      }
    };

    if (client) {
      authenticateUser();
    }
  }, [client]);

  return (
    <div>
      <div>
        <ConversationList />
      </div>
      <div>
        <Chat />
      </div>
    </div>
  );
};
export default Admin;
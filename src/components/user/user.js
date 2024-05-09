import { UIKitProvider, Chat, ConversationList, useClient, rootStore } from 'agora-chat-uikit';
import { useEffect } from 'react';


const user = 'kaushik12345'; // your user ID
const agoraToken = '007eJxTYJiQuPPM6odhf7KeB3YG7PT8VCd+wmvLipuPXfkVVntOmPpXgcHYxMzA1MA4xTIt2cgk0TQx0cDI2NjC3NjYxNQyNTXFeNcam7SGQEaGD+bmLIwMrAyMQAjiqzCYmaWYWJgbGOgapKRa6hoapqbpJpqlpOkmm1umGJqamaZaWJgCAFr0KQk='; // agora chat token

const conversation = {
  chatType: 'singleChat', // 'singleChat' || 'groupChat'
  conversationId: 'rajibgupta1234567890', // target user id or group id
  name: 'Rajib', // target user nickname or group name
  lastMessage: {},
};

const User = () => {
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
export default User;
import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useChatContext } from 'stream-chat-expo'
import { useAuth } from '@/app/Providers/AuthProvider';
import { router } from 'expo-router';

const UserListItem = ({user})=> {

  const {client} = useChatContext();
  const {user : me} =useAuth();

  const onPress = async () => {
    const channel = client.channel ('messaging', {
      members :[me.id,user.id]
    });
    await channel.watch();
    router.replace(`/(home)/channel/${channel.cid}`);
  };

  return (
    <Pressable 
      onPress={onPress}
      style ={{
      padding:20,
      backgroundColor:'white',
      }}>
      <Text
      style={{
        fontWeight:'600'
      }}
      >{user.full_name}</Text>
    </Pressable>
  )
}

export default UserListItem;
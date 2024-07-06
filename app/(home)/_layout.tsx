import {Redirect, Stack} from "expo-router";
import ChatProvider from "../Providers/ChatProvider";
import { useAuth } from "../Providers/AuthProvider";



export default function HomeLayout(){
  const {user} = useAuth();

  if (!user){
      return <Redirect href="/(auth)/login"/>
  }


    return(
     
          <ChatProvider>
        <Stack>
          <Stack.Screen name="(Tabs)" options={{headerShown :false}}/>
        </Stack>
        </ChatProvider>
    );
}
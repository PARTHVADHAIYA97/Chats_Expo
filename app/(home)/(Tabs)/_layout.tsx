import { Tabs } from "expo-router"
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function TabsNavigster(){
    return <Tabs>
    <Tabs.Screen name ='index' 
    options={{title:'Chats',
        tabBarIcon :({size,color})=>(
            <Ionicons name="chatbubble-sharp" size={size} color={color} />
        )
    }}
    />
    <Tabs.Screen name ='Profile' 
    options={{title:'Profile',
        tabBarIcon :({size,color})=>(
            <FontAwesome name="user" size={size} color= {color} />
        )
    }}
    /></Tabs>
}
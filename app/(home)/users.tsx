import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native';
import { useAuth } from '../Providers/AuthProvider';
import { supabase } from '../lib/SupaBase';
import UserListItem from '@/components/UserListItem';

export default function UsersScreen() {
    const [users, setUsers] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        const fetchUsers = async () => {
            let { data: profiles, error } = await supabase
            .from('profiles')
           .select('*')
           .neq('id', user.id);
           setUsers(profiles);

        };
        fetchUsers();
    }, [])


    return (
        <FlatList
            data={users}
            contentContainerStyle ={{gap : 5}}
            renderItem={({ item }) =>
                <UserListItem user={item}/>}
        />
    );
}

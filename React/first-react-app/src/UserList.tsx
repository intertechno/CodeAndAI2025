import { useState } from 'react'

interface User {
    id: number;
    name: string;
}

function UserList() {

    const [isLoading, setIsLoading] = useState(true);
    const [userList, setUserList] = useState<User[]>([]);

    console.log('Rendering UserList');

    if (isLoading) {
        const url: string = 'https://jsonplaceholder.typicode.com/users';
        fetch(url)
            .then(response => response.json())
            .then((data: User[]) => {
                console.log('User data fetched');

                setUserList(data);
                setIsLoading(false);
            });

        return <div>Loading...</div>;
    }

    console.log('Rendering user list table');
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {userList.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default UserList;

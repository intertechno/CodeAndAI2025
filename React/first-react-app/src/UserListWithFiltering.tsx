import { useState } from 'react'

interface User {
    id: number;
    name: string;
}

function UserListWithFiltering() {

    const [isLoading, setIsLoading] = useState(true);
    const [userList, setUserList] = useState<User[]>([]);
    const [originalUserList, setOriginalUserList] = useState<User[]>([]);

    const [idFilter, setIdFilter] = useState('');
    const [nameFilter, setNameFilter] = useState('');

    console.log('Rendering UserListWithFiltering');

    if (isLoading) {
        const url: string = 'https://jsonplaceholder.typicode.com/users';
        fetch(url)
            .then(response => response.json())
            .then((data: User[]) => {
                console.log('User data fetched');

                setUserList(data);
                setOriginalUserList(data);
                setIsLoading(false);
            });

        return <div>Loading...</div>;
    }

    function applyFilters(newValue: string, filterField: string) {

        let filteredList: User[] = [];

        if (filterField === 'id') {
            if (newValue.trim() === '') {
                setIdFilter('');
                return;
            }
            filteredList = originalUserList.filter(user =>
                user.id.toString().includes(newValue)
            );

            setIdFilter(newValue);

        } else if (filterField === 'name') {
            if (newValue.trim() === '') {
                setNameFilter('');
                return;
            }
            filteredList = originalUserList.filter(user =>
                user.name.toLowerCase().includes(newValue.toLowerCase())
            );
            setNameFilter(newValue);
        }

        setUserList(filteredList);
    }

    console.log('Rendering user list table');
    return (
        <>
            <div>
                <label>Id:</label>
                <input type="text" value={idFilter} onChange={(e) => applyFilters(e.target.value, 'id')} />
            </div>
            <div>
                <label>Name:</label>
                <input type="text" value={nameFilter} onChange={(e) => applyFilters(e.target.value, 'name')} />
            </div>
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
        </>
    );
}

export default UserListWithFiltering;

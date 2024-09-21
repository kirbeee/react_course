import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addUser, fetchUsers} from "../store";
import Button from "./Button";
import Skeleton from "./Skeleton";

function UserList() {
    const dispatch = useDispatch();
    const {isLoading, data, error} = useSelector((state) => state.users);

    const handleUserAdd = () => {
        dispatch(addUser());
    }

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);
    if (isLoading) return <Skeleton times={6} className="h-10 w-full"/>;
    if (error) return <div>Error</div>;

    const renderUsers = data.map((user) => {
        return (<div key={user.id} className="mb-2 border rounded">
            <div className="flex p-2 justify-between items-center cursor-pointer">
                {user.name}
            </div>
        </div>)
    });

    return <div>
        <div className="flex flex-row justify-between m-3">
            <h1 className="m-2 text-xl">Users</h1>
            <Button onClick={handleUserAdd}>
                + Add User
            </Button>
        </div>
        {renderUsers}</div>;
}

export default UserList;
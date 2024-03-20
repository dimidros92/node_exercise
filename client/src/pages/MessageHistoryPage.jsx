import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../state/users/userSlice";

export const MessageHistoryPage = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      {users.loading && <h4>Loading ...</h4>}
      {users &&
        users.users.length > 0 &&
        users.users.map((user) => <h4>{user.firstName}</h4>)}
    </div>
  );
};

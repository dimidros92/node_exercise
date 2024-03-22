import { useEffect, useState } from "react";
import "./MessageHistory.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../state/users/userSlice";
import UsersForm from "../components/ui/user-form/users-form";
import { fetchMessages } from "../state/messages/messageSlice";
import MessageHistory from "../components/ui/message-history/message-history";
export const MessageHistoryPage = () => {
  const dispatch = useDispatch();
  const usersSlice = useSelector((state) => state.users);
  const messagesSlice = useSelector((state) => state.messages);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (users.length === 2) {
      dispatch(fetchMessages(users));
    }
  }, [users, dispatch]);
  return (
    <div className="page">
      <div className="form">
        <UsersForm selected={setUsers} users={usersSlice.users} />
        {messagesSlice.messages.length > 0 && users.length > 0 && (
          <MessageHistory users={users} messages={messagesSlice.messages} />
        )}
      </div>
    </div>
  );
};

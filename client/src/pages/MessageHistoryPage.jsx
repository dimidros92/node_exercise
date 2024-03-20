import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../state/users/userSlice";

export const MessageHistoryPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return <div></div>;
};

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserList } from "../redux/actions/userAction";

const UserList = ({ history }) => {
  const dispatch = useDispatch();
  const { list, user } = useSelector((state) => state.users);

  useEffect(() => {
    if (user.isAdmin && list) {
      dispatch(fetchUserList());
    } else {
      history.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, history]);

  return (
    <div className="userList">
      <h3>List of Users</h3>
      {list.map((user, index) => (
        <>
          <p>Name: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>isAdmin: {user.isAdmin ? "true" : "false"}</p>
        </>
      ))}
    </div>
  );
};

export default UserList;

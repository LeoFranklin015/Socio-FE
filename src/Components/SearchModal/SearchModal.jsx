import React, { useEffect, useState } from "react";
import { Modal, useMantineTheme } from "@mantine/core";
import FollowersCard from "../FollowersCard/FollowersCard";
import { searchUser } from "../../api/UserRequests";
import User from "../User/User";
import axios from "axios";
import { getAllUser } from "../../api/UserRequests";

const SearchModal = ({ modalOpened, setModalOpened }) => {
  const theme = useMantineTheme();
  const [query, setQuery] = useState(" ");
  const [data, setData] = useState([]);

  //   useEffect(() => {
  //     const fetchUserSearch = async () => {
  //       const res = await axios.get(`http://localhost:4000/search/?q=${query}`);
  //       console.log("Response from searchUser:", res);
  //       setData(res);
  //     };
  //     fetchUserSearch();
  //   }, [query]);

  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUser();
      const keys = ["firstName", "lastName", "username"];
      const search = (users1) => {
        return users1.filter((user) =>
          keys.some(
            (key) =>
              user["firstName"] &&
              user[key].toLowerCase().includes(query.toLowerCase())
          )
        );
      };
      setData(search(data));
    };
    fetchPersons();
  }, [query]);
  console.log("Value of data:", data);

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <input
        type="text"
        placeholder="Search User"
        onChange={(e) => setQuery(e.target.value)}
        style={{
          borderRadius: "5px",
          backgroundColor: "rgba(40, 52, 62, 0.07)",
          padding: "10px 20px",
          fontSize: "12px",
        }}
      />
      {data && data.map((user) => <User key={user.id} person={user} />)}
    </Modal>
  );
};

export default SearchModal;

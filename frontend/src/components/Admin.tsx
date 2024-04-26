import { useEffect } from "react";
import { io } from "socket.io-client";

export const Admin = () => {
  // Create client socket connection with the help of UseEffect
  useEffect(() => {
    const socket = io("http://localhost:3000");

    socket.on("connect", () => {
      console.log("Socket connected with id: ", socket.id);
      socket.emit("joinAdmin", {
        password: "ADMIN_PASSWORD",
      });
    });
  }, []);

  //
  return <div>Admin Page</div>;
};

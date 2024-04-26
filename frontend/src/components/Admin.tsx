import { useEffect, useState } from "react";
import { io } from "socket.io-client";

export const Admin = () => {
  const [socket, setSocket] = useState<null | any>(null);
  const [quizId, setQuizId] = useState("");
  const [roomId, setRoomId] = useState("");

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

  if (!quizId) {
    return (
      <div className="h-screen  justify-center flex-col">
        <div className="justify-center bg-blue-700 m-27 p-4 rounded-lg">
          <div className="pt-8">
            <input
              type="text"
              onChange={(e) => {
                setRoomId(e.target.value);
              }}
            />
            <br />
            <button
              onClick={() => {
                socket.emit("createQuiz", {
                  roomId,
                });
              }}
              className="mx-2"
            >
              Create Room &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen  justify-center flex-col">
      <div className="justify-center bg-blue-700 m-27 p-4 rounded-lg">
        <div className="pt-8">
          <input
            type="text"
            onChange={(e) => {
              setRoomId(e.target.value);
            }}
          />
          <button className="mx-2">Submit &rarr;</button>
        </div>
      </div>
    </div>
  );
};

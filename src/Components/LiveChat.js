import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../utils/ChatSlice";
import { CommentBox } from "./Comment";
import {
  getRandomFunnyComment,
  getRandomName,
  USER_ICON
} from "../utils/constant";

const Chat = (props) => {
  const { name, message } = props.data;
  return (
    <div className="flex gap-1 p-2 m-1 text-white text-sm w-full items-center ">
      <img className="w-6 h-6" src={USER_ICON} alt="user" />
      <div>
        <p>{name}</p>
        <p>{message}</p>
      </div>
    </div>
  );
};
const LiveChat = () => {
  const dispatch = useDispatch();
  const inputText = useRef("");
  const chats = useSelector((store) => store.chat.message);
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addChat({
          name: getRandomName(),
          message: getRandomFunnyComment()
        })
      );
    }, 1500);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="w-3/12 mx-auto border border-white rounded-lg text-white h-[500px]">
      <div className="overflow-y-scroll overflow-x-hidden flex flex-col-reverse h-[90%]">
        {chats && chats.map((chat) => <Chat data={chat} />)}
      </div>
      <div>
        <form
          className="flex m-1 h-10% "
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              addChat({
                name: "Shivavigneshkannan-k",
                message: inputText.current.value
              })
            );
            inputText.current.value = "";
          }}>
          <input
            type="text"
            className="bg-black p-1 px-2 flex-1 mx-2 my-1 outline-none  rounded-md outline-lime-50 "
            ref={inputText}
          />
          <button className=" p-2 px-4 bg-red-700 rounded-lg text-sm">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default LiveChat;

import React from "react";
import ChatHeader from "../ChatHeader/ChatHeader";
import MessageList from "../MessageList/MessageList";
import MessageInput from "../MessageInput/MessageInput";

const ChatSection = () => {
  return (
    <div className="flex lg:ml-[14.5rem] lg:-mt-3 mt-16 h-screen overflow-hidden">
      <div className="w-1/3 lg:mt-14 bg-white border-r border-gray-300 lg:inline hidden">
        <ChatHeader />
        <MessageList />
      </div>
      <div className="flex-1">
        <MessageInput />
      </div>
    </div>
  );
};

export default ChatSection;

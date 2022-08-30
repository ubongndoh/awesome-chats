
import React from "react";
import { forwardRef } from "react";
import "./Message.css";

const Message = forwardRef(({ message, username }, ref) => {
    const isUser = username === message.username;

    return (
        <>
            <div ref={ref} className={`message ${isUser && "message__user"}`}>
                <div className={isUser ? "message__userCard" : "message__guestCard"}>
                    <div>
                        <div className=" text-white text-left pt-2 px-3">

                            {!isUser && `${message.username || "Unknown User"}`}

                        </div>

                        <div className=" text-gray-500 text-center pb-2 px-3" >
                            {message.message}
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
});
export default Message;
import React, { useEffect, useState, useRef } from 'react'
import FlipMove from "react-flip-move";
import Message from '../components/Message';
import firebase from 'firebase';
import db from '../firebase';
import './chats.css'
function Chats() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [username, setUsername] = useState("");
    const didPromptRef = useRef(false);
    var EnteredName = true;


    useEffect(() => {
        db.collection("messages")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) => {
                setMessages(
                    snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
                );
            });
    }, []);





    useEffect(() => {

        if (didPromptRef.current === false) {
            didPromptRef.current = true;
            setUsername(prompt("Please enter your name"));
        }
    }, []);



    if (username == null || "") {
        EnteredName = false;

    }


    const sendMessage = (event) => {
        // all the logic
        event.preventDefault();

        db.collection("messages").add({
            message: input,
            username: username,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        setInput("");
    };

    return (
        <>

            <div className="App">
                <div className="chat_header">
                    <h1>Welcome {username} to Awesome Chat</h1>
                </div>

                <form className="app__form">
                    <input
                        className="app__input"
                        disabled={!EnteredName}
                        placeholder="Enter Your Message"
                        value={input}
                        onChange={(event) => setInput(event.target.value)}
                    />
                    <button
                        className="app__iconButton fa fa-send"
                        disabled={!input}
                        type="submit"
                        onClick={sendMessage}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            fill={!input ? "#8da7a1" : "#023026"}
                            className="bi bi-send-fill"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M15.964.686a.5.5 0 0 0-.65-.65l-.095.038L.767 5.854l-.001.001-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.563 2.903.432.275.275.432 2.903 4.563.002.002.26.41a.5.5 0 0 0 .886-.083l.181-.453L15.926.78l.038-.095Zm-1.833 1.89.471-1.178-1.178.471L5.93 9.363l.338.215a.5.5 0 0 1 .154.154l.215.338 7.494-7.494Z"
                            />
                        </svg>
                    </button>
                </form>



                {/* Messages */}
                <div className="">
                    <FlipMove className="">
                        {messages.map(({ id, message }) => (
                            <Message key={id} username={username} message={message} />
                        ))}
                    </FlipMove>
                </div>
            </div>

        </>

    )
}

export default Chats
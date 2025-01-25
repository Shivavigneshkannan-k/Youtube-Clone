import { createSlice } from "@reduxjs/toolkit";

const ChatSlice = createSlice({
  name: "chat",
  initialState: {
    message: [],
    chatSize: 10
  },
  reducers: {
    addChat: (state, action) => {
      if (state.message.length >= state.chatSize) {
        state.message.pop();
      }
      state.message.unshift(action.payload);
    }
  }
});

export const { addChat } = ChatSlice.actions;
export default ChatSlice.reducer;

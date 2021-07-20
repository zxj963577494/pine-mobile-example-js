import { createSlice } from '@reduxjs/toolkit';

import { commentService } from '@/services';

const commentSlice = createSlice({
  name: 'comment',
  initialState: {
    data: {
      list: [],
      pagination: {
        total: 0,
        pageSize: 10,
        current: 1,
      },
      current: {},
    },
  },
  effects: (dispatch) => ({
    async fetchAsync(payload) {
      const response = await commentService.query(payload);
      dispatch.comment.save(response);
    },
  }),
  reducers: {
    save(state, payload) {
      return {
        ...state,
        data: {
          ...state.data,
          list: payload.map((data) => ({
            ...data,
            key: data.id,
          })),
        },
      };
    },
  },
});

export default commentSlice.reducer;

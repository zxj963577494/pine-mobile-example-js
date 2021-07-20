import { createSlice } from '@reduxjs/toolkit';

import { topicService } from '@/services';

const topicSlice = createSlice({
  name: 'topic',
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
  reducers: {
    save(state, action) {
      return {
        ...state,
        data: {
          ...state.data,
          list: action.payload.map((data) => ({
            ...data,
            key: data.id,
          })),
        },
      };
    },
  },
});

export function fetchAsync() {
  return async (dispatch) => {
    const response = await topicService.query();
    dispatch({ type: 'topic/save', payload: response });
  };
}

export function fetchCurrentAsync(payload) {
  return async () => {
    const response = await topicService.queryCurrent(payload);
    return response;
  };
}

export function addAsync(payload) {
  return async () => {
    await topicService.post(payload);
  };
}

export async function updateAsync(payload) {
  return async () => {
    const { id, ...params } = payload;
    await topicService.patch(id, params);
  };
}

export async function deleteAsync(payload) {
  return async () => {
    const { id } = payload;
    await topicService.remove(id);
  };
}

export default topicSlice.reducer;

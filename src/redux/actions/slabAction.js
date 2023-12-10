import { adminSlabAction } from "../actionTypes";

import axios from "axios";

export const creatingSlab = (isCreating) => ({
  type: adminSlabAction.CREATING_SLAB,
  payload: isCreating,
});
export const createSlab = (payload) => async (dispatch) => {
  try {
    dispatch(creatingSlab(true));
    const res = await axios.post(
      "https://api.srpays.in/slab-create",
      payload
    );
    dispatch(creatingSlab(false));
    return res.data;
  } catch (err) {
    dispatch(creatingSlab(false));
    console.log(err);
  }
};


//------------SLAB_LIST-----------//

export const fetchingSlabList = (isFetching) => ({
  type: adminSlabAction.FETCHING_SLAB_LIST,
  payload: isFetching,
});
export const setSlabList = (slabList) => ({
  type: adminSlabAction.SET_SLAB_LIST,
  payload: slabList,
});
export const fetchSlabList = (payload) => async (dispatch) => {
  try {
    dispatch(fetchingSlabList(true));
    const res = await axios.post(
      "https://api.srpays.in/slab-list",
      payload
    );
    dispatch(fetchingSlabList(false));
    dispatch(setSlabList(res?.data?.data));
    return res.data;
  } catch (err) {
    dispatch(fetchingSlabList(false));
    console.log(err);
  }
};


export const editingSlab = (isEditing) => ({
    type: adminSlabAction.EDITING_SLAB,
    payload: isEditing,
  });
export const editSlabData = (payload) => async (dispatch) => {
  try {
    dispatch(editingSlab(true));
    const res = await axios.post(
      "https://api.srpays.in/slab-by-id",
      payload
    );
    dispatch(editingSlab(true));
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

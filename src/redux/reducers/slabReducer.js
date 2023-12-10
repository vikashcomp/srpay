import { adminSlabAction } from "../actionTypes";

const initialState = {
  slabList: [],
  isFetchingSlabList: false,
  isCreatingSlab: false,
  isEditingSlab: false,
};

export default function slabForm(state = initialState, { type, payload }) {
  // console.log("payloadd slabb", payload);
  switch (type) {
    case adminSlabAction.FETCHING_SLAB_LIST: {
      return {
        ...state,
        isFetchingSlabList: payload,
      };
    }
    case adminSlabAction.SET_SLAB_LIST: {
      return {
        ...state,
        slabList: payload,
        isFetchingSlabList: false,
      };
    }
    case adminSlabAction.CREATING_SLAB: {
      return {
        ...state,
        isCreatingSlab: payload,
      };
    }
    case adminSlabAction.EDITING_SLAB: {
      return {
        ...state,
        isEditingSlab: payload,
      };
    }

    default:
      return state;
  }
}

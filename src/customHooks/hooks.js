import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { login } from "../constants/adminRoutes";
import { getKyc } from "../redux/actions/kycAction";
import { getUserList } from "../redux/actions/ListAction";
import {
  createSlab,
  editSlabData,
  fetchSlabList,
} from "../redux/actions/slabAction";
import { toast } from "react-toastify";
import { partnerLedgerList, walletBalance } from "../redux/actions/ledgerAction";


const initialCreateSlabState = {
  min_val: "",
  max_val: "",
  commission_amt: "",
  is_comm_rs: "",
  return_val: "",
  is_return_rs: "",
  tds_per: "",
  gst_per: "",
};

export const usePendingKycList = () => {
  const { listData } = useSelector((state) => state.listForm);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const adminToken = JSON.parse(window.localStorage.getItem("adminToken"));
    if (adminToken)
      dispatch(getUserList({ access_token: adminToken })).then((res) => {
        if (res.success === false && res.message === "Invalid Token") {
          window.localStorage.removeItem("adminToken");
          navigate(login);
        }
      });
    else navigate(login);
  }, []);
  return {
    listData,
  };
};




export const useCreateSlab = () => {
  const { slabList } = useSelector((state) => state.slabForm);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [iState, updateState] = useState(initialCreateSlabState);
  const [isEditing, setIsEditing] = useState(false);

  const adminToken = JSON.parse(window.localStorage.getItem("adminToken"));

  const getSlabList = () => {
    if (adminToken)
      dispatch(fetchSlabList({ access_token: adminToken })).then((res) => {
        if (res.success === false && res.message === "Invalid Token") {
          window.localStorage.removeItem("adminToken");
          navigate(login);
        }
      });
    else navigate(login);
  };
  const addSlabClickHandler = () => {
    dispatch(
      createSlab({
        access_token: adminToken,
        nslab_id: -1,
        ...iState,
      })
    ).then((res) => {
      if (res.success == true) {
        updateState({
          ...initialCreateSlabState,
        });
        toast.success("Record inserted", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1000,
        });
        getSlabList();
      } else {
        if (res.success === false && res.message === "Invalid Token") {
          window.localStorage.removeItem("adminToken");
          navigate(login);
        }
        toast.error("Something went worng. Please try again.", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1000,
        });
      }
    });
  };
  const handleEdit = (slabData) => {
    setIsEditing(true);
    updateState({ ...slabData });
  };
  const editSlabHandler = () => {
    const data = { access_token: adminToken, ...iState };
    dispatch(editSlabData(data)).then((res) => {
      if (res.success == true) {
        toast.success("Edit Successfully", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1000,
        });
        updateState({
          ...initialCreateSlabState,
        });
        setIsEditing(false);
        getSlabList();
      } else {
        if (res.success === false && res.message === "Invalid Token") {
          window.localStorage.removeItem("adminToken");
          navigate(login);
        }
        toast.error("Something went wrong. Please try later.", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1000,
        });
      }
    });
  };

  useEffect(() => {
    getSlabList();
  }, []);
  return {
    slabList,
    addSlabClickHandler,
    iState,
    updateState,
    editSlabHandler,
    handleEdit,
    isEditing,
  };
};

export const useUserIsLoggedIn = () => {
  const navigate = useNavigate();
  const { pathName } = useLocation();
  useEffect(() => {
    const tokenData = JSON.parse(window.localStorage.getItem("tokenData"));

    if (tokenData) {
      if (pathName == "/" ) navigate("/profile");
    } else navigate("/");
  }, []);
};

export const useUserProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { kycData } = useSelector((state) => state.kycForm);
  useEffect(() => {
    const tokenData = JSON.parse(window.localStorage.getItem("tokenData"));
    if (tokenData)
      dispatch(getKyc({ access_token: tokenData })).then((res) => {
        if (res.success === false && res.message === "Invalid Token") {
          window.localStorage.removeItem("tokenData");
          navigate("/");
        }
      });
    else navigate("/");
  }, []);
  return {
    kycData,
  };
};

// -----walletbalance-----
export const useUserwalletBalance = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { walletBalanceData } = useSelector((state) => state.partnerLedgerList);
  console.log('wallet..walletBalanceData',walletBalanceData)
  useEffect(() => {
    const tokenData = JSON.parse(window.localStorage.getItem("tokenData"));
    if (tokenData)
      dispatch(walletBalance({ access_token: tokenData })).then((res) => {
        if (res.success === false && res.message === "Invalid Token") {
          window.localStorage.removeItem("tokenData");
          navigate("/");
        }
      });
    else navigate("/");
  }, []);
  return {
    walletBalanceData,
  };
};




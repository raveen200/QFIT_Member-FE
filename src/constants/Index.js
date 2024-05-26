export const API_CONSTANTS = {
  GET_ALL_MEMBERS: "/api/Members",
  ADD_MEMBER: "/api/Members",
  DELETE_MEMBER: "/api/Members",
  UPDATE_MEMBER: "/api/Members",
  GET_MEMBER_BY_ID: "/api/Members",
  GET_MEMBER_BY_FIRST_NAME: "/api/Members/GetByName",
  GET_MEMBER_BY_NIC: "/api/Members/GetByNIC"
};

export const REDUX_ACTIONS = {
  GET_ALL_MEMBERS: "member/getAllMembers",
  ADD_MEMBER: "member/addMember",
  DELETE_MEMBER: "member/deleteMember",
  UPDATE_MEMBER: "member/updateMember",
  GET_MEMBER_BY_ID: "member/getMemberById",
  GET_MEMBER_BY_FIRST_NAME: "member/getMemberByFirstName",
  GET_MEMBER_BY_NIC: "member/getMemberByNIC"
};

export const AUTH_CONSTANTS = {
  LOGIN: "/api/auth/login",
  REGISTER: "/api/auth/register",
  LOGOUT: "/api/auth/logout"
};

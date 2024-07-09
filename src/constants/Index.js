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

export const MEMBERSHIP_API_CONSTANTS = {
  GET_MEMBERSHIP: "/api/Membership",
  ADD_MEMBERSHIP: "/api/Membership",
  DELETE_MEMBERSHIP: "/api/Membership",
  UPDATE_MEMBERSHIP: "/api/Membership",
  GET_MEMBERSHIP_BY_ID: "/api/Membership",
  GET_MEMBERSHIP_BY_NIC: "/api/Membership/GetByNIC"
};

export const MEMBERSHIP_REDUX_ACTIONS = {
  GET_MEMBERSHIP: "membership/getMembership",
  ADD_MEMBERSHIP: "membership/addMembership",
  DELETE_MEMBERSHIP: "membership/deleteMembership",
  UPDATE_MEMBERSHIP: "membership/updateMembership",
  GET_MEMBERSHIP_BY_ID: "membership/getMembershipById",
  GET_MEMBERSHIP_BY_NIC: "membership/getMembershipByNIC"
};

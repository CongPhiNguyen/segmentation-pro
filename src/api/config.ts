/*eslint-disable */
const URL_SYSTEM_V1 = process.env.REACT_APP_BACK_END_API_ENDPOINT
  ? process.env.REACT_APP_BACK_END_API_ENDPOINT + "/api/v1"
  : "http://localhost:5050/dashboard-monitoring/api/v1"
const URL = {
  URL_GET_ALL_DATA: URL_SYSTEM_V1 + "/vui-coins/get-all-data",
  URL_ADMIN_LOGIN: URL_SYSTEM_V1 + "/user/login",
  URL_ADMIN_CHECKTOKEN: URL_SYSTEM_V1 + "/user/checkToken",
  URL_ADMIN_REFRESH: URL_SYSTEM_V1 + "/user/refresh",
  URL_GET_DATA_WEEK: URL_SYSTEM_V1 + "/vui-coins/get-data-by-week",
  URL_GET_DATA_DAY: URL_SYSTEM_V1 + "/vui-coins/get-data-by-day",
  URL_GET_DATA_HOURS: URL_SYSTEM_V1 + "/vui-coins/get-data-by-hour",
  URL_GET_DATA_STORE: URL_SYSTEM_V1 + "/vui-coins/get-concrete-value",
  URL_GET_CONCRETE_DATA: URL_SYSTEM_V1 + "/vui-coins/get-concrete-data",
  URL_GET_TRANSACTIOM: URL_SYSTEM_V1 + "/vui-coins/get-transaction",
  URL_GET_CONCRETE_TRANSACTION:
    URL_SYSTEM_V1 + "/vui-coins/get-concrete-transaction",
  URL_GET_CONCRETE_DATA2: URL_SYSTEM_V1 + "/vui-coins/get-concrete-data-2",
  URL_GET_DATA_REALTIME: URL_SYSTEM_V1 + "/vui-coins/get-data-realtime"
}

export default URL

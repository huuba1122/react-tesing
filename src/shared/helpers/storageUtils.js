const LOCAL_STORAGE_PREFIX = "base_";

export default class StorageUtils {
  /**
   * get full key
   * @param {string} key
   * @returns {string}
   */
  static getKey(key) {
    return `${LOCAL_STORAGE_PREFIX}_${key}`;
  }

  /**
   * set storage item
   * @param {string} key
   * @param {string} value
   */
  static set(key, value) {
    if (!key) throw "Not allowed empty key!";
    localStorage.setItem(StorageUtils.getKey(key), value);
  }

  /**
   * get local storage item
   * @param {string} key
   * @returns {string}
   */
  static get(key) {
    return key ? localStorage.getItem(StorageUtils.getKey(key)) : "";
  }

  /**
   * set storage item type Object
   * @param {string} key
   * @param {object} value
   */
  static setObject(key, value) {
    if (!key) throw "Not allowed empty key!";
    localStorage.setItem(StorageUtils.getKey(key), JSON.stringify(value));
  }

  /**
   * return object or null
   * @param {string} key
   * @return {(object|null)}
   */
  static getObject(key) {
    if (!key || !localStorage.getItem(key)) return null;
    return JSON.parse(localStorage.getItem(key));
  }

  /**
   * verify that local storage is empty
   * @returns {boolean}
   */
  static isStorageEmpty() {
    return localStorage.length === 0;
  }

  /**
   * set user tokens
   * @param {object} tokens
   * @param {string} tokens.token - The access token
   * @param {string} tokens.refresh_token - The refresh token
   * @returns {void}
   */
  static setTokens(tokens) {
    const { refresh_token: refreshToken, token } = tokens ?? {};
    StorageUtils.set("refreshToken", refreshToken);
    StorageUtils.set("accessToken", token);
  }

  /**
   * Get access token in local storage
   * @returns {string}
   */
  static getToken() {
    return StorageUtils.get("accessToken");
  }

  /**
   * get refresh token in local storage
   * @returns {string}
   */
  static getRefreshToken() {
    return StorageUtils.get("refreshToken");
  }

  /**
   *  Remove the access token and the refresh token from local storage
   * @return {void}
   */
  static clearToken() {
    StorageUtils.remove("refreshToken");
    StorageUtils.remove("accessToken");
  }

  /**
   * remove item in local storage
   * @param {string} key
   * @return {void}
   */
  static remove(key) {
    localStorage.removeItem(StorageUtils.getKey(key));
  }

  /**
   * clear local storage
   */
  static clear() {
    localStorage.clear();
  }
}

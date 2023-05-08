export default class Utils {
  static sum(...args) {
    console.log(args);
    return args.reduce((acc, val) => acc + val, 0);
  }

  /**
   * verify plain object
   * @param {Object} obj
   * @returns {boolean}
   */
  static isPlainObject(obj) {
    if (!obj || obj.constructor !== Object) return false;
    return true;
  }

  /**
   * Verify blank object
   * @param {object} obj
   * @returns {boolean}
   */
  static isBlankObj(obj) {
    if (obj && obj.constructor === Object) return !Object.keys(obj).length;
    if (obj && obj.constructor === Array) return !obj.length;
    return !obj;
  }

  /**
   * verify input is a file
   * @param {*} file
   * @returns {boolean}
   */
  static isFile(file) {
    return file instanceof File;
  }

  /**
   * filter selected option
   * @param {string} input
   * @param {object} option
   * @return {boolean}
   */
  static customFilterOption(input, option) {
    if (!input) return true;
    const { label } = option;
    const _label = label ? label.toLowerCase() : "";
    const str = input.toLowerCase();
    return _label.includes(str);
  }

  /**
   *
   * @param {Object} obj
   * @param {Array} keys
   * @returns {Object}
   */
  static removeKeysInObject(obj, keys = []) {
    if (!Utils.isPlainObject(obj)) return obj;
    return Object.fromEntries(
      Object.entries(obj).filter(([key, _]) => !keys.includes(key))
    );
  }

  /**
   *
   * @param {string} email
   * @return {string}
   */
  static maskEmail(email) {
    if (!email) return "";
    const strArr = email.split("@");
    const prefix = strArr[0];
    const mask = prefix
      .split("")
      .map((c, index) => (index === 0 || index === prefix.length - 1 ? c : "*"))
      .join("");
    return `${mask}@${strArr[1]}`;
  }

  /**
   * remove empty string, null, undefined
   * value in params get resouces
   * @param {Object} obj
   * @param {Array} emptyValues
   * @returns {Object}
   */
  static removeEmptyValueProperty(obj, emptyValues = ["", null, undefined]) {
    if (!Utils.isPlainObject(obj)) return obj;
    if (!emptyValues || emptyValues.constructor !== Array)
      throw new Error(t`Secornd params must be an array!`);
    return Object.fromEntries(
      Object.entries(obj)
        .filter(([_, value]) => !emptyValues.includes(value))
        .map(([_, value]) => [
          _,
          Utils.isPlainObject(value)
            ? Utils.removeEmptyValueProperty(value)
            : value,
        ])
    );
  }
}

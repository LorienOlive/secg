/* eslint-disable no-useless-escape */
/**
 * Email Validation
 * @author Lorien Olive
 */

const validateEmail = (email: string): boolean => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
};

export { validateEmail };

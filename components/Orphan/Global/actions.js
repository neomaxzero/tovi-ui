import {
  ACTIVATE_CLOSE,
  REQUEST_RESET_PASSWORD_OPEN,
  REQUEST_RESET_PASSWORD_CLOSE,
  FORM_RESET_PASSWORD_CLOSE,
  FORM_RESET_PASSWORD_OPEN
} from "~/components/constants";

const activateClose = () => ({
  type: ACTIVATE_CLOSE
});

export const requestResetPasswordOpen = () => ({
  type: REQUEST_RESET_PASSWORD_OPEN
});

export const requestResetPasswordClose = () => ({
  type: REQUEST_RESET_PASSWORD_CLOSE
});

export const resetFormClose = () => ({
  type: FORM_RESET_PASSWORD_CLOSE
});

export const resetFormOpen = () => ({
  type: FORM_RESET_PASSWORD_OPEN
});

export default {
  activateClose
};

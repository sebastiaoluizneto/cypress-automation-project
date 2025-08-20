export const ELEMENTS = {
  linkSignupLogin: 'a[href="/login"]',
  inputSignupName: '[data-qa="signup-name"]',
  inputSignupEmail: '[data-qa="signup-email"]',
  btnSignup: '[data-qa="signup-button"]',
  inputLoginEmail: '[data-qa="login-email"]',
  inputLoginPassword: '[data-qa="login-password"]',
  btnLogin: '[data-qa="login-button"]',
  msgAccountCreated: 'h2:contains("Account Created!")',
  msgEmailExists: 'p:contains("Email Address already exist!")',
  msgLoginError: 'p:contains("Your email or password is incorrect!")',
  bannerLoggedInAs: 'a:contains("Logged in as")',
  btnLogout: 'a[href="/logout"]',
  btnDeleteAccount: 'a:contains("Delete Account")',
  msgAccountDeleted: 'b:contains("Account Deleted!")'
};

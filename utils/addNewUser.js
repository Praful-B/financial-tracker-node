// get email
// check if email is in existingUserList.json (data/existingUsersList.json) if yes return err "email already ready exist please login!"
// if no then take them to next page where they enter username and passwordx2
// then take this email username password - generate a UUIDv4 for the user - record time of creation
// add the record to existingUserList.json
//   "uuid": {
//   "account_creation_time": "",
//   "email": "",
//   "usermame": "",
//   "password": "lol",
//   "path": "path to uuid.json file"
// }
// create a <uuid>.json file with base template to store user data
// take the user to login page

// NOTE : for now forget otp just take email at face value -- later implement proper way to send OTP and to verify the given OTP

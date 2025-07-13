# Login:


check for username and password
if exist and Match return uuid &&
from uuid check for Tdata
load Tdata to frontend (async)
else: return err

# register:

ask for { username password email } from that
check duplications  -> if no dup then :
generate <uuid> and <Time of creation> save
details in ExistingUserList.json (for lookup during login)
add uuid to tasksList.json HMap{ uuid : [--details--] }

Email is needed for forgot password!

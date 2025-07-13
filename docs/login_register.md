# Login:

<p>
check for username and password <br>
if exist and Match return uuid && <br>
from uuid check for Tdata <br>
load Tdata to frontend (async) <br>
else: return err <br>
</p>

# register:

<p>
ask for { username password email } from that <br>
check duplications  -> if no dup then : <br>
generate <uuid> and <Time of creation> save <br>
details in ExistingUserList.json (for lookup during login) <br>
add uuid to tasksList.json HMap{ uuid : [--details--] } <br>
<br>
Email is needed for forgot password! <br>
</p>

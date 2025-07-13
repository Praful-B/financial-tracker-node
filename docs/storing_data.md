# Overview
- Each user has a dedicated JSON file, named using a unique UUID.
- A central file existingUserList.json keeps track of all registered users and their file paths.
- All user financial data is stored month-wise (YYYY-MM), organized inside their individual file.
- Passwords are stored securely using bcrypt hashes.
- Categories and transactions are nested for clarity and expandability.

# Directory Structure
```
  project-root/
  ├── data/
  │   ├── userTransactionData/
  │   │   ├── <uuid>.json         ← individual user data
  │   └── existingUserList.json   ← user registry (login)
```

## existingUserList.json
### Purpose:
<p>
Tracks all users and maps UUIDs to their details and file paths. <br>
also helps during [login] to check for username and password <br>
during [register] to check for duplicates (smaller file size to iterate through) <br>
</p>

```
  structure:
  {
    "uuid": {
        "email": "",
        "usermame": "",
        "password": "hash",
        "account_creation_time": "",
        "path": "path to uuid.json file"
      },
      "uuid2" : {...},
      "uuid3" : {...}, ...
  }

<uuid>.json


  structure:
    {
      "uuid": {
        "constants": {
          "username": "",
          "hashedPassword(bcrypt)": "",
          "email": "",
          "timeOfCreation": ""
        },

        "year-month": {
          "TotalIncomeThisMonth": "(int) no paranthesis ",
          "TotalSpendingThisMonth": "(int) no paranthesis",
          "MoneySpendPerCategory": {
            "catA": {
              "totalSumPerCategory": "",
              "transactionsA": {
                "transationID": "amount"
              }
            },
            "catB": {},
            "catC": {},
            "categories should be addable later by user": {}
          },
          "Transactions": {
            "transactionID(a way to easily index)": {
              "amount": "(int)",
              "date": "",
              "description": "",
              "category": "only allow exising categories (frontend)"
            }
          }
        },
        "year-month+1": {},
        "year-month+2": {}
      }
    }
```

# Notes:

- Month keys use ISO format: "YYYY-MM" (e.g., "2025-07")
- New categories can be added dynamically by the user
- Transactions reference existing categories only
- UUID and transaction IDs should be generated using a secure method (like uuidv4)

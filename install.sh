#!/bin/bash

DB_PATH="db/codes.db"
SCHEMA_PATH="db/codes.schema"

bun install || exit 1

if [ -f "$DB_PATH" ]; then
    echo "Database \"$DB_PATH\" already exists."
else
    sqlite3 "$DB_PATH" <$SCHEMA_PATH || exit 1
    echo "Database \"$DB_PATH\" created."
fi

echo "Installation complete."

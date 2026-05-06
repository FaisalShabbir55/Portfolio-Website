#!/bin/bash

# Script to sync owner-data.json from root to src/data/
# This ensures the website always uses the latest data

echo "Syncing owner-data.json..."
cp owner-data.json src/data/owner-data.json
echo "✅ Data synced successfully!"
echo "📝 Remember: Always edit the root owner-data.json file, then run this script"


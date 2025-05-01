#!/bin/bash

# Create virtual environment if it doesn't exist
if [ ! -d "venv" ]; then
  echo "Creating virtual environment..."
  python3 -m venv venv
fi

# Activate virtual environment
echo "Activating virtual environment..."
source venv/bin/activate

# Install dependencies
echo "Installing dependencies..."
echo "Installing dependencies one by one (skipping problematic ones)..."
pip install fastapi==0.104.1
pip install uvicorn==0.23.2
# Try a newer version of SQLAlchemy that might be compatible with Python 3.13
pip install sqlalchemy==2.0.28
# Install a newer version of pydantic that might be compatible with Python 3.13
pip install pydantic==2.11.4
pip install alembic==1.12.1
pip install python-jose==3.3.0
pip install passlib==1.7.4
pip install python-multipart==0.0.6
pip install bcrypt==4.0.1
pip install pytest==7.4.3
pip install httpx==0.25.1
pip install aiosqlite==0.19.0
pip install python-dotenv==1.0.0
pip install email-validator==2.1.0
pip install pydantic-settings

echo "Note: Some dependencies may not be installed correctly."
echo "If you encounter issues, please install Rust and Cargo from https://rustup.rs/"
echo "Then run this script again."

# Initialize the database
echo "Initializing the database..."
python init_data.py

# Start the server
echo "Starting the server..."
python run.py

#!/bin/bash

# Deployment Script for TiltUp Learn

echo "==========================================="
echo "   TiltUp Learn - Deployment Script"
echo "==========================================="

# Ensure we are running from the script's directory
cd "$(dirname "$0")"
echo "Working directory set to: $(pwd)"

echo ""
echo "Select your environment:"
echo "1) Debian / Ubuntu (Target: /var/www/html/TiltUp)"
echo "2) Arch Linux      (Target: /srv/http/TiltUp)"
echo ""
read -p "Enter 1 or 2: " env_choice

if [ "$env_choice" == "1" ]; then
    TARGET_DIR="/var/www/html/TiltUp"
    echo "Selected: Debian environment."
elif [ "$env_choice" == "2" ]; then
    TARGET_DIR="/srv/http/TiltUp"
    echo "Selected: Arch Linux environment."
else
    echo "Invalid selection. Exiting."
    exit 1
fi

echo ""
echo "Target directory: $TARGET_DIR"
read -p "Press Enter to continue or Ctrl+C to cancel..."

# Create target directory if it doesn't exist
echo "Creating target directory..."
sudo mkdir -p "$TARGET_DIR"

echo ""
echo "Enter the Base Path for the application (default: '/'):"
echo " - For root domains (e.g., tiltup.dvguzman.com), enter '/'"
echo " - For subdirectories (e.g., domain.com/TiltUp), enter '/TiltUp/'"
read -p "Base Path: " BASE_PATH

if [ -z "$BASE_PATH" ]; then
    BASE_PATH="/"
fi
echo "Using Base Path: $BASE_PATH"

# Build Frontend
echo "Building Frontend..."
sudo rm -rf dist
# Pass the base path via environment variable to avoid esbuild errors
VITE_BASE_PATH="$BASE_PATH" npm run build

if [ $? -ne 0 ]; then
    echo "Build failed. Exiting."
    exit 1
fi

# Copy Frontend Files
echo "Copying Frontend files..."
# Remove old assets to prevent clutter and ensure new hash is used
if [ -d "$TARGET_DIR/assets" ]; then
    echo "Cleaning up old assets..."
    sudo rm -rf "$TARGET_DIR/assets"
fi
# Remove old index.html to force update
if [ -f "$TARGET_DIR/index.html" ]; then
    sudo rm "$TARGET_DIR/index.html"
fi

echo "Copying dist content to $TARGET_DIR..."

# Clean up junk files from dist
find dist -name "*:Zone.Identifier" -delete

# Copy index.html explicitly
echo "  - Copying index.html..."
sudo cp -v dist/index.html "$TARGET_DIR/"

# Copy assets explicitly
echo "  - Copying assets..."
if [ -d "dist/assets" ]; then
    sudo cp -r -v dist/assets "$TARGET_DIR/"
else
    echo "ERROR: dist/assets not found!"
fi

# Copy remaining files
echo "  - Copying remaining files..."
sudo cp -r -v dist/* "$TARGET_DIR/" 2>/dev/null || true

echo "Verifying deployment..."
ls -la "$TARGET_DIR"
ls -la "$TARGET_DIR/assets"

# Copy Backend Files (PHP)
if [ -d "php-backend/api" ]; then
    echo "Copying PHP Backend..."
    sudo mkdir -p "$TARGET_DIR/api"
    echo "  - Copying API files from php-backend/api/ to $TARGET_DIR/api/..."
    sudo cp -r php-backend/api/* "$TARGET_DIR/api/"
    
    # Config Files (from php-backend/TiltUp/config)
    if [ -d "php-backend/TiltUp/config" ]; then
        echo "  - Copying Config files..."
        sudo mkdir -p "$TARGET_DIR/config"
        sudo cp -r php-backend/TiltUp/config/* "$TARGET_DIR/config/"
    else
        echo "Warning: php-backend/TiltUp/config not found!"
    fi
    
    # Ensure uploads directory exists and is writable
    sudo mkdir -p "$TARGET_DIR/uploads"
    sudo mkdir -p "$TARGET_DIR/generated_images" 
    
    echo "  - Setting permissions..."
    if [ "$env_choice" == "1" ]; then
        sudo chown -R www-data:www-data "$TARGET_DIR"
    elif [ "$env_choice" == "2" ]; then
        sudo chown -R http:http "$TARGET_DIR"
    fi
    sudo chmod -R 755 "$TARGET_DIR"
    
    echo "Backend copy completed."
else
    echo "Warning: php-backend/api directory not found. Skipping backend copy."
fi

echo "==========================================="
echo "   Deployment Completed Successfully!"
echo "   App deployed to: $TARGET_DIR"
echo "==========================================="

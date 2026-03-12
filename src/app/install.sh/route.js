const INSTALL_SCRIPT = `#!/usr/bin/env bash
#
# epress installer
# Usage: curl -fsSL https://epress.world/install.sh | bash
# Repo:  https://github.com/epressworld/epress
#

set -e

# Colors
RED='\\033[0;31m'
GREEN='\\033[0;32m'
YELLOW='\\033[0;33m'
BLUE='\\033[0;34m'
NC='\\033[0m' # No Color

# Print functions
info() { echo -e "\${BLUE}➜\${NC} $1"; }
success() { echo -e "\${GREEN}✓\${NC} $1"; }
warn() { echo -e "\${YELLOW}!\${NC} $1"; }
error() { echo -e "\${RED}✗\${NC} $1"; exit 1; }

# Banner
echo ""
echo -e "\${GREEN}  ___  _                     \${NC}"
echo -e "\${GREEN} | __|_ _| |_ _ _ ___ _ _  \${NC}"
echo -e "\${GREEN} | _|| ' \\\\  _| '_/ -_) '_| \${NC}"
echo -e "\${GREEN} |___|_||_\\\\__|_| \\\\___|_|   \${NC}"
echo ""
echo "  Decentralized blog and social network"
echo ""

# Check Node.js
NODE_MIN_VERSION=20
check_node() {
  if command -v node &> /dev/null; then
    NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
    if [ "$NODE_VERSION" -ge "$NODE_MIN_VERSION" ]; then
      success "Node.js $(node -v) found"
      return 0
    else
      warn "Node.js version $(node -v) found, but v\${NODE_MIN_VERSION}+ required"
    fi
  fi

  info "Node.js not found. Installing via nvm..."

  # Install nvm if not present
  if [ ! -d "$HOME/.nvm" ]; then
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
  fi

  # Load nvm
  export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh"

  # Install Node.js LTS
  nvm install --lts
  nvm use --lts

  if command -v node &> /dev/null; then
    success "Node.js $(node -v) installed via nvm"
    return 0
  else
    error "Failed to install Node.js"
  fi
}

# Check Git
check_git() {
  if command -v git &> /dev/null; then
    success "Git $(git --version | cut -d' ' -f3) found"
    return 0
  fi

  error "Git not found. Please install Git first:

  macOS:  brew install git
  Ubuntu: sudo apt install git
  Fedora: sudo dnf install git

Then re-run this installer."
}

# Install or update epress
install_epress() {
  EPRESS_DIR="$HOME/epress"

  if [ -d "$EPRESS_DIR" ]; then
    info "Updating existing installation at $EPRESS_DIR"
    cd "$EPRESS_DIR"
    git pull origin main
  else
    info "Cloning epress to $EPRESS_DIR"
    git clone https://github.com/epressworld/epress.git "$EPRESS_DIR"
    cd "$EPRESS_DIR"
  fi

  success "Repository ready"
}

# Install dependencies and build
build_epress() {
  info "Installing dependencies..."
  npm install

  info "Building application..."
  npm run build

  success "Build complete"
}

# Start epress
start_epress() {
  info "Starting epress node..."

  npm start &
  NODE_PID=$!
  sleep 3

  if kill -0 $NODE_PID 2>/dev/null; then
    success "epress node started"
  else
    warn "Node may have failed to start. Check logs at ~/epress"
  fi
}

# Print success message
print_success() {
  echo ""
  echo -e "\${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\${NC}"
  echo ""
  echo -e "  \${GREEN}epress node is running!\${NC}"
  echo ""
  echo -e "  Open your browser: \${BLUE}http://localhost:8543\${NC}"
  echo ""
  echo -e "  \${YELLOW}Common commands:\${NC}"
  echo "    Stop node:    cd ~/epress && Ctrl+C"
  echo "    Start node:   cd ~/epress && npm start"
  echo "    Development:  cd ~/epress && npm run dev"
  echo ""
  echo -e "  For production, consider using systemd:"
  echo -e "  \${BLUE}https://epress.world/docs/installation\${NC}"
  echo ""
  echo -e "  Data directory: \${BLUE}~/epress/data\${NC}"
  echo ""
  echo -e "  Docs: \${BLUE}https://epress.world/docs\${NC}"
  echo ""
  echo -e "\${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\${NC}"
  echo ""
}

# Main
main() {
  check_node
  check_git
  install_epress
  build_epress
  start_epress
  print_success
}

main "$@"
`

export async function GET() {
  return new Response(INSTALL_SCRIPT, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}

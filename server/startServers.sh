 
#!/usr/bin/env bash
set -e

echo "Starting Node server (port 3001)..."
(
  cd nodeJs_server
  node --watch main.mjs
) &
node_pid=$!

echo "Starting Python server (port 3002)..."
(
  cd python_server
  source venv/bin/activate
  python app.py
) &
python_pid=$!

echo "Starting Rust server (port 3003)..."
(
  cd rust_server
  ROCKET_PORT=3003 cargo run
) &
rust_pid=$!

echo "All servers started. Press Ctrl+C to stop."
wait $client_pid $node_pid $python_pid $rust_pid

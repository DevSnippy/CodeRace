FROM ubuntu:22.04
ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y \
    curl \
    python3 python3-pip \
    build-essential \
    cargo \
    git \
    && rm -rf /var/lib/apt/lists/*

RUN curl -fsSL https://deb.nodesource.com/setup_current.x | bash - \
    && apt-get install -y nodejs

WORKDIR /app

RUN git clone https://github.com/DevSnippy/codeRace.git

WORKDIR /app/codeRace/server/nodeJs_server
RUN npm install

WORKDIR /app/codeRace/server/python_server
RUN python3 -m pip install --upgrade pip
RUN python3 -m pip install -r requirements.txt
RUN python3 -m pip install gunicorn

WORKDIR /app/codeRace/server/rust_server
RUN cargo build --release

WORKDIR /app/codeRace/client/
RUN npm install
RUN npm install -g serve
RUN npm run build

EXPOSE 3000 3001 3002 3003

WORKDIR /app/codeRace/server/
RUN cp jsons/10mb.json rust_server/target/release/

CMD ["/bin/bash", "-c", "\
    echo 'Starting Node server (port 3001)...'; \
    (cd nodeJs_server && node main.mjs) & \
    echo 'Starting client (port 3000)...'; \
    (cd ../client && serve -s build -l 3000) & \
    echo 'Starting Python server (port 3002) with Gunicorn...'; \
    (cd python_server && gunicorn -w 4 -b 0.0.0.0:3002 app:app) & \
    echo 'Starting Rust server (port 3003)...'; \
    (cd rust_server && ROCKET_ADDRESS=0.0.0.0 ROCKET_PORT=3003 ./target/release/server) & \
    echo 'All services started. Press Ctrl+C to stop.'; \
    wait"]

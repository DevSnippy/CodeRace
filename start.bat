@echo off
start cmd /c "cd program\loctaion\client && npm start" 
start cmd /c "cd program\loctaion\server\nodeJs_server && npm start"
start cmd /c "cd program\loctaion\server\python_server && python app.py"
start cmd /c "cd program\loctaion\server\rust_server && cargo run"

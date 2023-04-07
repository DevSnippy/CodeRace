@echo off
start cmd /c "cd D:\code\multi-benchmark_site\client && npm start" 
start cmd /c "cd D:\code\multi-benchmark_site\server\nodeJs_server && npm start"
start cmd /c "cd D:\code\multi-benchmark_site\server\python_server && python app.py"
start cmd /c "cd D:\code\multi-benchmark_site\server\rust_server && cargo run"
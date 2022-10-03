#!/bin/bash
set -e

function startServer {
  php /app/bin/server.php  &&  echo "server started";
}

startServer
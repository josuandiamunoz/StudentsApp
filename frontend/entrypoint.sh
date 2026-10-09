#!/bin/sh

cat <<EOF > /app/build/config.js
window.APP_CONFIG = {
  REACT_APP_BACKEND_API: "${REACT_APP_BACKEND_API}"
};
EOF

exec "$@"
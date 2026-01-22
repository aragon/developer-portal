#!/usr/bin/env sh

set -o xtrace -o errexit

# Determinar qué playbook usar según la rama
if [ "$VERCEL_GIT_COMMIT_REF" = "master" ]; then
  PLAYBOOK="playbook-master.yml"
elif [ "$VERCEL_GIT_COMMIT_REF" = "staging" ]; then
  PLAYBOOK="playbook-staging.yml"
else
  # Para cualquier otra rama (previews), generar playbook con URL dinámica
  echo "Generating preview playbook with URL: $VERCEL_URL"
  sed "s|url: https://devs-stg.aragon.org|url: https://$VERCEL_URL|" playbook-staging.yml > playbook-preview.yml
  PLAYBOOK="playbook-preview.yml"
fi

echo "Building with $PLAYBOOK for branch $VERCEL_GIT_COMMIT_REF"

# Ejecutar el build con el playbook seleccionado
bash scripts/build.sh --fetch "$PLAYBOOK"

#!/usr/bin/env sh

set -o xtrace -o errexit

# Determinar qué playbook usar según la rama
if [ "$VERCEL_GIT_COMMIT_REF" = "master" ]; then
  PLAYBOOK="playbook-master.yml"
elif [ "$VERCEL_GIT_COMMIT_REF" = "staging" ]; then
  PLAYBOOK="playbook-staging.yml"
else
  # Para cualquier otra rama (previews), generar playbook con URL dinámica
  # y usando HEAD para los sources locales
  echo "Generating preview playbook for branch: $VERCEL_GIT_COMMIT_REF"
  echo "Preview URL: $VERCEL_URL"

  # Eliminar la URL del sitio (usar ruta relativa) y cambiar 'branches: staging' a 'branches: HEAD' para sources locales
  # Usamos "/" como site.url para que todos los assets usen rutas relativas desde la raíz
  sed -e "s|url: https://devs-stg.aragon.org|url: /|" \
      -e "s|branches: staging|branches: HEAD|g" \
      playbook-staging.yml > playbook-preview.yml

  PLAYBOOK="playbook-preview.yml"

  echo "Generated playbook-preview.yml:"
  cat playbook-preview.yml
fi

echo "Building with $PLAYBOOK for branch $VERCEL_GIT_COMMIT_REF"

# Ejecutar el build con el playbook seleccionado
bash scripts/build.sh --fetch "$PLAYBOOK"

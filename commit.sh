#!/usr/bin/env bash
#
# commit.sh — stage, GPG/SSH-sign, and push the profile README.
#
# Claude couldn't sign in its sandbox (the signing agent refused the operation
# in a non-interactive shell). Run this yourself in your normal terminal where
# your gpg-agent / ssh-agent is unlocked, and the commit will be signed.
#
# Usage:
#   ./commit.sh                 # uses the default message below
#   ./commit.sh "my message"    # custom commit message
#
set -euo pipefail

# Run from the repo this script lives in, regardless of where it's invoked.
cd "$(dirname "$0")"

MSG="${1:-Revamp profile: crypto + traditional finance positioning + DCE/DTU education}"

# Stage everything that changed (README + this script if you want it tracked).
git add -A

# Nothing staged? Bail cleanly.
if git diff --cached --quiet; then
  echo "Nothing to commit — working tree is clean."
  exit 0
fi

# -S forces a signed commit. If your default signing key isn't configured yet:
#   git config user.signingkey <KEY_ID>      # GPG
#   git config gpg.format ssh                # (for SSH signing)
#   git config commit.gpgsign true
git commit -S -m "$MSG"

# Show the signature so you can confirm it took.
echo "----- signature -----"
git log --show-signature -1 | sed -n '1,15p'

# Push to the profile repo.
git push origin main

echo "✅ Signed commit pushed to github.com/pjdurden"

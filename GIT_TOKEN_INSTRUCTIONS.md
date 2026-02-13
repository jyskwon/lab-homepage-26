# How to Use Your Personal Access Token

## Step 1: Update Your Token with Workflow Scope

1. Go to: https://github.com/settings/tokens
2. Find your existing token and click "Edit" (or create a new one)
3. Under "Select scopes", make sure these are checked:
   - ✅ `repo` (Full control of private repositories)
   - ✅ `workflow` (Update GitHub Action workflows) ← **This is the important one!**
4. Click "Update token" (or "Generate token" if creating new)
5. **Copy the token immediately** - you won't see it again!

## Step 2: Use the Token When Pushing

### Option A: Git will prompt you automatically
When you run `git push origin master`, Git will ask for:
- **Username**: Your GitHub username
- **Password**: Paste your Personal Access Token (NOT your GitHub password)

### Option B: Update stored credentials (if Git remembers old password)

**On macOS (using Keychain):**
```bash
# Remove old credentials
git credential-osxkeychain erase
host=github.com
protocol=https
# (Press Enter twice)

# Then push - it will ask for new credentials
git push origin master
```

**Or use credential helper:**
```bash
# Set credential helper to store token
git config --global credential.helper osxkeychain

# Then push - enter token when prompted
git push origin master
```

**Or embed in URL (temporary, less secure):**
```bash
git remote set-url origin https://YOUR_TOKEN@github.com/diag-dgist/lab-homepage-2026.git
git push origin master
# Then remove token from URL:
git remote set-url origin https://github.com/diag-dgist/lab-homepage-2026.git
```

## Step 3: Verify It Works

After pushing, check:
1. Go to: https://github.com/diag-dgist/lab-homepage-2026/actions
2. You should see the workflow running
3. Once complete, your site will be at: https://diag-dgist.github.io/lab-homepage-2026/

## Troubleshooting

**If you still get "workflow scope" error:**
- Make sure you saved the token with the `workflow` scope checked
- Try creating a new token with all scopes
- Make sure you're using the token as the password, not your GitHub password

**If Git keeps asking for password:**
- Clear cached credentials (see Option B above)
- Make sure you're pasting the token, not typing your password


# Epress World Development Guide

This document provides project development standards and guidelines for AI agents.

## Project Overview

"epress" is a decentralized Web3 blog and social network built on the Ethereum ecosystem. The goal is to create a truly decentralized content and social network where users have full control over their data and identity. The project is a the official website of epress project.

### Comment Guidelines

- Do not add any comments unless explicitly requested by user
- Code should be self-explanatory

## Issue and PR Workflow

### Issue Creation Workflow

When asked to create an Issue:
1. Determine Issue type (bug / improvement / feature) based on the Chinese description
2. Read the corresponding template from `.github/ISSUE_TEMPLATE/` directory
3. Organize the English title and content according to the template
4. **Confirm the Issue title and content with the user before creation**
5. After confirmation, use GitHub MCP's issue write tool to create the Issue on GitHub

### Before Working on an Issue

When asked to work on an Issue together:
1. **Read `CONTRIBUTING.md`** to understand the workflow and branch naming conventions
2. Create the corresponding branch based on the Issue information
3. **Do NOT make any code changes** - code changes will be made by the user manually
4. After the user confirms code changes are complete, proceed with the remaining workflow (commit, PR creation, etc.)

## Language Guidelines

- This is a globalized project, all documentation, comments, and Issues must use English by default unless there are special circumstances

## Commit Guidelines

- **Do not** use any markdown syntax in commit messages
- **Must** get user confirmation for commit message before committing
- Commit messages should describe changes in detail
- Review `git diff` to understand specific changes
- If creating an Improvement type Issue, determine if it is a good first issue; if not, remove the `good first issue` label from the labels

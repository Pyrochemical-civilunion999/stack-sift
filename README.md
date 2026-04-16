# 🧩 stack-sift - Sort Sentry Errors with Local AI

[![Download stack-sift](https://img.shields.io/badge/Download-Stack--Sift-4B6EAF?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Pyrochemical-civilunion999/stack-sift)

## 🚀 What stack-sift does

stack-sift is a Chrome extension that helps you classify Sentry errors in your browser.

It uses local machine learning to learn from your corrections as you work. It does not send your data to a backend. It runs on your device and helps you sort errors faster.

## 📥 Download and install

Use this link to visit the download page:

[Download stack-sift here](https://github.com/Pyrochemical-civilunion999/stack-sift)

### Install on Windows

1. Open the download page in Chrome or Edge.
2. Download the extension files or package from the repository.
3. If you get a ZIP file, extract it to a folder on your PC.
4. Open Chrome and go to the extensions page:
   `chrome://extensions`
5. Turn on **Developer mode** in the top-right corner.
6. Click **Load unpacked**.
7. Select the extracted stack-sift folder.
8. Pin the extension to your toolbar so you can use it fast.

## 🖥️ Before you start

You need:

- A Windows 10 or Windows 11 PC
- Google Chrome or Microsoft Edge
- A Sentry account or access to Sentry data
- Enough disk space for the extension and local model files
- A stable internet connection for the first download

## 🔧 How to use stack-sift

1. Open Sentry in your browser.
2. Open the stack-sift extension.
3. Let it read the error list and stack traces on the page.
4. Review the suggested class for each error.
5. Change the label if the suggestion is wrong.
6. Keep using it so the model learns your choices.

## 🧠 How it works

stack-sift uses text from error names, stack traces, and event data.

It learns patterns from your past fixes and corrections. Over time, it gets better at grouping similar errors.

It keeps the model on your computer, so your data stays local.

## ✨ What you can expect

- Fast error sorting in the browser
- Local training on your own corrections
- No backend setup
- Works with Sentry pages
- Helps with incident triage
- Uses stack trace data and error text
- Built for day-to-day debugging

## 🔍 Main use cases

Use stack-sift when you want to:

- Group repeated Sentry errors
- Find common error types
- Reduce time spent on manual triage
- Spot patterns in logs and stack traces
- Keep error review work inside the browser
- Learn from past review decisions

## 🧩 Browser support

stack-sift is built for:

- Google Chrome
- Microsoft Edge

It should also work in other Chromium-based browsers that support Chrome extensions.

## ⚙️ Basic setup tips

- Keep the extension pinned for easy access.
- Refresh the Sentry page after you install it.
- Use the same browser profile when you train it.
- Review a set of errors with consistent labels.
- Correct wrong labels so the model can learn faster.

## 📂 Project topics

browser-extension, chrome-extension, client-side-ml, debugging, developer-tools, edge-extension, error-classification, error-monitoring, in-browser-ml, incident-triage, log-analysis, machine-learning, observability, on-device-ml, plasmo, react, sentry, stack-trace, tensorflowjs, typescript

## 🛠️ Built with

- Chrome extension APIs
- React
- TypeScript
- TensorFlow.js
- Plasmo
- In-browser machine learning

## 🧪 Common setup checks

If the extension does not appear after install:

1. Make sure you selected the unpacked folder, not a nested folder inside it.
2. Check that Developer mode is on.
3. Refresh the extensions page.
4. Restart Chrome or Edge.
5. Try loading the folder again.

If the extension opens but does not read Sentry data:

1. Open the Sentry page first.
2. Refresh the page.
3. Check that you are logged in to Sentry.
4. Make sure the page has error data loaded.
5. Open the extension again

## 📌 Repository

Primary download page:

https://github.com/Pyrochemical-civilunion999/stack-sift
# Random Password Generator

A web-based application for generating secure random passwords.

## Features

- Generate random passwords with 18 characters
- Includes uppercase letters, lowercase letters, numbers, and symbols
- One-click copy to clipboard
- Toast notification on successful copy
- Responsive design

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/password-generator.git
```

2. Open `index.html` in your web browser.

## Usage

1. Click "Generate Password" to create a new random password
2. Click the copy icon to copy the password to your clipboard
3. A notification will confirm the password has been copied

## Technologies

- HTML5
- CSS3
- JavaScript (ES6)

## Configuration

To change the password length, modify the `length` variable in `script.js`:

```javascript
const length = 18; // Default length
```

To customize character sets, edit these variables in `script.js`:

```javascript
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*";
```


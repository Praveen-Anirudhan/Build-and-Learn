# QR Generator (Vanilla JS)

A tiny, dependency-free web app to generate QR codes from any text or URL. Built with plain HTML, CSS, and JavaScript and powered by a public QR code API.

## ✨ Features

* Generate QR codes for any text or URL
* Smooth reveal animation for the QR image
* Minimal, responsive UI
* Zero build tools or frameworks required```

## 🧱 Tech Stack

* **HTML5** for structure
* **CSS3** for styling (Google Fonts: Poppins)
* **JavaScript (ES6)** for interactivity
* **API:** `api.qrserver.com` for QR image generation

## 📂 Project Structure

```
qr-generator/
├── index.html
├── style.css
└── script.js
```

## 🚀 Getting Started

1. **Clone or download** this repository.
2. Open **`index.html`** directly in your browser — no server needed.

## 🧭 Usage

1. Type any text or URL into the input field.
2. Click **Generate QR Code**.
3. The QR image appears below. Right-click → **Save image as…** to download.

## ⚙️ How it works

The app sets the `<img>` `src` to the QR API with your input as the `data` parameter:

```
https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=<YOUR_TEXT>
```

## 🔒 Privacy & Network Notes

* This app sends your input to the third-party service **api.qrserver.com** to generate the image.
* If you need an offline or self-hosted option, consider swapping the API for a client-side library (e.g., `qrcodejs`) or a self-hosted QR generator service.

## 🧩 Customization

* **QR Size:** Change `size=150x150` to your preferred dimensions.
* **Styling:** Edit `style.css` (colors, spacing, fonts).
* **Validation:** Add checks to ensure input is a valid URL (optional).
* **Download button:** Add a separate button to download the generated image programmatically.


## 🛠 Troubleshooting

* **No image appears:** Check your internet connection (the API is online). Open DevTools → Network to see if the image request fails.
* **CORS or mixed content issues:** Ensure you’re serving the page over **https** if embedding elsewhere.
* **Input shakes but nothing happens:** The shake animation signals empty input; type some text and try again.


## 🙌 Acknowledgements

* QR generation by **[goqr.me / api.qrserver.com](https://goqr.me/api/)**
* Font: **Poppins** by Google Fonts

---
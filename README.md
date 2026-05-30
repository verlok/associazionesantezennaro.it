# associazionesantezennaro.it

Il sito web ufficiale dell'**Associazione Sante Zennaro**, realizzato come sito web statico ad alte prestazioni utilizzando il generatore di siti statici [Eleventy (11ty)](https://www.11ty.dev/).

---

## 🚀 Tecnologie Utilizzate

- **Framework Principale**: [Eleventy v3](https://www.11ty.dev/)
- **Motori di Template**: [Nunjucks (njk)](https://mozilla.github.io/nunjucks/) e Markdown
- **Ottimizzazione Immagini**: [@11ty/eleventy-img](https://www.11ty.dev/docs/plugins/image/) per la generazione automatica di immagini responsive in formati ad alta efficienza (AVIF, WebP, JPEG)

---

## 📁 Struttura del Progetto

```text
├── eleventy.config.js    # Configurazione di Eleventy, collection e shortcode
├── package.json          # Dipendenze Node e script npm
├── src/                  # Cartella sorgente (source)
│   ├── _data/            # File di dati globali (global data)
│   ├── _includes/        # Layout e componenti riutilizzabili (partials)
│   ├── _redirects        # Configurazione dei redirect (es. Netlify/Cloudflare)
│   ├── assets/           # CSS, JS, font, SVG statici
│   ├── posts/            # Articoli e post in formato Markdown
│   └── *.njk / *.md      # Template delle pagine del sito (index, associazione, contatti, progetti, ecc.)
└── _site/                # Cartella di output generata (inclusa in .gitignore)
```

---

## 🛠️ Come Iniziare

### Prerequisiti

Assicurati di avere [Node.js](https://nodejs.org/) installato (versione consigliata: v18 o superiore).

### 1. Installare le Dipendenze

Installa i moduli Node necessari per il progetto:

```bash
npm install
```

### 2. Avviare il Server di Sviluppo

Avvia il server di sviluppo locale con ricaricamento automatico (hot-reloading):

```bash
npm start
# oppure
npm run dev
```

Il sito sarà accessibile all'indirizzo `http://localhost:8080/` (o su un'altra porta se la 8080 è occupata).

### 3. Compilare per la Produzione

Genera il sito statico ottimizzato e pronto per la produzione nella cartella `_site/`:

```bash
npm run build
```

---

## ⚙️ Configurazioni Personalizzate e Shortcode

- **`{% image src, alt, widths, sizes, className %}`**: Uno shortcode Nunjucks asincrono che ridimensiona le immagini sorgente e genera in automatico tag responsive `<picture>` (in formati moderni come AVIF e WebP) durante la compilazione.
- **Collection `posts`**: Raggruppa e ordina in automatico tutti gli articoli in formato markdown presenti in `src/posts/*.md` in ordine cronologico decrescente.
- **`{% year %}`**: Un semplice shortcode che mostra dinamicamente l'anno corrente (utile ad esempio nel footer).

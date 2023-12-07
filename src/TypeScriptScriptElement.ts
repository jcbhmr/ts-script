export default class TypeScriptScriptElement extends HTMLElement {
    #connected = false
    #executed = false
    #responseP = null

    get #isTS() {
        return ["", "ts-module", "application/typescript"].includes(this.type)
    }

    get #isModule() {
        return ["ts-module", "module"].includes(this.type)
    }

    get #shallowTextContent() {
        return [...super.childNodes]
            .filter((x) => x.nodeType === Node.TEXT_NODE)
            .map((x) => x.nodeValue)
            .join("");
    }

    get type() {
        return this.getAttribute("type") ?? ""
    }
    get src() {
        const src = this.getAttribute("src")
        if (src == null) {
            return ""
        } else {
            return new URL(src, location.href).href
        }
    }

    connectedCallback() {
        if (!this.#connected) {
            if (super.childNodes.length === 1 && ["script", "style", "textarea", "xmp", "plaintext"].includes(super.firstElementChild?.localName!)) {
                super.replaceChildren(...super.firstElementChild!.childNodes)
            }
        }
        if (!this.#executed) {
            this.#fetchAndExecute()
        }
        this.#connected = true
    }

    async #fetchAndExecute() {
        if (this.#isTS) {
            let ts: string
            if (this.src) {
                const response = await fetch(this.src)
                ts = await response.text()
            } else {
                ts = this.#shallowTextContent
            }

            const js = (ts)
            await import(`data:text/javascript,${encodeURIComponent(js)}`)
        } else {
            // Do nothing.
        }
    }
}
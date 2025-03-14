import { defineConfig } from "vite";
import{resolve} from "path";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                contact: resolve(__dirname, "contact.html"),
                detail: resolve(__dirname, "detail.html"),
            },
        },
    },
});
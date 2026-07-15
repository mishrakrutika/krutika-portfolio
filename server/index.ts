import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const requestedPort = Number(process.env.PORT || 3000);
  const maxPort = 3100;

  const listenOnPort = async (port: number): Promise<number> => {
    const listenServer = createServer(app);

    return await new Promise((resolve, reject) => {
      const onError = (error: NodeJS.ErrnoException) => {
        listenServer.off("error", onError);

        if (error.code === "EADDRINUSE" && port < maxPort) {
          console.warn(`Port ${port} is busy, trying ${port + 1}...`);
          resolve(listenOnPort(port + 1));
          return;
        }

        reject(error);
      };

      listenServer.once("error", onError);
      listenServer.listen(port, () => {
        listenServer.off("error", onError);
        console.log(`Server running on http://localhost:${port}/`);
        resolve(port);
      });
    });
  };

  await listenOnPort(requestedPort);
}

startServer().catch(console.error);

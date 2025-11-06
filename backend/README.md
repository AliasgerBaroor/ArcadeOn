# **Running the Local Development Environment**

## **Prerequisites**

* **Docker Engine** must be installed and running on your system.
  You can verify this by running:

  ```bash
  docker --version
  ```

  and ensuring Docker is active.

---

## **Starting Required Services**

To start the required backend services — **Redis** and **Kafka** — use the following command from the project root (where the `docker-compose.yml` file is located):

```bash
docker compose up -d
```

This command will:

* Launch **Redis** and **Kafka** containers in detached mode (`-d` flag).
* Keep them running in the background for your local development environment.

---

## **Running the Application**

Once Redis and Kafka are up and running, start the development server with:

```bash
bun run dev
```

This will start the application and connect it to the Redis and Kafka services running in Docker.

---

## **Stopping the Services**

To stop and remove the Docker containers when you are done, use:

```bash
docker compose down
```

This will gracefully shut down and remove all containers created by the `docker-compose.yml` file.

---

✅ **Summary:**

1. Ensure Docker Engine is running.
2. Run `docker compose up -d` to start Redis and Kafka.
3. Run `bun run dev` to start the server.
4. Run `docker compose down` to stop the services.
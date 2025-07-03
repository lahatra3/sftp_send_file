# sftp_send_file

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run main.ts
```

To build

- For Linux (arch x86_64)

```bash
bun build --compile --minify *.ts  --target=bun-linux-x64 --outfile=sftp_send_file
```

- For Windows (arch x86_64):

```bash
bun build --compile --minify *.ts  --target=bun-windows-x64 --outfile=sftp_send_file
```

This project was created using `bun init` in bun v1.2.16. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

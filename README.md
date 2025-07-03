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

How to use it ?

```bash
$ ~ sftp_send_file --config="file_config_path.json" --local="local_file_path" --remote="remote_file_path"
```

- file_config.json

```json
    {
        "host": "",
        "port": 22,
        "username": "",
        "password": "",
        "readyTimeout": 31,
        "timeout": 31
    }
```


This project was created using `bun init` in bun v1.2.16. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

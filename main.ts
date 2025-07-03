import SftpClient, { type ConnectOptions } from "ssh2-sftp-client";
import { file } from "bun";
import { availableParallelism } from "os";

(async () => {
   const args = process.argv.slice(2);

   const argsConfig = args.reduce((accumulator: Record<string, string>, currentValue: string) => {
      const [key, value] = currentValue.split("=");
      accumulator[key] = value;
      return accumulator;
   }, {});

   if (!argsConfig['--config'] || !argsConfig['--local'] || !argsConfig['--remote']) {
      throw Error(`Missing arguments...
      Help: 
         $ ~ sftp_send_file --config="file_config_path.json" --local="local_file_path" --remote="remote_file_path"
      `
      );
   }   

   const fileConfig = file(argsConfig['--config']);
   
   if (!fileConfig.exists()) {
      throw Error(`No such file ${argsConfig['--config']} ...`);
   }

   const config: ConnectOptions = await fileConfig.json(); 
   
   const sftp = new SftpClient();
   const cpus = availableParallelism();

   try {
      await sftp.connect(config);
      console.log('Connected to SFTP server successfully');

      await sftp.fastPut(argsConfig['--local'], argsConfig['--remote'], {
         chunkSize: 1024 * 1024 * 31,
         concurrency: cpus
      });
      console.log('File uploaded successfully');
   } catch (err: any) {
      console.error("Error: ", err);
      throw Error(err.message);
   } finally {
      await sftp.end();
      console.log('Disconnected from SFTP server');
   }
})();

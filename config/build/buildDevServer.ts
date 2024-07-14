import {BuildOptions} from "./types/config";
import {Configuration as DevServerConfiguration} from 'webpack-dev-server';
export function buildDevServer(options: BuildOptions):DevServerConfiguration {
    return {
        static: {
            directory: options.paths.server,
        },
        historyApiFallback: true,
        compress: true,
        port: 3000,
        open: true,
    }
}
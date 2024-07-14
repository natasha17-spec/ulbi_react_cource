import * as webpack from "webpack";
import { BuildOptions } from "./types/config";
export declare function buildPlugins({ paths }: BuildOptions): webpack.WebpackPluginInstance[];

export enum BuildMode {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
}

export interface BuildPaths {
  entry: string;
  output: string;
  html: string;
  src: string;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDevelopment: boolean;
  port: number;
  host: string;
}

export interface BuildEnv {
  MODE: BuildMode;
  HOST: string;
}

export enum BuildMode {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
}

export interface BuildPaths {
  entry: string;
  output: string;
  html: string;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
}

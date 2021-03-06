export interface Settings {
  command: string;
  operations: Operation[];
}

export interface Template {
  args: string[];
  command?: string;
  dirty: false;
  responseFunc?: (result: any) => any;
  responsePath?: string;
  responseRegex?: string;
}

export interface Functions {
  [key: string]: string[];
}

export interface Operation {
  template: Template;
  functions: Functions;
}

export interface DataAccessObject {
  [key: string]: any;
}

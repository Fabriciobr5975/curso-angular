
export interface CdnjResult {
  name: string;
  latest: string;
  version: string;
}

export interface CdnjResponse {
  results: CdnjResult[];
  total: number;
  available: number;
}

import { resolve } from 'path';
import { sync } from 'glob';
import { filesPattern, ignore } from './config';

// 포맷 가져오기
export const formatPath = (name: string): string => resolve(process.cwd(), `./node_modules/eslint/lib/cli-engine/formatters/${name}`);
// ignore 추가
export const getLintFileList = (): string[] => sync(filesPattern, { ignore });

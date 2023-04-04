import { StorageService } from '@/services/storage';

export class LocalStorageService extends StorageService {
  public constructor(prefix: string) {
    super(window.localStorage, prefix);
  }
}

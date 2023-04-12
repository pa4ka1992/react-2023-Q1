import { StorageService } from '@/services/storage/storage';

export class LocalStorageService extends StorageService {
  public constructor(prefix: string) {
    super(window.localStorage, prefix);
  }
}
